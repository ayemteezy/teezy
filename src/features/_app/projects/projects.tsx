import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui/section-header";
import { GITHUB } from "@/constants/configs/github.config";
import { getPinnedRepos } from "@/data/github";
import { ProjectList } from "./project-list";

export const Projects = () => {
	const navigate = useNavigate();
	const { data, isLoading, error } = useQuery({
		queryKey: ["pinned-repos", GITHUB.username],
		queryFn: () => getPinnedRepos(),
		staleTime: GITHUB.pinnedRepos.staleTimeMs,
	});

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
