import { NextResponse } from 'next/server'
import { sign } from 'jsonwebtoken'
import { validateTelegramWebAppData } from '@/utils/telegramAuth'

export async function POST(request: Request) {
  const { initData } = await request.json()

  const validationResult = validateTelegramWebAppData(initData)

  if (validationResult.validatedData) {
    const token = sign(
      { userId: validationResult.user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    )

    const response = NextResponse.json({ message: 'Authentication successful' })
    response.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 10,
      path: '/',
    })

    return response
  } else {
    return NextResponse.json({ message: validationResult.message }, { status: 401 })
  }
}