import { Image } from "@unpic/react";
import { useEffect, useState } from "react";
import { useTheme } from "@/providers/theme-provider";

export const Logo = () => {
	const { theme } = useTheme();
	const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		if (theme === "dark" || theme === "light") {
			setResolvedTheme(theme);
			return;
		}

		if (theme === "system") {
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

			setResolvedTheme(mediaQuery.matches ? "dark" : "light");

			const handleChange = (e: MediaQueryListEvent) => {
				setResolvedTheme(e.matches ? "dark" : "light");
			};

			mediaQuery.addEventListener("change", handleChange);
			return () => mediaQuery.removeEventListener("change", handleChange);
		}
	}, [theme]);

	const _logoSrc = resolvedTheme === "dark" ? "/logo.svg" : "/logo-dark.svg";

	return (
		<div className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-foreground p-2 shadow">
			<Image src={_logoSrc} alt="Logo" width={20} height={20} layout="fixed" />
		</div>
	);
};
