import { allPosts } from "content-collections";
import { BlogItem } from "./blog-item";

export const Blog = () => {
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  if (sortedPosts.length === 0) {
    return (
      <div className="py-12 text-center font-sans text-muted-foreground text-sm">
        No blog posts published yet. Check back soon!
      </div>
    );
  }

  return (
    <div className="flex flex-col border-b">
      {sortedPosts.map((post) => (
        <div key={post.title} className="border-t py-6 first:pt-0 last:pb-0">
          <BlogItem post={post} />
        </div>
      ))}
    </div>
  );
};
