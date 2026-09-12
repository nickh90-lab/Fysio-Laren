import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const response = NextResponse.redirect(new URL("/coming-soon", url.origin));
  response.cookies.delete("fysio-preview");
  return response;
}
