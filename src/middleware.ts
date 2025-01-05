import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;

	// Check if the requested pathname is not found
	if (
		!pathname.startsWith("/api") &&
		pathname != "/home" &&
		!pathname.startsWith("/images") &&
		!pathname.startsWith("/jardines")
	) {
		return NextResponse.redirect(new URL("/home", req.url));
	}

	return NextResponse.next();
}

// Define the paths that the middleware should run for
// This will run for all paths
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
