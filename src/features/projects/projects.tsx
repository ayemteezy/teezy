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

const ProjectCardSkeleton = () => {
	return (
		<article className="flex gap-4 py-4">
			{/* Logo */}
			<Skeleton className="size-9 shrink-0 rounded-lg bg-muted/50" />

			{/* Content */}
			<div className="min-w-0 flex-1">
				{/* Header */}
				<div className="flex items-start justify-between gap-4">
					<div className="min-w-0 flex-1 space-y-2">
						<Skeleton className="h-5 w-28" />
						<div className="space-y-1.5">
							<Skeleton className="h-3.5 max-w-xl" />
							<Skeleton className="h-3.5 max-w-md" />
						</div>
					</div>
					<Skeleton className="mt-1 h-3 w-8 shrink-0" />
				</div>

				{/* Meta + Actions */}
				<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
					{/* Badges */}
					<div className="flex flex-wrap gap-1.5">
						{["tag-1", "tag-2", "tag-3"].map((key) => (
							<Skeleton key={key} className="h-5 w-14 rounded-md" />
						))}
					</div>

					{/* Buttons */}
					<div className="flex shrink-0 gap-2">
						<Skeleton className="h-8 w-24 rounded-md" />
						<Skeleton className="h-8 w-20 rounded-md" />
					</div>
				</div>
			</div>
		</article>
	);
};
