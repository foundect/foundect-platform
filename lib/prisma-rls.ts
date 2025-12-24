// lib/prisma-rls.ts
//
// Goal: Ensure Prisma queries execute under Supabase RLS.
//
// How this works:
// - We use Supabase Auth (cookie-based) to get the current user server-side.
// - Then we run Prisma queries inside a transaction where we `SET LOCAL`:
//   - `request.jwt.claims` (used by Supabase `auth.uid()` and friends)
//   - `role` to `authenticated` (or `anon`)
//
// IMPORTANT REQUIREMENTS:
// - No service role keys
// - Never bypass RLS
// - JWT handling is done by Supabase (we do not verify/issue JWTs)
//
// NOTE:
// For this to truly enforce RLS, your Prisma `DATABASE_URL` must connect as a
// non-superuser role that is allowed to `SET ROLE authenticated/anon` (commonly
// the Supabase `authenticator` role). If you connect as `postgres`, RLS can be bypassed.

import { Prisma } from '@prisma/client';
import { createServerClient } from '@supabase/ssr';
import type { CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

import { prisma } from '@/lib/prisma';

export type AppRole = 'investor' | 'business' | 'admin';

export type AuthContext = {
  userId: string;
  role: AppRole;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables.');
}

function createSupabaseServerClient() {
  const cookieStore = cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        cookieStore.set({ name, value, ...options });
      },
      remove(name: string, options: CookieOptions) {
        cookieStore.set({ name, value: '', ...options });
      },
    },
  });
}

/**
 * Returns the authenticated user + application role, or null if unauthenticated.
 * Role is read via Supabase RLS (no bypass).
 */
export async function getAuthContext(): Promise<AuthContext | null> {
  const supabase = createSupabaseServerClient();

  const {
    data: { user },
    error: userErr,
  } = await supabase.auth.getUser();

  if (userErr || !user) return null;

  const { data: profile, error: profileErr } = await supabase
    .from('profiles')
    .select('role')
    .eq('user_id', user.id)
    .single();

  if (profileErr || !profile?.role) return null;

  return { userId: user.id, role: profile.role as AppRole };
}

async function setRlsContext(tx: Prisma.TransactionClient, ctx: AuthContext | null) {
  // Supabase RLS relies on `auth.uid()` which reads `request.jwt.claims.sub`.
  // We set only what's needed for RLS evaluation.
  if (!ctx) {
    await tx.$executeRaw(
      Prisma.sql`select set_config('role', 'anon', true), set_config('request.jwt.claims', '{}'::text, true);`
    );
    return;
  }

  const claims = JSON.stringify({
    sub: ctx.userId,
    role: 'authenticated',
  });

  await tx.$executeRaw(
    Prisma.sql`select set_config('role', 'authenticated', true), set_config('request.jwt.claims', ${claims}, true);`
  );
}

let checkedConnectionUser = false;
async function warnIfBypassingRls() {
  if (checkedConnectionUser) return;
  checkedConnectionUser = true;

  if (process.env.NODE_ENV !== 'development') return;

  try {
    const rows = await prisma.$queryRaw<{ current_user: string }[]>(
      Prisma.sql`select current_user;`
    );
    const currentUser = rows?.[0]?.current_user;
    if (currentUser && currentUser.toLowerCase() === 'postgres') {
      // eslint-disable-next-line no-console
      console.warn(
        '[RLS WARNING] Prisma DATABASE_URL is connected as "postgres" (superuser). ' +
          'This can bypass Supabase RLS. Use a non-superuser role (commonly "authenticator").'
      );
    }
  } catch {
    // If we can't query, ignore.
  }
}

/**
 * Run Prisma queries under the current Supabase user's RLS context.
 *
 * - Returns null if unauthenticated
 * - Executes all queries in `fn` within a transaction where `SET LOCAL` is applied
 */
export async function withRlsPrisma<T>(
  fn: (tx: Prisma.TransactionClient, ctx: AuthContext) => Promise<T>
): Promise<T | null> {
  await warnIfBypassingRls();

  const ctx = await getAuthContext();
  if (!ctx) return null;

  return prisma.$transaction(async (tx) => {
    await setRlsContext(tx, ctx);
    return fn(tx, ctx);
  });
}

/**
 * Run Prisma queries under an anonymous RLS context (`role = anon`).
 * Use this only for operations your RLS policies allow for anonymous users.
 */
export async function withAnonRlsPrisma<T>(
  fn: (tx: Prisma.TransactionClient) => Promise<T>
): Promise<T> {
  await warnIfBypassingRls();

  return prisma.$transaction(async (tx) => {
    await setRlsContext(tx, null);
    return fn(tx);
  });
}


