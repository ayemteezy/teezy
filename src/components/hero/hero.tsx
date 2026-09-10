import { Image } from "@unpic/react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CTA } from "./cta";
import { Glance } from "./glance";

export const Hero = () => {
	const [isExtended, setIsExtended] = useState(false);

	return (
		<>
			<header className="w-full">
				<div className="mt-8 flex items-center justify-between font-mono text-[0.625rem] text-muted-foreground lg:mt-0">
					<span className="font-pixel uppercase tracking-[0.15em]">
						portfolio / 2026
					</span>
					<span className="font-mono uppercase tracking-[0.15em]">
						caloocan / ph
					</span>
				</div>
			</header>
			<section>
				<div className="mb-4 flex gap-4">
					<Image
						src="/images/photo.jpg"
						alt="my graduation photo"
						width={65}
						height={65}
						className="aspect-square shrink-0 self-start rounded-xl shadow"
					/>
					<div>
						<h1 className="font-bold font-sans">Laurence Lester Cariño</h1>
						<span className="text-muted-foreground text-sm">
							Full Stack Developer
						</span>
					</div>
				</div>
				<div
					className={cn(
						"flex flex-col font-sans text-muted-foreground transition-all duration-500 ease-in-out",
						isExtended ? "gap-4" : "gap-2",
					)}
				>
					<p>
						I build useful digital spaces with a bias toward clarity,
						performance, and thoughtful details — interfaces that feel
						considered rather than assembled, and systems built to last past the
						first ship.
					</p>
					<div
						className={cn(
							"grid overflow-hidden transition-all duration-300 ease-in-out",
							isExtended ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
						)}
					>
						<div className="flex flex-col gap-4 overflow-hidden">
							<p>
								I specialize in high-performance, full-stack web applications
								using React, Next.js, TypeScript, and Tailwind CSS, with a focus
								on clean component architecture and fluid user experiences. On
								the backend, I build type-safe, robust systems with Drizzle ORM,
								Bun, and both SQL and NoSQL databases — so what users don't see
								holds up as well as what they do.
							</p>
							<p>
								I bring the same care to every layer of a product: custom tools,
								quiet interactions, and systems that are built to scale, not
								just ship. Whether it's a focused internal tool or a composable
								system for a growing team, I aim to make the work feel
								deliberate from the first line of code to the last pixel.
							</p>
							<Glance />
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<Button
							onClick={() => setIsExtended(!isExtended)}
							className="w-fit"
							size="lg"
							variant="ghost"
						>
							{isExtended ? (
								<>
									See Less <ChevronUpIcon />
								</>
							) : (
								<>
									See More <ChevronDownIcon />
								</>
							)}
						</Button>
						<Separator />
						<CTA />
					</div>
				</div>
			</section>
		</>
	);
};
