import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './utils/jwtUtils'
import { getSession } from './lib'

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/protected')) {
    const session = await getSession();
    console.log("Session: ", session);

    if (!session) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/protected/:path*',
}