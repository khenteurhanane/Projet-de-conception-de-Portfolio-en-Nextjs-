import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { Users } from '@/models';
import { ensureDb } from '@/lib/api-middleware';

export async function POST(req: Request) {
  try {
    await ensureDb();
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }

    const existingUser = await Users.findOne({ username });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Users.create({ username, password: hashedPassword });

    return NextResponse.json({ message: 'User created successfully', user: { id: user.id, username: user.username } });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
