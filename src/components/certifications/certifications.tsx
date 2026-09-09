import { useNavigate } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui/section-header";
import { CertificationList } from "./certification-list";

export const Certifications = () => {
	const _navigate = useNavigate();

	return (
		<div className="space-y-6">
			<SectionHeader
				section={`04 \u2014 certifications`}
				buttonLabel="all certifications"
				onClick={() => _navigate({ to: "/certifications" })}
			/>
			<CertificationList />
		</div>
	);
};
