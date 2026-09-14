import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/ui/page-header";
import { Certifications } from "@/features/certifications/certifications";

export const Route = createFileRoute("/_app/certifications/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="page-container space-y-12 pt-6 pb-6 lg:pt-12">
			<PageHeader />
			<Certifications />
		</div>
	);
}
