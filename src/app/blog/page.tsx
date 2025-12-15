"use client";

import { api } from "~/trpc/react";

export default function blog() {
  const { data: posts, isLoading, error } = api.blog.getPosts.useQuery();

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;
  if (!posts) return <p>No posts found.</p>;

  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="mb-6 text-4xl font-bold">My Blog</h1>
      <p>
        Welcome to my blog. Here I share stuff I learn throughout my development
        journey
      </p>
      <div className="grid gap-6 mt-6">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border p-4 transition hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-1 text-sm text-gray-500">{post.published_at}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
