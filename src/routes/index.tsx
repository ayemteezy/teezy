import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero/hero";
import { PageHeader } from "@/components/hero/page-header";
import { Projects } from "@/components/projects/projects";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex h-full px-2 sm:px-12 lg:px-0">
			<div className="container flex flex-col space-y-21 py-12">
				<div className="flex flex-col gap-6 md:gap-8">
					<PageHeader />
					<Hero />
				</div>
				{/* projects */}
				<Projects />
			</div>
		</main>
	);
}
