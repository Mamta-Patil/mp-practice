'use client';

import { isAuthenticated, getRole } from '../../lib/auth';

export default function Dashboard() {
  const role = getRole();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4">Welcome, {role || 'User'}!</p>
    </div>
  );
}