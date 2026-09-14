import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/ui/page-header";
import { Testimonials } from "@/features/testimonials/testimonials";

export const Route = createFileRoute("/_app/testimonials/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="page-container space-y-12 pt-6 pb-6 lg:pt-12">
			<PageHeader />
			<Testimonials />
		</div>
	);
}
