import { ArrowUpRightIcon, CodeXmlIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
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
	const { src: imageSrc } = useRepoLogo(data.name);

	const _handleExternalLink = (url: string | null) => {
		if (url) {
			window.open(url, "_blank", "noopener,noreferrer");
		}
	};

	return (
		<Card
			className={cn(
				"w-full rounded-xl border border-border/15 p-4 transition-all duration-300",
				className,
			)}
		>
			<div className="flex flex-row items-start gap-4">
				{imageSrc ? (
					<img
						src={imageSrc}
						alt=""
						width={40}
						height={40}
						className="aspect-square size-10 shrink-0 select-none rounded-lg object-contain shadow"
					/>
				) : (
					<div className="size-10 shrink-0 rounded-lg bg-muted/50" />
				)}

				<div className="flex min-w-0 flex-1 flex-col gap-2.5 p-0">
					<CardHeader className="space-y-1 p-0">
						<CardTitle className="select-none truncate font-normal font-pixel text-foreground text-lg lowercase tracking-tight">
							{data.name}
						</CardTitle>
						<CardDescription className="line-clamp-2 font-sans text-[0.8125rem] leading-normal">
							{data.description}
						</CardDescription>
					</CardHeader>

					<CardContent className="flex flex-wrap items-center gap-1.5 p-0">
						{data.languages?.nodes?.map((language) => (
							<Badge
								variant="outline"
								key={language.name}
								className="select-none rounded-md px-2 py-0.5 font-medium font-sans text-[0.71875rem] text-muted-foreground"
							>
								{language.name}
							</Badge>
						))}
						{data.repositoryTopics?.nodes?.map((topic) => (
							<Badge
								variant="outline"
								key={topic.topic.name}
								className="select-none rounded-md px-2 py-0.5 font-medium font-sans text-[0.71875rem] text-muted-foreground capitalize"
							>
								{topic.topic.name}
							</Badge>
						))}
					</CardContent>

					<div className="mt-1 flex flex-wrap items-center gap-2">
						{data.homepageUrl && (
							<Button
								onClick={() => _handleExternalLink(data.homepageUrl)}
								size="sm"
								className="group/demo flex h-7 items-center gap-1.5 rounded-md px-3 font-sans font-semibold text-[0.75rem] uppercase tracking-wider"
							>
								<span>live demo</span>
								<ArrowUpRightIcon className="size-3 transition-transform duration-300 ease-out group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
							</Button>
						)}
						{data.url && (
							<Button
								onClick={() => _handleExternalLink(data.url)}
								variant="outline"
								size="sm"
								className="group/source flex h-7 items-center gap-1.5 rounded-md border-border/80 px-3 font-sans font-semibold text-[0.75rem] text-muted-foreground uppercase tracking-wider"
							>
								<CodeXmlIcon className="size-3 transition-all duration-300 ease-out group-hover/source:scale-115" />
								<span>source</span>
							</Button>
						)}
					</div>
				</div>
			</div>
		</Card>
	);
};
