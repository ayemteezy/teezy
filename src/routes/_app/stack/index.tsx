import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/ui/page-header";
import { Stack } from "@/features/stack/stack";

export const Route = createFileRoute("/_app/stack/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="page-container space-y-12 pt-6 pb-6 lg:pt-12">
			<PageHeader />
			<Stack />
		</div>
	);
}
