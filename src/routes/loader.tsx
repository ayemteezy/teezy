import { useEffect, useState } from "react";

export function AppLoader({ children }: { children: React.ReactNode }) {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const handleLoad = () => setReady(true);

		if (document.readyState === "complete") {
			setReady(true);
		} else {
			window.addEventListener("load", handleLoad);

			return () => window.removeEventListener("load", handleLoad);
		}
	}, []);

	if (!ready) {
		return (
			<div className="flex min-h-dvh w-full items-center justify-center bg-background">
				<div className="flex items-center gap-3">
					<span
						aria-hidden="true"
						className="size-1.5 animate-pulse rounded-full bg-foreground/50"
					/>
					<span className="font-mono text-[0.625rem] text-muted-foreground uppercase tracking-[0.2em]">
						loading
					</span>
				</div>
			</div>
		);
	}

	return children;
}
