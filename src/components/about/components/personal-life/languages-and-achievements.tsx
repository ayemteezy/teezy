import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { bucketList } from "@/consts";
import { GlobeIcon, PlaneIcon } from "lucide-react";
import { Achievements } from "./components/achievements";
import { Languages } from "./components/languages";

export const LanguagesAndAchievement = () => {
	return (
		<Card className="h-full flex flex-col">
			<CardHeader>
				<h3 className="flex items-center gap-2">
					<GlobeIcon className="size-5 text-primary" />
					<span className="text-lg font-bold">Languages & Achievements</span>
				</h3>
			</CardHeader>
			<CardContent className="flex-grow">
				<Languages />
				<Separator className="my-2" />
				<Achievements />
			</CardContent>
			<CardFooter className="mt-auto">
				<div className="w-full">
					<Separator className="mb-2" />
					<div className="flex items-center gap-2 mb-2">
						<PlaneIcon className="size-4 text-primary" />
						<h4 className="text-sm font-semibold">Travel Bucket List</h4>
					</div>
					<div className="flex flex-wrap items-center gap-2">
						{bucketList.map((bucketListItem, index) => (
							<Badge key={index} className="text-primary rounded-full">
								{bucketListItem}
							</Badge>
						))}
					</div>
				</div>
			</CardFooter>
		</Card>
	);
};
