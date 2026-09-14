import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/ui/page-header";
import { Projects } from "@/features/projects/projects";

export const Route = createFileRoute("/_app/projects/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="page-container space-y-12 pt-6 pb-6 lg:pt-12">
			<PageHeader />
			<Projects />
		</div>
	);
}
