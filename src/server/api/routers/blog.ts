import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const devToPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  url: z.string(),
  published_at: z.string(),
});

export const blogRouter = createTRPCRouter({
  getPosts: publicProcedure.query(async () => {
    const res = await fetch(
      "https://dev.to/api/articles?username=achiranadeeshan",
    );
    const data: unknown = await res.json();
    if (!res.ok) {
      throw new Error("Failed to fetch blog posts");
    }

    return devToPostSchema.array().parse(data);
  }),
});