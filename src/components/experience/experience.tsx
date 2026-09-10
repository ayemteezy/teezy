import { useNavigate } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui/section-header";
import { ExperienceList } from "./experience-list";

export const Experience = () => {
	const _navigate = useNavigate();

	return (
		<section className="space-y-6">
			<SectionHeader
				section={`03 \u2014 experience`}
				buttonLabel="full history"
				onClick={() => _navigate({ to: "/experience" })}
			/>
			<ExperienceList />
		</section>
	);
};
