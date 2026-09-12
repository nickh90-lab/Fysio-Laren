import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PREVIEW_CODE = process.env.PREVIEW_CODE || "fysiolaren2025";

// Routes that should always be accessible (no redirect)
const PUBLIC_PATHS = [
  "/coming-soon",
  "/preview",
  "/api",
  "/_next",
  "/favicon.ico",
  "/images",
  "/partners",
  "/team",
  "/fonts",
];

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // 1. Check for preview code in query parameters (e.g. ?preview=fysiolaren2025 of ?code=fysiolaren2025)
  const previewParam = searchParams.get("preview") || searchParams.get("code");
  if (previewParam === PREVIEW_CODE) {
    const targetUrl = request.nextUrl.clone();
    targetUrl.searchParams.delete("preview");
    targetUrl.searchParams.delete("code");
    // If they came to /preview or /coming-soon, send them to homepage
    if (targetUrl.pathname === "/preview" || targetUrl.pathname === "/coming-soon") {
      targetUrl.pathname = "/";
    }

    const response = NextResponse.redirect(targetUrl);
    response.cookies.set("fysio-preview", "toegang-verleend", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });
    return response;
  }

  // 2. Allow public routes & assets
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // 3. Allow static asset files directly in /public (like .svg, .png, .jpg)
  if (/\.(svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)$/i.test(pathname)) {
    return NextResponse.next();
  }

  // 4. Allow requests with a valid preview cookie
  const previewCookie = request.cookies.get("fysio-preview");
  if (previewCookie?.value === "toegang-verleend") {
    return NextResponse.next();
  }

  // 5. Redirect everyone else to coming-soon
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
