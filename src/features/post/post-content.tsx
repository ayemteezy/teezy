import { Markdown } from "@tanstack/markdown/react";
import { highlightMarkdownCode } from "@/markdown-highlighter";

interface PostContentProps {
  content: string;
}

export const PostContent = ({ content }: PostContentProps) => {
  return (
    <article className="prose dark:prose-invert prose-neutral prose-li:my-0 prose-headings:mt-8 prose-headings:mb-4 max-w-none prose-blockquote:border-l-3 font-serif prose-blockquote:font-medium prose-headings:font-sans prose-headings:font-semibold prose-bullets:text-foreground prose-headings:leading-tight prose-headings:tracking-tight">
      <Markdown highlighter={highlightMarkdownCode} codeLineNumbers>
        {content}
      </Markdown>
    </article>
  );
};
