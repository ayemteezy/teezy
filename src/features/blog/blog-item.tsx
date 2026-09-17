import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import type { Post } from "content-collections";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/formatDate";

interface BlogItemProps {
  post: Post;
}

export const BlogItem = ({ post }: BlogItemProps) => {
  const thumbnailClass =
    "aspect-[16/10] w-full shrink-0 rounded-md object-cover sm:w-[200px]";

  return (
    <Link
      to="/post/$slug"
      params={{
        slug: post.slug,
      }}
    >
      <article className="group flex flex-col gap-4 px-2 py-4 hover:bg-accent/50 sm:flex-row sm:gap-5">
        {post.image ? (
          <Image
            src={post.image}
            alt=""
            width={200}
            height={125}
            className={thumbnailClass}
          />
        ) : (
          <div aria-hidden="true" className={`${thumbnailClass} bg-muted/50`} />
        )}

        <div className="min-w-0 flex-1 py-1">
          <p className="font-medium text-muted-foreground/60 text-xs">
            {formatDate(post.date)} · {post.readingTime}
          </p>

          <h2 className="mt-1 font-sans font-semibold text-base tracking-tight">
            {post.title}
          </h2>

          <p className="mt-1 font-sans text-muted-foreground text-sm leading-6">
            {post.description}
          </p>

          <Button
            variant="link"
            size="xs"
            className="mt-3 w-fit px-0 group-hover:text-foreground"
          >
            Read more
            <ArrowRightIcon className="ml-2 size-3" />
          </Button>
        </div>
      </article>
    </Link>
  );
};
