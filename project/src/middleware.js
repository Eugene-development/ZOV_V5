import { NextResponse } from "next/server";

export function middleware(request) {
  // if (request.nextUrl.pathname.startsWith("/contacts")) {
  //   console.log("123");
  //   return NextResponse.rewrite(new URL("/", request.url));
  // }
  // if (request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  // }
  // console.log(request.nextUrl.hostname);
  // console.log("111");
  // const requestHeaders = new Headers(request.headers);
  // requestHeaders.set("x-hello-from-middleware1", "hello");
}

// export const config = {
//   matcher: "/",
// };
