import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Check if maintenance mode is enabled via environment variable
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

  // If maintenance mode is ON and the user is NOT already on the under-construction page, redirect them.
  if (isMaintenanceMode && request.nextUrl.pathname !== '/under-construction') {
    const url = request.nextUrl.clone();
    url.pathname = '/under-construction';
    return NextResponse.redirect(url); // Redirects the user to /under-construction
  }

  // If maintenance mode is OFF and the user tries to manually visit the under-construction page, redirect to home.
  if (!isMaintenanceMode && request.nextUrl.pathname === '/under-construction') {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt, sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
