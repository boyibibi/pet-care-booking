import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return new NextResponse("Admin password is not configured.", { status: 500 });
  }

  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Basic ")) {
    return unauthorized();
  }

  const encoded = authorization.slice("Basic ".length);
  const [, password] = atob(encoded).split(":");

  if (password !== adminPassword) {
    return unauthorized();
  }

  return NextResponse.next();
}

function unauthorized() {
  return new NextResponse("需要管理员密码", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Pet Care Admin"'
    }
  });
}

export const config = {
  matcher: "/admin/:path*"
};
