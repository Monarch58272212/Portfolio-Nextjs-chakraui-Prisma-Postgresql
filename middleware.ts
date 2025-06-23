import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const publicRoutes = ["/", "/Projects"];
  const path = request.nextUrl.pathname;

  if (publicRoutes.includes(path)) {
    return NextResponse.next();
  }

  return withAuth(request);
}

export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)",
  ],
};
