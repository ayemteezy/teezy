import { createFileRoute, notFound } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import { Post } from "@/features/post/post";

export const Route = createFileRoute("/_app/post/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();

  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    throw notFound();
  }

  return (
    <div className="container space-y-12 pt-6 pb-6 lg:pt-12">
      <Post post={post} />
    </div>
  );
}
