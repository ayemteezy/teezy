import { Image } from "@unpic/react";

export const Logo = () => {
	return (
		<div className="bg-foreground w-fit p-2 rounded-sm shadow">
			<Image src="/logo.svg" alt="Logo" width={20} height={20} />
		</div>
	);
};
