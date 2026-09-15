import { useQuery } from "@tanstack/react-query";
import { pinnedReposQuery } from "@/data/queries";
import { ProjectCard } from "./project-card";

export const Projects = () => {
	const { data, isLoading, error } = useQuery(pinnedReposQuery());

	if (isLoading) {
		return (
			<div className="mb-12 divide-y border-y">
				{["skeleton-1", "skeleton-2", "skeleton-3"].map((id) => (
					<ProjectCardSkeleton key={id} />
				))}
			</div>
		);
	}

	if (error) {
		return (
			<div className="mb-12 p-4 text-center uppercase">
				<p className="font-medium text-[0.8125rem] text-muted-foreground">
					Failed to load projects. Please try again later.
				</p>
			</div>
		);
	}

	return (
		<div className="mb-12 divide-y border-y">
			{data?.map((project) => (
				<ProjectCard key={project.id} data={project} />
			))}
		</div>
	);
};

import { Skeleton } from "@/components/ui/skeleton";

export const ProjectCardSkeleton = () => {
	return (
		<article className="flex gap-4 p-4">
			{/* Logo */}
			<Skeleton className="size-9 shrink-0 rounded-lg" />

			{/* Content */}
			<div className="min-w-0 flex-1">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
					{/* Project info */}
					<div className="min-w-0 space-y-1">
						{/* Project name */}
						<Skeleton className="h-4 w-28" />

						{/* Description */}
						<div className="space-y-1.5">
							<Skeleton className="h-3.5 w-full md:w-96" />
							<Skeleton className="h-3.5 w-3/4 md:w-72" />
						</div>
					</div>

					{/* Actions */}
					<div className="flex shrink-0 items-center gap-2">
						{["demo", "source"].map((id) => (
							<Skeleton
								key={id}
								className={
									id === "demo" ? "h-8 w-24 rounded-md" : "h-8 w-20 rounded-md"
								}
							/>
						))}
					</div>
				</div>
			</div>
		</article>
	);
};
