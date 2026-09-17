import { useNavigate } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import type { Post as PostType } from "content-collections";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PostContent } from "./post-content";
import { PostHeader } from "./post-header";

interface PostProps {
  post: PostType;
}

export const Post = ({ post }: PostProps) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-4 py-2">
      <Button
        onClick={() => navigate({ to: "/blog" })}
        variant="link"
        size="xs"
      >
        <ArrowLeftIcon className="mr-2" />
        Go Back
      </Button>

      {post.image && (
        <div className="h-50 w-full overflow-hidden rounded-sm">
          <Image
            src={post.image}
            alt=""
            layout="fullWidth"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="space-y-12">
        <PostHeader
          title={post.title}
          description={post.description}
          date={post.date}
          readingTime={post.readingTime}
          tags={post.tags}
        />

        <PostContent content={post.content} />
      </div>
    </div>
  );
};
