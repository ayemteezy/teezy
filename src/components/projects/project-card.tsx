import { Image } from "@unpic/react";
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
import type { PinnedRepo } from "@/types/github";

interface ProjectCardProps {
	data: PinnedRepo;
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
	const { src: imageSrc, onError: handleImageError } = useRepoLogo(data.name);
	const _handleExternalLink = (url: string | null) => {
		if (url) {
			window.open(url, "_blank", "noopener,noreferrer");
		}
	};

	return (
		<Card className="w-full cursor-pointer p-0 transition-all duration-200 ease-in-out hover:scale-101 hover:shadow-lg/5">
			<div className="flex flex-row gap-4 p-4">
				<Image
					src={imageSrc}
					onError={handleImageError}
					alt={`${data.name}'s logo`}
					layout="constrained"
					width={40}
					height={40}
					className="aspect-square size-10 shrink-0 rounded-md shadow-sm"
				/>
				<div className="flex min-w-0 flex-1 flex-col gap-2 p-0">
					<CardHeader className="p-0">
						<CardTitle className="h-4 truncate font-pixel text-[16px] leading-none tracking-normal [-webkit-font-smoothing:none] [font-smooth:never]">
							{data.name}
						</CardTitle>
						<CardDescription className="line-clamp-2 font-sans">
							{data.description}
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-wrap items-center gap-1 p-0">
						{data.languages?.nodes?.map((language) => (
							<Badge
								variant="outline"
								className="max-w-full truncate whitespace-normal text-muted-foreground"
								key={language.name}
							>
								{language.name}
							</Badge>
						))}
						{data.repositoryTopics.nodes.map((topic) => (
							<Badge
								variant="outline"
								className="max-w-full truncate whitespace-normal text-muted-foreground capitalize"
								key={topic.topic.name}
							>
								{topic.topic.name}
							</Badge>
						))}
					</CardContent>
					<div className="mt-2 flex gap-1">
						<Button
							onClick={() => _handleExternalLink(data.homepageUrl)}
							disabled={!data.homepageUrl}
							className="uppercase"
							size="xs"
						>
							Live Demo
							<ArrowUpRightIcon className="ml-1 size-3" />
						</Button>
						<Button
							onClick={() => _handleExternalLink(data.url)}
							disabled={!data.url}
							variant="outline"
							size="xs"
							className="text-muted-foreground uppercase"
						>
							Source
							<CodeXmlIcon className="ml-1 size-3" />
						</Button>
					</div>
				</div>
			</div>
		</Card>
	);
};
