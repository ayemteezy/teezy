import type { PinnedRepo } from "@/types/github";
import { ProjectCard } from "./project-card";

interface ProjectListProps {
	data: PinnedRepo[];
	isLoading: boolean;
	error: Error | null;
}

export const ProjectList = ({ data, isLoading, error }: ProjectListProps) => {
	if (error) {
		return (
			<p className="font-mono text-muted-foreground text-sm">{error.message}</p>
		);
	}

	if (isLoading) {
		return (
			<div className="flex flex-col gap-4">
				{Array.from({ length: 3 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton count, order never changes
					<CardSkeleton key={i} />
				))}
			</div>
		);
	}

	if (data.length === 0) {
		return (
			<p className="font-mono text-muted-foreground text-sm">
				No projects found.
			</p>
		);
	}

	return (
		<div className="flex flex-col gap-4">
			{data.map((repo) => (
				<ProjectCard key={repo.id} data={repo} />
			))}
		</div>
	);
};

const CardSkeleton = () => {
	return (
		<div className="flex animate-pulse gap-4 rounded-md border p-4">
			<div className="size-10 shrink-0 rounded-md bg-muted" />
			<div className="flex-1 space-y-2">
				<div className="h-4 w-1/3 rounded bg-muted" />
				<div className="h-3 w-full rounded bg-muted" />
				<div className="h-3 w-2/3 rounded bg-muted" />
			</div>
		</div>
	);
};
