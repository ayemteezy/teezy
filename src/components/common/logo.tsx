import { Image } from "@unpic/react";
import { useResolvedTheme } from "@/hooks/use-resolved-theme";

export const Logo = () => {
	const theme = useResolvedTheme();

	const _themeSrc = theme === "dark" ? "/logo.svg" : "/logo-dark.svg";

	return (
		<div className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-foreground p-2 shadow">
			<Image src={_themeSrc} alt="Logo" width={20} height={20} layout="fixed" />
		</div>
	);
};
