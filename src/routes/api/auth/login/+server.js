import { json } from '@sveltejs/kit';
import { authenticate } from '$lib/api/auth';
import cookie from 'cookie';

export async function POST({ request }) {
  const { username, password } = await request.json();
  const token = await authenticate(username, password);

  if (token) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Set-Cookie': cookie.serialize('token', token, {
          httpOnly: true,
          path: '/',
          maxAge: 3600 // 1 hour
        }),
        'Content-Type': 'application/json'
      }
    });
  }

  return json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}
