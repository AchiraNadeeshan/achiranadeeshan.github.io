import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const blogRouter = createTRPCRouter({
  getPosts: publicProcedure.query(async () => {
    const res = await fetch(
      "https://dev.to/api/articles?username=achiranadeeshan",
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blog posts");
    }

    const posts = await res.json();
    return posts;
  }),
});
