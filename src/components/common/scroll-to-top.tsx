import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

interface ScrollToTopProps {
	scrollRef: React.RefObject<HTMLDivElement | null>;
}

export function ScrollToTop({ scrollRef }: ScrollToTopProps) {
	const router = useRouter();

	useEffect(() => {
		return router.subscribe("onResolved", () => {
			requestAnimationFrame(() => {
				scrollRef.current?.scrollTo({
					top: 0,
					behavior: "instant",
				});
			});
		});
	}, [router, scrollRef]);

	return null;
}
