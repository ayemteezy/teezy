import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui/section-header";
import { pinnedReposQuery } from "@/data/queries";
import { ProjectList } from "./project-list";

export const Projects = () => {
	const navigate = useNavigate();
	const { data, isLoading, error } = useQuery(pinnedReposQuery(3));

	return (
		<section className="space-y-6">
			<SectionHeader
				section={`02 \u2014 projects`}
				buttonLabel="all projects"
				onClick={() => navigate({ to: "/projects" })}
			/>

			<ProjectList
				data={data ? data : []}
				error={error}
				isLoading={isLoading}
			/>
		</section>
	);
};
