'use client';

import Link from 'next/link';
import { isAuthenticated, getRole } from '../lib/auth';

export default function Navbar() {
  const role = getRole();

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">Home</Link>
        <div className="space-x-4">
          {isAuthenticated() ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              {role === 'ADMIN' && <Link href="/blog">Blog</Link>}
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.href = '/login';
                }}
                className="bg-red-500 px-2 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}