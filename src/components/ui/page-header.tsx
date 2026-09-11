import { useLocation } from "@tanstack/react-router";
import { NAV_SECTIONS } from "@/constants/routes";

export const PageHeader = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	const allItems = NAV_SECTIONS.flatMap((section) => section.items);
	const activeItem = allItems.find((item) => item.href === currentPath);

	const title = activeItem?.label ?? "overview";
	const accent = activeItem?.accent ?? "00_system_node";
	const description =
		activeItem?.description ??
		"Core terminal workspace detailing full-stack system architecture, recent product shipments, and live development telemetry.";

	return (
		<div className="w-full space-y-3 antialiased sm:space-y-5">
			<div className="space-y-1.5 sm:space-y-2">
				<div className="flex select-none flex-row items-center justify-between border-border/40 border-b pb-1.5 font-medium font-mono text-[0.65rem] text-muted-foreground uppercase tracking-wider sm:text-xs">
					<span className="truncate pr-2 font-pixel">
						teezy
						<span className="font-light text-muted-foreground/40"> / </span>
						<span className="font-semibold text-muted-foreground">
							{title.replace(/-/g, "_")}
						</span>
					</span>

					<span className="shrink-0 text-[0.6rem] text-muted-foreground/50 sm:text-[0.65rem]">
						{accent}
					</span>
				</div>

				<h1 className="select-none pt-1 font-pixel text-3xl text-foreground lowercase tracking-tight sm:text-4xl">
					{title}
				</h1>
			</div>

			{description && (
				<div className="pl-0.5">
					<p className="max-w-2xl font-normal font-sans text-[0.8125rem] text-muted-foreground leading-[1.6] sm:text-[0.875rem] sm:leading-[1.65]">
						{description}
					</p>
				</div>
			)}
		</div>
	);
};
