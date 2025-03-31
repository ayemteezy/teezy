"use client";

import { Button } from "@/components/ui/button";
import { topTracks } from "@/consts";
import { Howl } from "howler";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useState } from "react";

interface Track {
	name: string;
	src: string;
}

export const TopTracks = () => {
	const [currentTrack, setCurrentTrack] = useState<Howl | null>(null);
	const [playingSrc, setPlayingSrc] = useState<string | null>(null); // Track currently playing source

	const playTrack = (track: Track) => {
		if (currentTrack) {
			currentTrack.stop();
		}

		const sound = new Howl({
			src: [track.src],
			html5: true,
			volume: 1.0,
			onend: () => setPlayingSrc(null), // Reset when track ends
			onloaderror: (_, error) => console.error("Howler Load Error:", error),
			onplayerror: (_, error) => console.error("Howler Play Error:", error),
		});

		sound.play();
		setCurrentTrack(sound);
		setPlayingSrc(track.src); // Set currently playing track
	};

	const stopTrack = () => {
		if (currentTrack) {
			currentTrack.stop();
			setCurrentTrack(null);
			setPlayingSrc(null);
		}
	};

	return (
		<>
			<h4 className="text-[14px] font-semibold">My Favorite Tracks</h4>
			<div className="mt-2">
				{topTracks.map((track: Track, index: number) => {
					const isCurrentPlaying = playingSrc === track.src; // Check if this track is playing

					return (
						<div key={index} className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<span className="text-xs bg-primary/10 p-2 w-5 h-5 flex items-center justify-center rounded-full">
									{index + 1}
								</span>
								<p className="text-xs text-muted-foreground">{track.name}</p>
							</div>
							<Button
								variant="ghost"
								size="icon"
								className="cursor-pointer"
								onClick={() =>
									isCurrentPlaying ? stopTrack() : playTrack(track)
								}
							>
								{isCurrentPlaying ? (
									<PauseIcon className="size-4" />
								) : (
									<PlayIcon className="size-4" />
								)}
							</Button>
						</div>
					);
				})}
			</div>
		</>
	);
};
