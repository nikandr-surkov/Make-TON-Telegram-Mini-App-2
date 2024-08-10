import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './utils/jwtUtils'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/protected')) {
    // Get the token cookie
    const tokenCookie = request.cookies.get('token')
    
    console.log("Token cookie:", tokenCookie) // This will log the entire cookie object
    
    // If the cookie exists, get its value
    const token = tokenCookie?.value
    
    console.log("Token value:", token)

    // Log all cookies
    const allCookies = request.cookies.getAll()
    console.log("All cookies:", allCookies)

    if (!token || !verifyToken(token)) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/protected/:path*',
}