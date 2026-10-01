import { Highlight } from "@/components/common/highlight";
import { AnimatedScroll } from "@/components/ui/animated-scroll";
import { AuroraText } from "@/components/ui/aurora-text";

export const Hero = () => {
	return (
		<section className="h-svh overflow-hidden pt-9 md:h-dvh">
			<div className="relative h-full border-y">
				{/* Background grid */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
				>
					<div className="border-border border-r" />
					<div className="border-border border-r" />
					<div className="border-border border-r" />
					<div />
				</div>

				<div
					aria-hidden
					className="pointer-events-none absolute top-[35%] left-1/2 -z-10 h-56 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl sm:h-72 sm:w-104 md:top-[45%] lg:h-88 lg:w-xl"
				/>

				{/* Content */}
				<div className="relative flex h-full flex-col items-center justify-start border-border border-x px-5 pt-28 text-center sm:pt-24 md:justify-center md:px-12 md:pb-40">
					<div className="flex flex-col items-center">
						<Highlight />

						<div className="flex w-full flex-col items-center">
							<h1 className="mt-4 max-w-4xl font-heading font-semibold text-3xl leading-[0.95] tracking-[-0.035em] sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl">
								Building clean
								<br />
								<AuroraText className="italic">web experiences.</AuroraText>
							</h1>

							<p className="mt-5 max-w-88 text-[13px] text-foreground/60 leading-6 sm:mt-6 sm:max-w-xl sm:text-[15px] sm:leading-7 md:mt-7 md:text-base md:leading-7">
								I&apos;m Laurence Lester Cariño — a full stack developer
								building high-performance web software, transforming complex
								backend systems into simple, thoughtful user experiences.
							</p>
						</div>
					</div>
				</div>

				{/* Scroll */}
				<div className="absolute bottom-20 left-1/2 -translate-x-1/2 md:bottom-8">
					<AnimatedScroll />
				</div>
			</div>
		</section>
	);
};
