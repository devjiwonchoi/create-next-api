import { type NextRequest, NextResponse } from 'next/server'

export async function GET(
  _request: NextRequest,
  context: { params: { id: string } }
) {
  const res = await fetch(`https://api.vercel.app/pokemon/${context.params.id}`)
  const pokemon = await res.json()

  return NextResponse.json(pokemon)
}
