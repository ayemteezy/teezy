import { useQuery } from "@tanstack/react-query";
import { pinnedReposQuery } from "@/data/queries";
import { ProjectCard } from "./project-card";

export const Projects = () => {
	const { data, isLoading, error } = useQuery(pinnedReposQuery());

	return (
		<div className="mb-12 divide-y divide-border border-border border-y">
			{data?.map((project) => (
				<ProjectCard key={project.id} data={project} />
			))}
		</div>
	);
};
