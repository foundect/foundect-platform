// lib/business-financials-reads.ts
//
// Business Financials (READ-ONLY) server-side helpers.
//
// HARD RULES:
// - No routes, no UI changes
// - No write operations (no insert/update/delete)
// - No service_role key
// - No bypassing Supabase RLS
// - Every query MUST run through withRlsPrisma
// - Explicitly scope by ctx.userId (ownership boundary = auth.uid())
//
// Role enforcement:
// - If unauthenticated => return null
// - If profiles.role !== 'business' => return null
//
// RLS edge cases:
// - findMany returning [] is valid
// - findFirst returning null is treated as unauthorized where specified
// - Never assume rows exist
//
// NOTE on totals:
// - "Total funds raised / investors" is computed from `investor_transactions`
//   using simple SUM + COUNT(DISTINCT ...) over *completed* investments only:
//   type = 'investment' AND status = 'completed'
//   (Adjust if product rules change.)

import { Prisma } from '@prisma/client';
import { withRlsPrisma } from '@/lib/prisma-rls';

export type BusinessCampaignFinancial = {
  campaign_id: string;
  title: string;
  status: string;
  total_raised: string; // numeric -> string
  total_investors: number;
  created_at: Date;
};

export type BusinessInvestmentFinancial = {
  campaign_id: string;
  amount: string; // numeric -> string
  currency: string;
  status: string;
  created_at: Date;
};

async function ensureBusinessRole(tx: Prisma.TransactionClient, userId: string): Promise<boolean> {
  const profile = await tx.profiles.findFirst({
    where: { user_id: userId },
    select: { role: true },
  });

  return !!profile && profile.role === 'business';
}

/**
 * Part A — Business’s own campaign financials (READ-ONLY).
 *
 * Returns campaigns owned by the authenticated business user with:
 * - campaign_id, title, status, created_at
 * - total_raised (sum of completed investment amounts)
 * - total_investors (distinct investors across completed investments)
 *
 * Returns:
 * - null if unauthorized
 * - [] if authorized but no campaigns
 */
export async function getBusinessCampaignFinancials(): Promise<BusinessCampaignFinancial[] | null> {
  try {
    return await withRlsPrisma(async (tx, ctx) => {
      // Role enforcement first
      const isBusiness = await ensureBusinessRole(tx, ctx.userId);
      if (!isBusiness) return null;

      // Single read-only aggregation query scoped by business_user_id = ctx.userId.
      // RLS applies to BOTH tables in the query.
      const rows = await tx.$queryRaw<
        Array<{
          campaign_id: string;
          title: string;
          status: string;
          total_raised: unknown; // numeric comes back driver-specific
          total_investors: number;
          created_at: Date;
        }>
      >(Prisma.sql`
        select
          c.id as campaign_id,
          c.title,
          c.status,
          coalesce(sum(t.amount), 0) as total_raised,
          count(distinct t.user_id) as total_investors,
          c.created_at
        from campaigns c
        left join investor_transactions t
          on t.campaign_id = c.id
         and t.type = 'investment'
         and t.status = 'completed'
        where c.business_user_id = ${ctx.userId}::uuid
        group by c.id, c.title, c.status, c.created_at
        order by c.created_at desc;
      `);

      // [] is valid for authorized users with no campaigns.
      return rows.map((r) => ({
        campaign_id: r.campaign_id,
        title: r.title,
        status: r.status,
        total_raised: typeof r.total_raised === 'string'
          ? r.total_raised
          : // pg numeric can come as number/Decimal-ish depending on driver;
            // always return string per requirements.
            String(r.total_raised ?? '0'),
        total_investors: Number(r.total_investors ?? 0),
        created_at: new Date(r.created_at),
      }));
    });
  } catch {
    return null;
  }
}

/**
 * Part B — Business investments (business as investor) (READ-ONLY).
 *
 * Returns completed/pending/etc investments made BY the business account itself,
 * using the same `investor_transactions` table but scoped by:
 *   investor_transactions.user_id = ctx.userId
 *
 * Returns:
 * - null if unauthorized
 * - [] if authorized but no investments
 */
export async function getBusinessInvestmentFinancials(): Promise<BusinessInvestmentFinancial[] | null> {
  try {
    return await withRlsPrisma(async (tx, ctx) => {
      // Role enforcement first
      const isBusiness = await ensureBusinessRole(tx, ctx.userId);
      if (!isBusiness) return null;

      const rows = await tx.investor_transactions.findMany({
        where: {
          user_id: ctx.userId,
          type: 'investment',
        },
        select: {
          campaign_id: true,
          amount: true,
          currency: true,
          status: true,
          created_at: true,
        },
        orderBy: { created_at: 'desc' },
      });

      // [] is valid for authorized users with no investments.
      return rows.map((r) => ({
        campaign_id: r.campaign_id,
        amount: r.amount.toString(),
        currency: r.currency,
        status: r.status,
        created_at: r.created_at,
      }));
    });
  } catch {
    return null;
  }
}


