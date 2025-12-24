// middleware.ts
// Next.js middleware for protecting routes and handling authentication
// Note: For full Supabase auth in middleware, consider using @supabase/ssr package
// This is a basic implementation - enhance as needed

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Protected routes that require authentication
  // For now, we'll handle auth checks in the page components
  // You can enhance this later with proper Supabase session checking
  
  const protectedRoutes = ['/investor', '/business'];
  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  // Basic route protection - redirect to login if accessing protected routes
  // Full auth check should be done in page components using getCurrentUser()
  if (isProtectedRoute) {
    // Check for auth token in cookies (basic check)
    const hasAuthToken = req.cookies.has('sb-access-token') || 
                         req.cookies.has('supabase-auth-token');
    
    // For now, allow access - implement proper session check in pages
    // Uncomment below when ready to enforce auth:
    // if (!hasAuthToken) {
    //   const redirectUrl = req.nextUrl.clone();
    //   redirectUrl.pathname = '/auth';
    //   return NextResponse.redirect(redirectUrl);
    // }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

