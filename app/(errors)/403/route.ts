import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json('Forbidden', { status: 403 })
}
