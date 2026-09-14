import { Image } from "@unpic/react";
import { ArrowUpRightIcon, Code2Icon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRepoLogo } from "@/hooks/use-repo-logo";
import type { PinnedRepo } from "@/types/github";

interface ProjectCardProps {
	data: PinnedRepo;
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
	const { src: imageSrc } = useRepoLogo(data.name);

	const tags = [...data.languages, ...data.topics];

	return (
		<article className="flex gap-4 border-t py-4">
			{/* Logo */}
			{imageSrc ? (
				<Image
					src={imageSrc}
					alt=""
					width={36}
					height={36}
					loading="lazy"
					className="size-9 shrink-0 select-none rounded-lg object-contain"
				/>
			) : (
				<div
					aria-hidden="true"
					className="size-9 shrink-0 rounded-lg bg-muted/50"
				/>
			)}

			{/* Content */}
			<div className="min-w-0 flex-1">
				{/* Header */}
				<div className="flex items-start justify-between gap-4">
					<div className="min-w-0 space-y-1">
						<h2 className="font-pixel text-base lowercase tracking-tight">
							{data.name}
						</h2>

						<p className="max-w-xl font-sans text-[0.8125rem] text-muted-foreground leading-relaxed">
							{data.description ?? "No description available."}
						</p>
					</div>

					<time
						dateTime={data.createdAt}
						className="shrink-0 font-mono text-[0.6875rem] text-muted-foreground/70"
					>
						{new Date(data.createdAt).getFullYear()}
					</time>
				</div>

				{/* Meta + Actions */}
				<div className="mt-2 flex flex-wrap items-center justify-between gap-3">
					<div className="flex flex-wrap gap-1.5">
						{tags.map((tag) => (
							<Badge
								key={tag}
								variant="outline"
								className="py-3 text-muted-foreground capitalize"
							>
								{tag}
							</Badge>
						))}
					</div>

					<div className="flex shrink-0 gap-2">
						{data.homepageUrl && (
							<Button size="sm" className="text-xs uppercase">
								Live Demo
								<ArrowUpRightIcon />
							</Button>
						)}

						<Button
							size="sm"
							variant="outline"
							className="text-muted-foreground text-xs uppercase"
						>
							Source
							<Code2Icon />
						</Button>
					</div>
				</div>
			</div>
		</article>
	);
};
