import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/app/lib/firebase/firebase-admin';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.split('Bearer ')[1];

  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    return NextResponse.json({ message: `Hello, ${decodedToken.email}!` });
  } catch (error) {
    console.error('Token verification failed:', error);
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}