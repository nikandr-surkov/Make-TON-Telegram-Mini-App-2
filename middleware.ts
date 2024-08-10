import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './utils/jwtUtils'

export function middleware(request: NextRequest) {

  if (request.nextUrl.pathname.startsWith('/protected')) {
    const token = request.cookies.get('token')?.value
    console.log("Token: ", token)
    if (token) {
      console.log("Verify token? ", verifyToken(token))
    }
    if (!token || !verifyToken(token)) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/protected/:path*',
}