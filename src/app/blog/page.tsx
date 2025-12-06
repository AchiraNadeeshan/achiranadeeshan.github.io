"use client";

import { api } from "~/trpc/react";

export default function blog() {
  const { data: posts, isLoading, error } = api.blog.getPosts.useQuery();

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">My Blog</h1>
        <p>Welcome to my blog. Here I share stuff I learn throughout my development journey</p>
      <div className="grid gap-6">
        {posts?.map((post: any) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border rounded hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{post.published_at}</p>
          </a>
        ))}
      </div>
    </main>
  );
}