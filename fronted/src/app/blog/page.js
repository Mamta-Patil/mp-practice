'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '../../components/ProtectedRoute';
import { getToken } from '../../lib/auth';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('http://localhost:5000/api/blog/all', {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      if (res.ok) {
        setBlogs(data);
      } else {
        router.push('/dashboard');
      }
    };
    fetchBlogs();
  }, [router]);

  return (
    <ProtectedRoute requiredRole="ADMIN">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Blog Admin</h1>
        <ul className="mt-4 space-y-2">
          {blogs.map((blog) => (
            <li key={blog.id} className="border p-2 rounded">
              <h2 className="text-xl">{blog.title}</h2>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </ProtectedRoute>
  );
}