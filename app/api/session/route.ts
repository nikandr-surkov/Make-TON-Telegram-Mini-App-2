import { NextResponse } from 'next/server'
import { getSession } from '@/lib'

export async function GET() {
  const session = await getSession()
  if (session) {
    return NextResponse.json({ isAuthenticated: true })
  } else {
    return NextResponse.json({ isAuthenticated: false }, { status: 401 })
  }
}