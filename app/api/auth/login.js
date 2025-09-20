import jwt from 'jsonwebtoken';
import { setCookie } from 'cookies-next';

const JWT_SECRET = process.env.JWT_SECRET || 'MediaStreamRandom@!9680'; 
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin123') {
      // Create a JWT token
      const token = jwt.sign({ username: 'admin', role: 'admin' }, JWT_SECRET, {
        expiresIn: '1h', // Token expires in 1 hour
      });
      // Set token as a cookie
      setCookie('auth_token', token, { req, res, maxAge: 60 * 60 }); 

      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
