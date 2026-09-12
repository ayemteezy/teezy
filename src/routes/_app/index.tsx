import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/layout/footer";
import { githubLanguagesQuery, pinnedReposQuery } from "@/data/queries";
import { Certifications } from "@/features/_app/certifications/certifications";
import { Experience } from "@/features/_app/experience/experience";
import { Hero } from "@/features/_app/hero/hero";
import { Projects } from "@/features/_app/projects/projects";
import { Stack } from "@/features/_app/stack/stack";
import { Telemetry } from "@/features/_app/telemetry/telemetry";
import { Testimonials } from "@/features/_app/testimonials/testimonials";
import { useSidebarStore } from "@/store/sidebar-store";

export const Route = createFileRoute("/_app/")({
	loader: async ({ context }) => {
		await Promise.all([
			context.queryClient.query(githubLanguagesQuery),
			context.queryClient.query(pinnedReposQuery),
		]);
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { isOpen } = useSidebarStore();

	return (
		<main
			aria-hidden={isOpen}
			inert={isOpen}
			className="flex min-h-full flex-col sm:px-12 lg:px-0"
		>
			<div className="container flex flex-col space-y-21 pt-8 pb-12 lg:pt-12">
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
