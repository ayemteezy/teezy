import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/navbar";

export const Route = createFileRoute("/_app")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="h-full w-full">
			<Navbar />
			<Outlet />
		</main>
	);
}
