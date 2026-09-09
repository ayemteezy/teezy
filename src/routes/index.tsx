import { createFileRoute } from "@tanstack/react-router";
import { Certifications } from "@/components/certifications/certifications";
import { Experience } from "@/components/experience/experience";
import { Hero } from "@/components/hero/hero";
import { PageHeader } from "@/components/hero/page-header";
import { Projects } from "@/components/projects/projects";
import { Stack } from "@/components/stack/stack";
import { useSidebarStore } from "@/store/sidebar-store";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { isOpen } = useSidebarStore();

	return (
		<main
			aria-hidden={isOpen}
			inert={isOpen}
			className="flex h-full px-2 sm:px-12 lg:px-0 lg:pl-56"
		>
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
				<Certifications />

				{/* affliations */}
				<div>Hello</div>
			</div>
		</main>
	);
}
