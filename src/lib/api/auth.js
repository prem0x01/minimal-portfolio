import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { openDb } from '../db/database';

const JWT_SECRET = import.meta.env.VITE_JWT_SECRET || 'super-secret-key';

export async function authenticate(username, password) {
  const db = await openDb();
  const user = await db.get('SELECT * FROM users WHERE username = ?', [username]);
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    return token;
  }
  return null;
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}
