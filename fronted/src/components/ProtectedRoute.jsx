'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { isAuthenticated, isAdmin } from '../lib/auth';

export default function ProtectedRoute({ children, requiredRole }) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    } else if (requiredRole && !isAdmin()) {
      router.push('/dashboard');
    }
  }, [router, requiredRole]);

  if (!isAuthenticated() || (requiredRole && !isAdmin())) {
    return null; // Or a loading spinner
  }

  return children;
} 