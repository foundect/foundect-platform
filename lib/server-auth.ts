// lib/server-auth.ts
// Server-side authentication helper for Next.js App Router
// Works in Server Components, Server Actions, and Route Handlers

import { createServerClient } from '@supabase/ssr';
import type { CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { User } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables.');
}

/**
 * Create a server-side Supabase client that reads/writes auth cookies.
 * Uses the anon key (so RLS is enforced); no service-role keys.
 */
function createServerSupabaseClient() {
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

export type AppRole = 'investor' | 'business' | 'admin';

export type AuthenticatedUserWithRole = {
  user: User;
  role: AppRole;
};

function isAppRole(value: unknown): value is AppRole {
  return value === 'investor' || value === 'business' || value === 'admin';
}

/**
 * Get the current authenticated user and their role
 * Returns null if unauthenticated
 * 
 * Role source of truth: `profiles.role` (enforced via Supabase RLS).
 *
 * Returns null if:
 * - no Supabase session
 * - profile row missing
 * - role unknown
 */
export async function getCurrentUserWithRole(): Promise<AuthenticatedUserWithRole | null> {
  try {
    const supabase = createServerSupabaseClient();
    
    // Get the current user from Supabase Auth
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return null;
    }
    
    // Fetch the user's profile to get their role
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('user_id', user.id)
      .single();
    
    // If profile doesn't exist or is not readable under RLS, treat as unauthenticated.
    if (profileError || !profile) {
      return null;
    }
    
    if (!isAppRole(profile.role)) {
      return null;
    }

    return {
      user,
      role: profile.role,
    };
  } catch (error) {
    // Return null on any error (unauthenticated)
    return null;
  }
}

/**
 * Get only the current authenticated user (without role)
 * Returns null if unauthenticated
 */
export async function getCurrentUser() {
  try {
    const supabase = createServerSupabaseClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error || !user) {
      return null;
    }
    
    return user;
  } catch (error) {
    return null;
  }
}

