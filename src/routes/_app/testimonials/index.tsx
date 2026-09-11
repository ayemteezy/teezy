import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ui/coming-soon";
import { PageHeader } from "@/components/ui/page-header";

export const Route = createFileRoute("/_app/testimonials/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="container space-y-6 pt-6 pb-6 lg:pt-12">
			<PageHeader />
			<ComingSoon />
		</div>
	);
}
