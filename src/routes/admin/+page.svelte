import { redirect } from '@sveltejs/kit';
import { verifyToken } from '$lib/api/auth';
import cookie from 'cookie';

export async function load({ request }) {
  const cookies = cookie.parse(request.headers.get('cookie') || '');
  const token = cookies.token;
  const user = verifyToken(token);

  if (!user) {
    // Proper SvelteKit redirection
    throw redirect(302, '/login');
  }

  return { user };
}

