import { Card } from "@/components/ui/card";
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
		return (
			<div className="flex flex-col gap-4">
				{["skeleton-1", "skeleton-2", "skeleton-3"].map((id) => (
					<CardSkeleton key={id} />
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
		<Card className="w-full rounded-xl border border-border/15 px-4 py-3.5">
			<div className="flex animate-pulse items-start gap-4">
				{/* Logo */}
				<div className="size-9 shrink-0 rounded-lg bg-muted/50" />

				{/* Content */}
				<div className="min-w-0 flex-1 space-y-2">
					{/* Title */}
					<div className="h-4 w-1/3 rounded bg-muted" />

					{/* Description */}
					<div className="h-3 w-full rounded bg-muted" />
					<div className="h-3 w-2/3 rounded bg-muted" />
				</div>
			</div>
		</Card>
	);
};
