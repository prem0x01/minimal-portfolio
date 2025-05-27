import { parse } from 'cookie';
import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
  const cookies = parse(event.request.headers.get('cookie') || '');

  if (event.url.pathname.startsWith('/admin') && event.url.pathname !== '/admin/login') {
    if (cookies.session !== 'authenticated') {
      throw redirect(303, '/admin/login');
    }
  }

  return resolve(event);
}
