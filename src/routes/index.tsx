import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "./components/hero";
import { PageHeader } from "./components/page-header";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex h-full">
			<div className="container py-12 flex flex-col gap-8">
				<PageHeader />
				<Hero />
			</div>
		</main>
	);
}
