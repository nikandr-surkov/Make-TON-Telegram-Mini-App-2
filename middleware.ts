import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './utils/jwtUtils'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (request.nextUrl.pathname.startsWith('/protected')) {
    if (!token || !verifyToken(token)) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/protected/:path*',
}