import { Card } from "@/components/ui/card";
import { useRepoLogo } from "@/hooks/use-repo-logo";
import { cn } from "@/lib/utils";
import type { PinnedRepo } from "@/types/github";

interface ProjectCardProps {
	data: PinnedRepo;
	className?: string;
}

export const ProjectCard = ({ data, className }: ProjectCardProps) => {
	const { src: imageSrc } = useRepoLogo(data.name);

	return (
		<Card
			className={cn(
				"w-full rounded-xl border border-border/15 px-4 py-3.5",
				"transition-colors duration-200 hover:bg-accent/30",
				className,
			)}
		>
			<div className="flex items-start gap-4">
				{imageSrc ? (
					<img
						src={imageSrc}
						alt=""
						width={40}
						height={40}
						loading="lazy"
						className="size-10 shrink-0 select-none rounded-lg object-contain"
					/>
				) : (
					<div
						aria-hidden="true"
						className="size-10 shrink-0 rounded-lg bg-muted/50"
					/>
				)}

				<div className="min-w-0 flex-1">
					<h3 className="truncate font-normal font-pixel text-lg tracking-tight">
						{data.name}
					</h3>

					<p className="mt-1 line-clamp-2 font-sans text-[0.8125rem] text-muted-foreground leading-relaxed">
						{data.description}
					</p>
				</div>
			</div>
		</Card>
	);
};
