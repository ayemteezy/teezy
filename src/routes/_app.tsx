import { createFileRoute, Outlet } from "@tanstack/react-router";

import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

export const Route = createFileRoute("/_app")({
	component: AppLayout,
});

function AppLayout() {
	return (
		<div className="flex h-screen w-full overflow-hidden">
			<Sidebar />

			<div className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto">
				<Navbar />
				<MobileSidebar />

				<main className="w-full flex-1">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
