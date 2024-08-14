import { type NextRequest, NextResponse } from 'next/server';
import { methods } from '../methods';

export async function GET(
  request: NextRequest,
  context: { params: { method: string } }
) {
  const method = context.params.method.toUpperCase();
  if (!methods.includes(method)) {
    return NextResponse.json(
      { error: `Method ${method} is not supported.` },
      { status: 404 }
    );
  }

  if (method === 'GET') {
    return NextResponse.json({ method: 'GET' });
  }

  const url = request.nextUrl.toString();
  const res = await fetch(url, { method });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST() {
  return NextResponse.json({ method: 'POST' });
}

export async function PUT() {
  return NextResponse.json({ method: 'PUT' });
}

export async function DELETE() {
  return NextResponse.json({ method: 'DELETE' });
}

export async function PATCH() {
  return NextResponse.json({ method: 'PATCH' });
}

export async function OPTIONS() {
  return NextResponse.json({ method: 'OPTIONS' });
}

export async function HEAD() {
  return NextResponse.json({ method: 'HEAD' });
}
