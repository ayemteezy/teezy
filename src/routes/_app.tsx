import { createFileRoute, Outlet } from "@tanstack/react-router";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

export const Route = createFileRoute("/_app")({
	component: AppLayout,
});

function AppLayout() {
	return (
		<>
			<Navbar />
			<Sidebar />
			<MobileSidebar />
			<Outlet />
		</>
	);
}
