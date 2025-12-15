"use client";

import { api } from "~/trpc/react";
import Link from "next/link";
import { format } from "date-fns";

export default function Blog() {
  const { data: posts, isLoading, error } = api.blog.getPosts.useQuery();

  return (
    <div className="container mx-auto max-w-4xl p-8">
      <h1 className="mb-2 text-4xl font-bold text-mocha-lavender">Blog</h1>
      <p className="mb-8 text-mocha-subtext1">
        Exploring ideas at the intersection of technology, AI, and security. (Following posts are generated with AI to act as placeholders while I work on writing original content.)
      </p>

      {isLoading && <p className="text-mocha-text">Loading posts...</p>}
      {error && (
        <p className="text-mocha-red">Error loading posts: {error.message}</p>
      )}

      <div className="grid gap-8">
        {posts?.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="rounded-lg border border-mocha-surface0 bg-mocha-mantle p-6 transition-all group-hover:border-mocha-blue group-hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-mocha-text group-hover:text-mocha-blue">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-mocha-subtext1">
                {format(new Date(post.date), "MMMM d, yyyy")}
              </p>
              <p className="mt-4 text-mocha-text">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
