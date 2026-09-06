import { useNavigate } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui/section-header";

export const Experience = () => {
	const _navigate = useNavigate();

	return (
		<div>
			<SectionHeader
				section={`03 \u2014 experience`}
				buttonLabel="full history"
				onClick={() => _navigate({ to: "/stack" })}
			/>
		</div>
	);
};
