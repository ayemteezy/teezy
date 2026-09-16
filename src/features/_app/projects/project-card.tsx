import { useNavigate } from "@tanstack/react-router";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import type { PinnedRepo } from "@/types/github";

interface ProjectCardProps {
	data: PinnedRepo;
	className?: string;
}

export const ProjectCard = ({ data, className }: ProjectCardProps) => {
	const navigate = useNavigate();

	return (
		<Card
			onClick={() => navigate({ to: "/projects" })}
			className={cn(
				"w-full cursor-pointer rounded-xl border border-border/15 px-5 py-3.5",
				"transition-all duration-200 ease-in-out hover:scale-105 hover:bg-accent/30 hover:shadow-md/5",
				className,
			)}
		>
			<div className="flex items-start gap-4">
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
