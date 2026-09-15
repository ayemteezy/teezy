import { Image } from "@unpic/react";
import { ArrowUpRightIcon, Code2Icon } from "lucide-react";
import { useRepoLogo } from "@/hooks/use-repo-logo";
import type { PinnedRepo } from "@/types/github";

interface ProjectCardProps {
	data: PinnedRepo;
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
	const { src: imageSrc } = useRepoLogo(data.name);

	return (
		<article className="group flex gap-4 p-4 transition-colors hover:bg-accent/50">
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
				<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
					<div className="min-w-0 space-y-1">
						<h2 className="font-pixel text-base lowercase tracking-tight">
							{data.name}
						</h2>

						<p className="font-sans text-[0.8125rem] text-muted-foreground leading-relaxed md:max-w-md">
							{data.description ?? "No description available."}
						</p>
					</div>

					{/* Actions */}
					<div className="flex shrink-0 items-center gap-2">
						{data.homepageUrl && (
							<a
								href={data.homepageUrl}
								target="_blank"
								rel="noreferrer"
								className="inline-flex h-8 items-center gap-2 rounded-md bg-foreground px-3 font-mono text-[0.6875rem] text-background uppercase tracking-wide transition-opacity hover:opacity-90"
							>
								Live Demo
								<ArrowUpRightIcon className="size-3" />
							</a>
						)}

						<a
							href={data.url}
							target="_blank"
							rel="noreferrer"
							className="inline-flex h-8 items-center gap-2 rounded-md border bg-background px-3 font-mono text-[0.6875rem] text-muted-foreground uppercase tracking-wide transition-colors hover:bg-accent hover:text-foreground"
						>
							Source
							<Code2Icon className="size-3" />
						</a>
					</div>
				</div>
			</div>
		</article>
	);
};
