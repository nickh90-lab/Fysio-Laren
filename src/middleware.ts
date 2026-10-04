import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isValidPreviewCode(code: string | null | undefined): boolean {
  if (!code) return false;
  const clean = code.trim().toLowerCase().replace(/[-\s]/g, "");
  return (
    clean === "fysiolaren2025" ||
    clean === "fysiolaren" ||
    clean === "fysio2025" ||
    clean === "fysio"
  );
}

// Routes that should always be accessible (no redirect)
const PUBLIC_PATHS = [
  "/api",
  "/coming-soon",
  "/preview",
  "/robots.txt",
  "/sitemap.xml",
  "/_next",
  "/favicon.ico",
  "/images",
  "/partners",
  "/team",
  "/fonts",
];

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // 0. De website is nu officieel live: alle bezoekers en zoekmachines hebben direct toegang
  if (process.env.NEXT_PUBLIC_SITE_LAUNCHED !== "false") {
    return NextResponse.next();
  }

  // 1. Allow API routes immediately (API routes handle their own auth & cookies)
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // 2. Check for preview code in query parameters (e.g. ?preview=... or ?code=...)
  const previewParam = searchParams.get("preview") || searchParams.get("code");
  if (isValidPreviewCode(previewParam)) {
    const targetUrl = request.nextUrl.clone();
    targetUrl.searchParams.delete("preview");
    targetUrl.searchParams.delete("code");
    
    // If they were on /preview or /coming-soon, send them to the real homepage
    if (targetUrl.pathname === "/preview" || targetUrl.pathname === "/coming-soon") {
      targetUrl.pathname = "/";
    }

    const response = NextResponse.redirect(targetUrl);
    response.cookies.set("fysio-preview", "toegang-verleend", {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });
    return response;
  }

  // 3. Allow public routes & assets
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // 4. Allow static asset files directly in /public (like .svg, .png, .jpg, .xml, .txt)
  if (/\.(svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot|xml|txt)$/i.test(pathname)) {
    return NextResponse.next();
  }

  // 5. Allow requests with a valid preview cookie
  const previewCookie = request.cookies.get("fysio-preview");
  if (previewCookie?.value === "toegang-verleend") {
    return NextResponse.next();
  }

  // 6. Redirect everyone else to coming-soon
  const comingSoonUrl = request.nextUrl.clone();
  comingSoonUrl.pathname = "/coming-soon";
  return NextResponse.redirect(comingSoonUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - files with static extensions
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)$).*)",
  ],
};
