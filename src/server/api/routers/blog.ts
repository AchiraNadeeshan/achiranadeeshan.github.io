import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postSchema = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.string(),
  excerpt: z.string(),
});

const postContentSchema = postSchema.extend({
  content: z.string(),
});

export const blogRouter = createTRPCRouter({
  getPosts: publicProcedure.query(() => {
    const postsDirectory = path.join(process.cwd(), "_posts");
    const fileNames = fs.readdirSync(postsDirectory);

    const allPosts = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
      };
    });

    const sortedPosts = allPosts.sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) {
        return 1;
      } else {
        return -1;
      }
    });

    return postSchema.array().parse(sortedPosts);
  }),

  getPostBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const { slug } = input;
      const postsDirectory = path.join(process.cwd(), "_posts");
      const fullPath = path.join(postsDirectory, `${slug}.md`);

      try {
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();

        const postData = {
          slug,
          title: data.title as string,
          date: data.date as string,
          excerpt: data.excerpt as string,
          content: contentHtml,
        };

        return postContentSchema.parse(postData);
      } catch (error) {
        return null;
      }
    }),
});