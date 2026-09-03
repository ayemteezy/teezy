import { useNavigate } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui/section-header";

export const Projects = () => {
	const _navigate = useNavigate();
	return (
		<div>
			<SectionHeader
				index={1}
				section="projects"
				buttonLabel="View All"
				onClick={() => _navigate({ to: "/projects" })}
			/>
		</div>
	);
};
