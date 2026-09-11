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
		<div className="w-full space-y-5 pt-10 lg:pt-0">
			<header className="w-full border-border/40 border-b pb-2">
				<div className="flex select-none flex-row items-center justify-between font-medium font-mono text-[0.65rem] text-muted-foreground uppercase tracking-wider sm:text-xs">
					<span className="truncate pr-2 font-pixel">
						portfolio
						<span className="font-light font-mono text-muted-foreground/40">
							{" "}
							/{" "}
						</span>
						<span className="font-mono font-semibold text-muted-foreground">
							2026
						</span>
					</span>

					<span className="shrink-0 text-[0.6rem] text-muted-foreground/50 sm:text-[0.65rem]">
						caloocan / ph
					</span>
				</div>
			</header>

			<section className="space-y-4">
				<div className="flex items-center gap-4">
					<Image
						src="/images/photo.jpg"
						alt="Laurence Lester Cariño graduation photo"
						width={60}
						height={60}
						className="aspect-square shrink-0 rounded-md border border-border object-cover shadow-sm"
					/>
					<div className="space-y-0.5">
						<h1 className="font-bold font-sans text-foreground text-xl tracking-tight sm:text-2xl">
							Laurence Lester Cariño
						</h1>
						<div className="font-mono text-[0.6875rem] text-muted-foreground uppercase tracking-widest">
							Full Stack Developer
						</div>
					</div>
				</div>

				<div className="flex flex-col pl-0.5 font-sans text-[0.8125rem] text-muted-foreground leading-relaxed">
					<p className="text-[0.875rem] leading-[1.65]">
						I build useful digital spaces with a bias toward clarity,
						performance, and thoughtful details — interfaces that feel
						considered rather than assembled, and systems built to last past the
						first ship.
					</p>

					<div
						className={cn(
							"grid overflow-hidden transition-all duration-300 ease-in-out",
							isExtended
								? "mt-4 grid-rows-[1fr] opacity-100"
								: "grid-rows-[0fr] opacity-0",
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

							<div>
								<Glance />
							</div>
						</div>
					</div>

					<div className="flex w-full flex-col gap-2 pt-4">
						<Button
							onClick={() => setIsExtended(!isExtended)}
							size="sm"
							variant="outline"
							className="h-7 w-fit rounded-sm border-border/80 px-2.5 font-mono text-[0.625rem] text-muted-foreground uppercase tracking-wider hover:text-foreground"
						>
							{isExtended ? (
								<span className="flex items-center gap-1.5">
									See Less <ChevronUpIcon className="size-3" />
								</span>
							) : (
								<span className="flex items-center gap-1.5">
									See More <ChevronDownIcon className="size-3" />
								</span>
							)}
						</Button>

						{/* 2. Added explicit top and bottom margins directly to the line to isolate its spacing */}
						<Separator className="mt-3 mb-1 bg-border/40" />

						<CTA />
					</div>
				</div>
			</section>
		</div>
	);
};
