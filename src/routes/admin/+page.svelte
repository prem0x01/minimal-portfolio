import { verifyToken } from '$lib/api/auth';
import cookie from 'cookie';

export async function load({ request }) {
  const cookies = cookie.parse(request.headers.get('cookie') || '');
  const token = cookies.token;
  const user = verifyToken(token);

  if (!user) {
    return {
      status: 302,
      redirect: '/login'
    };
  }

  return { user };
}
