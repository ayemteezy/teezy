import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Gear } from "@/types/gear";

interface GearItemProps {
	data: Gear;
}

export const GearItem = ({ data }: GearItemProps) => {
	return (
		<Link to={data.link}>
			<Card className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg/5">
				<div className="flex h-32 items-center justify-center px-4 pt-4">
					<Image
						src={data.image}
						alt={data.name}
						layout="fullWidth"
						className="h-full w-full object-contain"
					/>
				</div>
				<CardHeader className="rounded-t-none border-t pt-4">
					<CardTitle className="font-sans font-semibold text-sm">
						{data.name}
					</CardTitle>
					<CardDescription className="w-[90%] font-sans text-xs">
						{data.description}
					</CardDescription>
				</CardHeader>
			</Card>
		</Link>
	);
};
