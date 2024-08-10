import { NextResponse } from 'next/server'
import { validateTelegramWebAppData } from '@/utils/telegramAuth'
import { cookies } from 'next/headers';
import { encrypt } from '@/lib';

export async function POST(request: Request) {
  const { initData } = await request.json()

  const validationResult = validateTelegramWebAppData(initData)

  if (validationResult.validatedData) {
    console.log("Validation result: ", validationResult);
    const user = { telegramId: validationResult.user.id };

    // Create the session
    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ user, expires });

    // Save the session in a cookie
    cookies().set("session", session, { expires, httpOnly: true });

    const response = NextResponse.json({ message: 'Authentication successful' })

    return response
  } else {
    return NextResponse.json({ message: validationResult.message }, { status: 401 })
  }
}