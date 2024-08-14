import { type NextRequest, NextResponse } from 'next/server';

const paths = [
  { path: 'pokemon', description: "gotta catch 'em all!" },
  { path: 'pokemon?type=grass', description: 'sort pokemon by grass type' },
  { path: 'pokemon/25', description: "who's that pokemon?" },
  { path: 'methods', description: 'list of methods' },
];

export async function GET(request: NextRequest) {
  const url = request.nextUrl.toString();
  const apis = paths.map(({ path, description }) => {
    return { path: url + path, description };
  });

  return NextResponse.json(apis);
}
