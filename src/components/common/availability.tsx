import { CircleSmallIcon } from "lucide-react";

export const Availability = () => {
	return (
		<div className="flex items-center gap-1">
			{/* TODO: Add ping animation */}
			<CircleSmallIcon className="size-2" fill="black" />
			<p className="text-[0.625rem] text-muted-foreground">
				available for work
			</p>
		</div>
	);
};
