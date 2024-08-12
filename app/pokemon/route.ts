import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const url = request.nextUrl.toString()

  const { searchParams } = request.nextUrl
  const type = searchParams.get('type')

  const res = await fetch(`https://api.vercel.app/pokemon?type=${type}`)
  const data = await res.json()

  const pokedex = data.map((pokemon: { id: string }) => {
    return {
      ...pokemon,
      url: `${url}/${pokemon.id}`,
    }
  })

  return NextResponse.json(pokedex)
}
