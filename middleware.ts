import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function middleware(request: NextRequest) {
  const publicRoutes = ["/", "/Projects", "/Contact"];
  const path = request.nextUrl.pathname;

  if (publicRoutes.includes(path)) {
    return NextResponse.next();
  }

  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }

  const user = await getUser();
  const allowedEmail = process.env.NEXT_PUBLIC_ALLOWED_EMAIL;

  // middleware.ts (server side)
  if (path.startsWith("/Create") && user?.email !== allowedEmail) {
    const redirectUrl = new URL("/", request.url);
    redirectUrl.searchParams.set("error", "unauthorized");
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.gif$).*)",
  ],
};
