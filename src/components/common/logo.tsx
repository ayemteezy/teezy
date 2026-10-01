import { Image } from "@unpic/react";

export const Logo = () => {
	return (
		<div className="flex items-center justify-center rounded-full bg-foreground p-4 shadow dark:bg-muted">
			<Image src="/logo-dark.svg" layout="fullWidth" />
		</div>
	);
};
