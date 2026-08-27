import { Image } from "@unpic/react";

export const Logo = () => {
	return (
		<div className="bg-foreground w-fit p-2 rounded-sm">
			<Image src="/logo.svg" width={20} height={20} />
		</div>
	);
};
