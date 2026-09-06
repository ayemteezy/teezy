import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/components/experience/experience";
import { Hero } from "@/components/hero/hero";
import { PageHeader } from "@/components/hero/page-header";
import { Projects } from "@/components/projects/projects";
import { Stack } from "@/components/stack/stack";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex h-full px-2 sm:px-12 lg:px-0 lg:pl-56">
			<div className="container flex flex-col space-y-21 py-12">
				<div className="flex flex-col gap-6 md:gap-8">
					<PageHeader />
					<Hero />
				</div>
				{/* stack */}
				<Stack />

				{/* projects */}
				<Projects />

				{/* experience */}
				<Experience />
				{/* certifications */}
				{/* affliations */}
			</div>
		</main>
	);
}
