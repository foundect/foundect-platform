// lib/investor-reads.ts
//
// Investor dashboard (READ-ONLY) server-side helpers.
//
// STRICT:
// - No writes (no create/update/delete)
// - No service role keys
// - No RLS bypass
// - Every query runs through `withRlsPrisma`
// - Always scope by `user_id = ctx.userId` (ownership boundary == auth.uid())
//
// Unauthorized handling:
// - Unauthenticated session => null
// - RLS-hidden rows => Prisma returns null => treat as unauthorized => null
// - Role mismatch => null

import { withRlsPrisma } from '@/lib/prisma-rls';

export type InvestorProfileRow = {
  user_id: string;
  full_name: string;
  phone: string;
  kyc_verified: boolean;
  created_at: Date;
};

export type InvestorAccountStatus = {
  role: 'investor';
  status: string;
};

/**
 * Returns the authenticated investor's `investor_profiles` row, or null if unauthorized.
 *
 * RLS assumptions:
 * - `investor_profiles.user_id = auth.uid()` is the ownership boundary.
 * - RLS may hide rows; Prisma will then return null (treated as unauthorized).
 */
export async function getInvestorProfile(): Promise<InvestorProfileRow | null> {
  try {
    return await withRlsPrisma(async (tx, ctx) => {
      // Explicitly scope by owner boundary even though RLS enforces it.
      const row = await tx.investor_profiles.findFirst({
        where: { user_id: ctx.userId },
        select: {
          user_id: true,
          full_name: true,
          phone: true,
          kyc_verified: true,
          created_at: true,
        },
      });

      // Null can mean "no row" OR "hidden by RLS" => unauthorized for our purposes.
      return row ?? null;
    });
  } catch {
    // Never throw generic errors from read helpers; treat as unauthorized.
    return null;
  }
}

/**
 * Returns `{ role, status }` from the authenticated user's `profiles` row, or null if unauthorized.
 *
 * Requirements:
 * - Must confirm `role === 'investor'`.
 * - If role mismatch or no row => null.
 */
export async function getInvestorAccountStatus(): Promise<InvestorAccountStatus | null> {
  try {
    return await withRlsPrisma(async (tx, ctx) => {
      // Explicitly scope by owner boundary even though RLS enforces it.
      const row = await tx.profiles.findFirst({
        where: { user_id: ctx.userId },
        select: { role: true, status: true },
      });

      if (!row) return null;
      if (row.role !== 'investor') return null;

      return { role: 'investor', status: row.status };
    });
  } catch {
    // Never throw generic errors from read helpers; treat as unauthorized.
    return null;
  }
}


