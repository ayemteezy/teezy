import { createFileRoute } from "@tanstack/react-router";

import { Sidebar } from "@/components/layout/sidebar";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex h-full">
			<Sidebar />
			<main>Hello Main</main>
		</div>
	);
}
