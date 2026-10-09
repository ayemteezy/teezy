import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/ui/cta";
import { Bento } from "@/features/_app/bento";
import { Hero } from "@/features/_app/hero";
import { Projects } from "@/features/_app/projects";

export const Route = createFileRoute("/_app/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="container relative">
			<div className="border-x px-3 lg:px-6">
				<div className="space-y-24 border-x">
					{/* Top blur */}
					<div
						aria-hidden
						className="mask-[linear-gradient(to_bottom,black_0%,transparent_100%)] pointer-events-none fixed inset-x-0 top-0 z-20 h-20 bg-transparent backdrop-blur-sm"
					/>
					<div>
						<Hero />
						<CTA />
					</div>
					<Bento />
					<Projects />
				</div>
			</div>
		</div>
	);
}
