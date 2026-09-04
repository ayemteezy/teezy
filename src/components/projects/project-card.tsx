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
		<Card className="w-full p-0">
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
				<div className="flex flex-1 flex-col gap-2 p-0">
					<CardHeader className="p-0">
						<CardTitle className="font-pixel">{data.name}</CardTitle>
						<CardDescription className="font-sans">
							{data.description}
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-wrap items-center gap-2 p-0">
						{data.languages?.nodes?.map((language) => (
							<Badge
								variant="outline"
								className="text-muted-foreground"
								key={language.name}
							>
								{language.name}
							</Badge>
						))}
						{data.repositoryTopics.nodes.map((topic) => (
							<Badge
								variant="outline"
								className="text-muted-foreground capitalize"
								key={topic.topic.name}
							>
								{topic.topic.name}
							</Badge>
						))}
					</CardContent>
					<div className="mt-2 flex gap-2">
						<Button
							onClick={() => _handleExternalLink(data.homepageUrl)}
							disabled={!data.homepageUrl}
							className="uppercase"
							size="sm"
						>
							Live Demo
							<ArrowUpRightIcon className="ml-1 size-3" />
						</Button>
						<Button
							onClick={() => _handleExternalLink(data.url)}
							disabled={!data.url}
							variant="outline"
							size="sm"
							className="text-muted-foreground uppercase"
						>
							Source Code
							<CodeXmlIcon className="ml-1 size-3" />
						</Button>
					</div>
				</div>
			</div>
		</Card>
	);
};
