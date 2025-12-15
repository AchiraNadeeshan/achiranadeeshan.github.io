import { notFound } from "next/navigation";
import { format } from "date-fns";
import { api } from "~/trpc/server";

export default async function Post({
  params,
}: {
  params: { slug: string };
}) {

  // Next.js may pass `params` as a Promise in some cases. Await it
  // before accessing properties to avoid runtime errors.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resolvedParams = (await params) as any;
  const slug: string | undefined = resolvedParams?.slug;

  // Guard: ensure slug exists before calling tRPC/Zod-validated procedure.
  // This prevents passing `undefined` to z.object({ slug: z.string() }).
  if (!slug) {
    notFound();
  }

  const post = await api.blog.getPostBySlug({ slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl p-8">
      <h1 className="mb-2 text-4xl font-bold text-mocha-lavender">
        {post.title}
      </h1>
      <p className="mb-8 text-mocha-subtext1">
        {format(new Date(post.date), "MMMM d, yyyy")}
      </p>
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}