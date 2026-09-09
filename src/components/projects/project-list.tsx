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
			<div className="flex justify-center">
				<p className="font-mono text-muted-foreground text-xs uppercase">
					{error.message}
				</p>
			</div>
		);
	}

	if (isLoading) {
		const _SKELETON_KEYS = ["skeleton-1", "skeleton-2", "skeleton-3"];
		return (
			<div className="flex flex-col gap-4">
				{_SKELETON_KEYS.map((key) => (
					<CardSkeleton key={key} />
				))}
			</div>
		);
	}

	if (data.length === 0) {
		return (
			<div className="flex justify-center">
				<p className="font-mono text-muted-foreground text-xs uppercase">
					No Projects Found.
				</p>
			</div>
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
		<div className="w-full rounded-xl border p-4">
			<div className="flex animate-pulse flex-row gap-4">
				<div className="size-10 shrink-0 rounded-md bg-muted" />
				<div className="flex flex-1 flex-col gap-2">
					<div className="h-4 w-1/3 rounded bg-muted" />
					<div className="h-3 w-full rounded bg-muted" />
					<div className="h-3 w-2/3 rounded bg-muted" />
					<div className="mt-1 flex gap-1">
						<div className="h-5 w-14 rounded-full bg-muted" />
						<div className="h-5 w-14 rounded-full bg-muted" />
						<div className="h-5 w-14 rounded-full bg-muted" />
					</div>
					<div className="mt-2 flex gap-1">
						<div className="h-8 w-24 rounded-md bg-muted" />
						<div className="h-8 w-28 rounded-md bg-muted" />
					</div>
				</div>
			</div>
		</div>
	);
};
