import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/utils/jwtUtils'

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value

  if (token && verifyToken(token)) {
    return NextResponse.json({ authorized: true })
  } else {
    return NextResponse.json({ authorized: false }, { status: 401 })
  }
}