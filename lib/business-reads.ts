// lib/business-reads.ts
//
// Business dashboard (READ-ONLY) server-side helpers.
//
// STRICT:
// - Read-only (NO create/update/delete)
// - No service role keys
// - No RLS bypass
// - Every query runs through `withRlsPrisma`
// - Always scope by the owner boundary:
//   - `profiles.user_id = auth.uid()`
//   - `business_profiles.user_id = auth.uid()`
//   - `campaigns.business_user_id = auth.uid()`
//
// Unauthorized handling:
// - Unauthenticated => null (handled by `withRlsPrisma` returning null)
// - Role mismatch => null
// - RLS-hidden rows => Prisma returns null => treat as unauthorized => null
// - findMany returning [] is valid (no campaigns yet)

import { withRlsPrisma } from '@/lib/prisma-rls';

export type BusinessProfileRow = {
  user_id: string;
  business_name: string;
  business_email: string;
  phone: string;
  verified: boolean;
  created_at: Date;
};

export type CampaignMeta = {
  id: string;
  title: string;
  status: string;
  created_at: Date;
};

/**
 * Returns the authenticated business user's `business_profiles` row, or null if unauthorized.
 *
 * Requirements:
 * - Must confirm `profiles.role === 'business'`
 * - Must explicitly scope by `user_id = ctx.userId`
 * - If no row (or RLS hides it) => null
 */
export async function getBusinessProfile(): Promise<BusinessProfileRow | null> {
  try {
    return await withRlsPrisma(async (tx, ctx) => {
      // Confirm role boundary first (RLS enforced on profiles).
      const account = await tx.profiles.findFirst({
        where: { user_id: ctx.userId },
        select: { role: true },
      });

      if (!account) return null;
      if (account.role !== 'business') return null;

      const row = await tx.business_profiles.findFirst({
        where: { user_id: ctx.userId },
        select: {
          user_id: true,
          business_name: true,
          business_email: true,
          phone: true,
          verified: true,
          created_at: true,
        },
      });

      return row ?? null;
    });
  } catch {
    return null;
  }
}

/**
 * Returns a list of campaigns owned by the authenticated business user, or null if unauthorized.
 *
 * Requirements:
 * - Must confirm `profiles.role === 'business'`
 * - Must explicitly scope by `business_user_id = ctx.userId`
 * - Empty array [] is valid (no campaigns yet)
 */
export async function getBusinessCampaigns(): Promise<CampaignMeta[] | null> {
  try {
    return await withRlsPrisma(async (tx, ctx) => {
      // Confirm role boundary first (RLS enforced on profiles).
      const account = await tx.profiles.findFirst({
        where: { user_id: ctx.userId },
        select: { role: true },
      });

      if (!account) return null;
      if (account.role !== 'business') return null;

      const rows = await tx.campaigns.findMany({
        where: { business_user_id: ctx.userId },
        select: {
          id: true,
          title: true,
          status: true,
          created_at: true,
        },
        orderBy: { created_at: 'desc' },
      });

      return rows;
    });
  } catch {
    return null;
  }
}


