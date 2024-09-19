'use client'

import { useState } from 'react';
import { Login } from '@/app/components/login';
import { useAuth } from '@/app/hooks/useAuth';
import { getIdToken } from 'firebase/auth';

export default function Home() {
  const user = useAuth();
  const [message, setMessage] = useState('');

  const fetchProtectedData = async () => {
    if (!user) {
      setMessage('You must be logged in to fetch protected data');
      return;
    }

    try {
      const token = await getIdToken(user);
      const response = await fetch('/api/protected', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        setMessage('Failed to fetch protected data');
      }
    } catch (error) {
      console.error('Error fetching protected data:', error);
      setMessage('Error fetching protected data');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Firebase Auth Test</h1>
      <Login />
      <div className="mt-8">
        <button 
          onClick={fetchProtectedData}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Fetch Protected Data
        </button>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </div>
  );
}