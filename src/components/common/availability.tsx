import { AVAILABILITY_CONFIG, SITE } from "@/constants/configs/site.config";

export const Availability = () => {
	const { status } = SITE.profile.availability;
	const { label } = AVAILABILITY_CONFIG[status];
	return (
		<div className="flex items-center justify-center">
			<p className="text-muted-foreground text-xs lg:text-[0.625rem]">
				{label}
			</p>
		</div>
	);
};
