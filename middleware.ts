import { NextResponse, type NextRequest } from "next/server";

const AUTH_COOKIE = "pet_admin_auth";

export async function middleware(request: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return new NextResponse("Admin password is not configured.", { status: 500 });
  }

  const token = request.cookies.get(AUTH_COOKIE)?.value;
  const expectedToken = await createAdminToken(adminPassword);

  if (token === expectedToken) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", request.nextUrl.pathname);

  return NextResponse.redirect(loginUrl);
}

async function createAdminToken(password: string) {
  const data = new TextEncoder().encode(`pet-care-admin:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export const config = {
  matcher: "/admin/:path*"
};
