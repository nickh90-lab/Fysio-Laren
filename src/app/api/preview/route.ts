import { NextResponse } from "next/server";

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

// Support GET for direct browser link: /api/preview?code=...
export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code") || url.searchParams.get("preview");

  if (!isValidPreviewCode(code)) {
    // Redirect back to preview page with error
    return NextResponse.redirect(new URL("/preview?error=1", url.origin));
  }

  const response = NextResponse.redirect(new URL("/", url.origin));
  response.cookies.set("fysio-preview", "toegang-verleend", {
    httpOnly: false, // Accessible to client and server
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });
  return response;
}

// Support POST for form submissions (both JSON and form-urlencoded)
export async function POST(request: Request) {
  try {
    let code: string | null = null;
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      code = body.code;
    } else {
      const formData = await request.formData();
      code = formData.get("code") as string;
    }

    const url = new URL(request.url);

    if (!isValidPreviewCode(code)) {
      if (contentType.includes("application/json")) {
        return NextResponse.json({ error: "Ongeldige code" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/preview?error=1", url.origin));
    }

    // Success: if JSON, return json with cookie; if form, redirect to / with cookie
    if (contentType.includes("application/json")) {
      const response = NextResponse.json({ success: true });
      response.cookies.set("fysio-preview", "toegang-verleend", {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
      return response;
    } else {
      const response = NextResponse.redirect(new URL("/", url.origin), 303);
      response.cookies.set("fysio-preview", "toegang-verleend", {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
      return response;
    }
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag" }, { status: 400 });
  }
}
