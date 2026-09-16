import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/ui/page-header";
import { Experience } from "@/features/experience/experience";

export const Route = createFileRoute("/_app/experience/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="page-container space-y-12 pt-6 pb-6 lg:pt-12">
			<PageHeader />
			<Experience />
		</div>
	);
}
