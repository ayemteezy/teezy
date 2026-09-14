import { useNavigate } from "@tanstack/react-router";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useRepoLogo } from "@/hooks/use-repo-logo";
import { cn } from "@/lib/utils";
import type { PinnedRepo } from "@/types/github";

interface ProjectCardProps {
	data: PinnedRepo;
	className?: string;
}

export const ProjectCard = ({ data, className }: ProjectCardProps) => {
	const navigate = useNavigate();
	const { src: imageSrc } = useRepoLogo(data.name);

	return (
		<Card
			onClick={() => navigate({ to: "/projects" })}
			className={cn(
				"w-full cursor-pointer rounded-xl border border-border/15 px-4 py-3.5",
				"transition-all duration-200 ease-in-out hover:scale-105 hover:bg-accent/30 hover:shadow-md/5",
				className,
			)}
		>
			<div className="flex items-start gap-4">
				{imageSrc ? (
					<img
						src={imageSrc}
						alt=""
						width={36}
						height={36}
						loading="lazy"
						className="shrink-0 select-none rounded-lg object-contain"
					/>
				) : (
					<div
						aria-hidden="true"
						className="size-10 shrink-0 rounded-lg bg-muted/50"
					/>
				)}

				<CardHeader className="min-w-0 flex-1 p-0">
					<CardTitle className="select-none truncate font-normal font-pixel text-base lowercase tracking-tight">
						{data.name}
					</CardTitle>

					<CardDescription className="line-clamp-2 font-sans text-[0.8125rem] leading-relaxed">
						{data.description}
					</CardDescription>
				</CardHeader>
			</div>
		</Card>
	);
};
