import { createHash } from "crypto";
import { NextResponse, type NextRequest } from "next/server";

const AUTH_COOKIE = "pet_admin_auth";

function createAdminToken(password: string) {
  return createHash("sha256").update(`pet-care-admin:${password}`).digest("hex");
}

function getSafeNext(value: FormDataEntryValue | null) {
  const next = typeof value === "string" ? value : "/admin";

  return next.startsWith("/admin") ? next : "/admin";
}

export async function POST(request: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return new NextResponse("Admin password is not configured.", { status: 500 });
  }

  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");
  const next = getSafeNext(formData.get("next"));

  if (password !== adminPassword) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("error", "1");
    loginUrl.searchParams.set("next", next);

    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  const response = NextResponse.redirect(new URL(next, request.url), { status: 303 });
  response.cookies.set({
    name: AUTH_COOKIE,
    value: createAdminToken(adminPassword),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8
  });

  return response;
}
