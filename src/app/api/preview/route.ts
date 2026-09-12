import { NextResponse } from "next/server";

const PREVIEW_CODE = process.env.PREVIEW_CODE || "fysiolaren2025";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { code } = body;

    if (!code || code !== PREVIEW_CODE) {
      return NextResponse.json({ error: "Ongeldige code" }, { status: 401 });
    }

    // Set preview cookie (valid for 30 days)
    const response = NextResponse.json({ success: true });
    response.cookies.set("fysio-preview", "toegang-verleend", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Ongeldige aanvraag" },
      { status: 400 }
    );
  }
}
