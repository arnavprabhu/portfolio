import { NextResponse, type NextRequest } from "next/server";

// Agents that ask for markdown get /llms.txt instead of the HTML home page.
export function proxy(request: NextRequest) {
  if (!request.headers.get("accept")?.includes("text/markdown")) return;
  const response = NextResponse.rewrite(new URL("/llms.txt", request.url));
  response.headers.set("Vary", "Accept");
  return response;
}

export const config = { matcher: "/" };
