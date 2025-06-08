import jwt from 'jsonwebtoken';

// Use a strong secret in production!
const SECRET = 'your-secret-key';

export function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, SECRET);
        return decoded;
    } catch (err) {
        return null;
    }
}

