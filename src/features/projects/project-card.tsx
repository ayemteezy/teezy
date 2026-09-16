import { Link } from "@tanstack/react-router";
import { ArrowUpRightIcon } from "lucide-react";
import type { PinnedRepo } from "@/types/github";

interface ProjectCardProps {
	data: PinnedRepo;
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
	return (
		<Link to={data.homepageUrl || data.url}>
			<article className="group flex gap-4 border-t p-4 transition-colors hover:bg-accent/50">
				{/* Content */}
				<div className="min-w-0 flex-1">
					<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
						<div className="min-w-0 space-y-1">
							<h2 className="font-pixel text-base lowercase tracking-tight">
								{data.name}
							</h2>

							<p className="font-sans text-[0.8125rem] text-muted-foreground leading-relaxed">
								{data.description ?? "No description available."}
							</p>
						</div>
					</div>
				</div>
				<ArrowUpRightIcon className="size-3.5 text-muted-foreground/20 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
			</article>
		</Link>
	);
};
