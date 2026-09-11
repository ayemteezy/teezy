import { createFileRoute } from "@tanstack/react-router";
import { Certifications } from "@/components/certifications/certifications";
import { Experience } from "@/components/experience/experience";
import { Hero } from "@/components/hero/hero";
import { Footer } from "@/components/layout/footer";
import { Projects } from "@/components/projects/projects";
import { Stack } from "@/components/stack/stack";
import { Telemetry } from "@/components/telemetry/telemetry";
import { Testimonials } from "@/components/testimonials/testimonials";
import { useSidebarStore } from "@/store/sidebar-store";

export const Route = createFileRoute("/_app/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { isOpen } = useSidebarStore();

	return (
		<main
			aria-hidden={isOpen}
			inert={isOpen}
			className="flex min-h-full flex-col pb-20 sm:px-12 lg:px-0"
		>
			<div className="container flex flex-col space-y-21 pt-12 pb-12">
				<div className="flex flex-col gap-6 md:gap-8">
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

				{/* testimonials */}
				<Testimonials />

				{/* Telemetry */}
				<Telemetry />

				{/* Footer */}

				<Footer />
			</div>
		</main>
	);
}
