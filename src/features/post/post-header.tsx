import { Badge } from "@/components/ui/badge";
import { formatSpecificDate } from "@/lib/formatDate";

interface PostHeaderProps {
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export const PostHeader = ({
  title,
  description,
  date,
  readingTime,
  tags,
}: PostHeaderProps) => {
  return (
    <header className="space-y-2">
      {/* Metadata */}
      <p className="font-mono text-muted-foreground/60 text-xs">
        {formatSpecificDate(date)} · {readingTime}
      </p>

      {/* Title */}
      <h1 className="font-sans font-semibold text-3xl leading-tight tracking-tight md:text-4xl">
        {title}
      </h1>

      {/* Description */}
      <p className="font-sans text-muted-foreground text-sm leading-6 md:text-base">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-md px-2.5 py-1 font-normal text-muted-foreground text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </header>
  );
};
