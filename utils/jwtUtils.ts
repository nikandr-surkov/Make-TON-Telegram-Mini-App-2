import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET as string

export function generateToken(userId: string): string {
  return sign({ userId }, JWT_SECRET, { expiresIn: '1h' })
}

export function verifyToken(token: string): { userId: string } | null {
  try {
    const decoded = verify(token, JWT_SECRET) as { userId: string }
    return decoded
  } catch (error) {
    return null
  }
}