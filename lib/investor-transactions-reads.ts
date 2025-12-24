// lib/investor-transactions-reads.ts
//
// Investor Transactions (READ-ONLY) server-side helper.
//
// STRICT:
// - Investor scope only
// - Read-only (NO create/update/delete)
// - No service role keys
// - No RLS bypass
// - Every query runs through `withRlsPrisma`
// - Always scope by owner boundary: `investor_transactions.user_id = auth.uid()`
//
// Unauthorized handling:
// - Unauthenticated => null
// - profiles row missing => null
// - role !== 'investor' => null
// - RLS-hidden rows => treated as missing; findMany [] is OK

import { withRlsPrisma } from '@/lib/prisma-rls';

export type InvestorTransactionRow = {
  id: string;
  user_id: string;
  campaign_id: string;
  amount: string; // converted from Prisma Decimal to string for safe serialization
  currency: string;
  type: string; // investment | profit | withdrawal
  status: string; // pending | completed | failed
  created_at: Date;
};

/**
 * Returns the authenticated investor's transaction history, or null if unauthorized.
 *
 * Notes:
 * - Returning [] is valid (no transactions yet).
 * - Uses `profiles` to verify role === 'investor' before reading transactions.
 */
export async function getInvestorTransactions(): Promise<InvestorTransactionRow[] | null> {
  try {
    return await withRlsPrisma(async (tx, ctx) => {
      // Verify role boundary first (RLS enforced on profiles).
      const account = await tx.profiles.findFirst({
        where: { user_id: ctx.userId },
        select: { role: true },
      });

      if (!account) return null;
      if (account.role !== 'investor') return null;

      const rows = await tx.investor_transactions.findMany({
        where: { user_id: ctx.userId },
        select: {
          id: true,
          user_id: true,
          campaign_id: true,
          amount: true,
          currency: true,
          type: true,
          status: true,
          created_at: true,
        },
        orderBy: { created_at: 'desc' },
      });

      // findMany returns [] if none; this is valid.
      return rows.map((r) => ({
        ...r,
        amount: r.amount.toString(),
      }));
    });
  } catch {
    // Never throw generic errors from read helpers; treat as unauthorized.
    return null;
  }
}


