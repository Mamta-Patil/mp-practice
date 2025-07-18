'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setToken } from '../../lib/auth';
import LoginForm from '../../components/LoginForm';

export default function Login() {
  const router = useRouter();

  const handleLogin = async (email, password) => {
    const res = await fetch('http://localhost:5000/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setToken(data.token);
      router.push('/dashboard');
    } else {
      alert(data.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}