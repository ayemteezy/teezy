import { Badge } from "@/components/ui/badge";
import { soundTracks } from "@/consts";
import { BookOpenIcon } from "lucide-react";

export const ReadingSoundTracks = () => {
	return (
		<>
			<div className="flex flex-col gap-1">
				<div className="flex items-center gap-2">
					<BookOpenIcon className="size-4 text-primary" />
					<h4 className="text-sm font-semibold">Reading Soundtrack</h4>
				</div>
				<span className="text-xs text-muted-foreground">
					My favorite ambient music to listen to while reading:
				</span>
			</div>
			<div className="flex items-center gap-2 mt-2">
				{soundTracks.map((soundTrack) => (
					<Badge key={soundTrack} className="text-primary rounded-full">
						{soundTrack}
					</Badge>
				))}
			</div>
		</>
	);
};
