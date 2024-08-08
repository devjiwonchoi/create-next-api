import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json('Unauthorized', { status: 401 })
}
