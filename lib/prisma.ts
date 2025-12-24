// lib/prisma.ts
// Prisma client singleton (server-only).
//
// IMPORTANT:
// - Prisma is used for DB read/write only (no auth).
// - RLS enforcement is handled via `lib/prisma-rls.ts` (set request.jwt.claims per request).
//
// Note: This file intentionally exports the raw Prisma client. For any request-scoped
// access that must respect Supabase RLS, use helpers in `lib/prisma-rls.ts`.

import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var __foundect_prisma__: PrismaClient | undefined;
}

export const prisma: PrismaClient =
  globalThis.__foundect_prisma__ ??
  new PrismaClient({
    // Keep logs quiet by default; enable via DEBUG or explicit config when needed.
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalThis.__foundect_prisma__ = prisma;
}


