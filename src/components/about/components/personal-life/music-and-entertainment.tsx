import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Gamepad2Icon, HeadphonesIcon } from "lucide-react";
import { MiniGame } from "./components/mini-game";
import { ReadingSoundTracks } from "./components/reading-soundtracks";
import { TopTracks } from "./components/top-tracks";

export const MusicAndEntertainment = () => {
	return (
		<Card className="h-full flex flex-col">
			<CardHeader>
				<h3 className="flex items-center gap-2">
					<HeadphonesIcon className="size-5 text-primary" />
					<span className="text-lg font-bold">Music & Entertainment</span>
				</h3>
			</CardHeader>
			<CardContent>
				<TopTracks />
				<Separator className="my-2" />
				<ReadingSoundTracks />
			</CardContent>
			<CardFooter className="h-full w-full flex flex-col items-start">
				<Separator className="mb-2 w-full" />
				<div className="flex items-center gap-2">
					<Gamepad2Icon className="size-4 text-primary" />
					<h4 className="text-sm font-semibold">Mini Game</h4>
				</div>
				<div className="flex-1 w-full flex items-center justify-between mt-2 lg:mt-0">
					<p className="text-muted-foreground text-xs">
						How well do you know me?
					</p>
					<MiniGame />
				</div>
			</CardFooter>
		</Card>
	);
};
