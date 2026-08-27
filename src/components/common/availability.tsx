import { CircleSmallIcon } from "lucide-react";

export const Availability = () => {
	return (
		<div className="flex items-center gap-1">
			<CircleSmallIcon className="size-2" fill="black" />
			<p className="text-[0.6rem] text-muted-foreground">Available for work</p>
		</div>
	);
};
