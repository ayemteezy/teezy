import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useRef } from "react";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

export const Route = createFileRoute("/_app")({
	component: AppLayout,
});

function AppLayout() {
	const scrollRef = useRef<HTMLDivElement>(null);
	return (
		<div className="flex h-dvh w-full overflow-hidden">
			<Sidebar />

			<div
				ref={scrollRef}
				className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto"
			>
				<Navbar />
				<MobileSidebar />

				<main className="w-full flex-1">
					<Outlet />
				</main>

				<ScrollToTop scrollRef={scrollRef} />
			</div>
		</div>
	);
}
