import { json, error } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';

const USER = 'admin';
const PASSWORD_HASH = '$2a$10$CwTycUXWue0Thq9StjUM0uJ8YKl7Lx2oYMejz7iU9kgZwZkM.AyHG'; // bcrypt hash for 'password123'

export async function POST({ request }) {
  const { username, password } = await request.json();

  if (username !== USER || !await bcrypt.compare(password, PASSWORD_HASH)) {
    throw error(401, 'Unauthorized');
  }

  return new Response(null, {
    status: 200,
    headers: {
      'Set-Cookie': serialize('session', 'authenticated', {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60 * 24 // 1 day
      })
    }
  });
}
