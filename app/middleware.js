import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { parseCookies } from 'cookies-next';

const JWT_SECRET = process.env.JWT_SECRET || 'MediaStreamRandom@!9680';

export function middleware(req) {
  // Check if the user is trying to access the admin route
  if (req.url.startsWith('/admin')) {
    const cookies = parseCookies({ req });
    const token = cookies.auth_token;

    if (!token) {
      // If no token, redirect to login
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      // Verify the token
      jwt.verify(token, JWT_SECRET);
      return NextResponse.next(); // Proceed to the admin page
    } catch (error) {
      // If token is invalid, redirect to login
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ['/admin/*'],
};
