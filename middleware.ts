import { NextRequest, NextResponse } from "next/server"

const PROPOSAL_USERNAME = "greenchip"

export function middleware(request: NextRequest) {
  const authorization = request.headers.get("authorization")
  const expectedPassword = process.env.PROPOSAL_PASSWORD

  if (authorization?.startsWith("Basic ") && expectedPassword) {
    try {
      const credentials = atob(authorization.slice(6))
      const separator = credentials.indexOf(":")
      const username = credentials.slice(0, separator)
      const password = credentials.slice(separator + 1)

      if (separator > -1 && username === PROPOSAL_USERNAME && password === expectedPassword) {
        return NextResponse.next()
      }
    } catch {
      // Invalid Basic authentication values are handled by the challenge below.
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "Cache-Control": "no-store",
      "WWW-Authenticate": 'Basic realm="Greenchip Proposal", charset="UTF-8"',
    },
  })
}

export const config = {
  matcher: ["/greenchip-proposal/:path*"],
}
