"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import memoji from "../../../public/images/memoji.png";
import ScrollLink from "../common/scroll-link";
import { Status } from "../common/status";

import { BlurFade } from "../magicui/blur-fade";
import { BorderBeam } from "../magicui/border-beam";
import { TypingAnimation } from "../magicui/typing-animation";
import { Button } from "../ui/button";

import { MoveRightIcon } from "lucide-react";
import { Particles } from "../magicui/particles";
import { Ripple } from "../magicui/ripple";

import { useTheme } from "next-themes";
import { ScrollIndicator } from "../scroll-indicator";

export const Hero = () => {
	const { resolvedTheme } = useTheme();
	const [color, setColor] = useState("#2b7fff");

	useEffect(() => {
		setColor(resolvedTheme === "dark" ? "#2B7FFF" : "#2563EB");
	}, [resolvedTheme]);
	return (
		<section className="relative overflow-hidden" id="home">
			<div className="mx-auto max-w-screen-xl lg:px-16 px-4 pt-16 pb-8  lg:pt-30 md:pt-20 lg:pb-24">
				<div className="flex flex-col items-center">
					<BlurFade delay={0.25}>
						<Image
							src={memoji}
							alt="Person peeking from behind of a laptop."
							className="z-10 size-[100px] translate-y-2"
							priority
						/>
					</BlurFade>

					<BlurFade delay={0.25}>
						<Status />
					</BlurFade>
					<div className="max-w-screen-sm text-center">
						<BlurFade delay={0.5}>
							<span className="lg:mb-3 mb-0 mt-2 inline-block font-bold text-primary text-sm uppercase tracking-wider md:text-base">
								Hi, my name is
							</span>
						</BlurFade>

						<BlurFade delay={0.75}>
							<h1 className="lg:mb-2 font-bold font-space_grotesk text-3xl  md:text-5xl lg:text-6xl">
								Laurence Lester Cariño
							</h1>
						</BlurFade>

						<BlurFade delay={1}>
							<TypingAnimation
								delay={1000}
								className="lg:text-5xl md:text-4xl text-2xl lg:mb-6 md:mb-4 mb-3"
							>
								Code. Create. Innovate.
							</TypingAnimation>
						</BlurFade>

						<BlurFade delay={1.25}>
							<p className="lg:text-lg text-base text-muted-foreground/80 mb-2">
								Also known as <span className="font-bold">Teezy</span> in the
								dev world
							</p>
							<p className="lg:text-base text-sm text-muted-foreground max-w-4xl mx-auto lg:mb-14 mb-10">
								I build exceptional digital experiences that are fast,
								accessible, and visually appealing. Specializing in creating
								modern web applications with cutting-edge technologies.
							</p>
						</BlurFade>

						<BlurFade delay={1.5}>
							<div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full mb-12 md:mb-24 lg:mb-12">
								<ScrollLink id="projects" className="w-full lg:w-auto">
									<Button size="lg" className="group backdrop-blur-sm w-full">
										View My Work
										<MoveRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Button>
								</ScrollLink>
								<ScrollLink id="contact" className="w-full lg:w-auto">
									<Button
										size="lg"
										variant="outline"
										className="backdrop-blur-sm w-full"
									>
										Contact Me
										<BorderBeam colorFrom="#2b7fff" colorTo="#2b7fff" />
									</Button>
								</ScrollLink>
							</div>
						</BlurFade>
						<BlurFade delay={2} className="mb:40">
							<ScrollIndicator />
						</BlurFade>
					</div>
				</div>
			</div>
			<Ripple color="#193cb8" mainCircleSize={580} className="-z-10" />
			<Particles className="absolute inset-0 z-0" quantity={75} color={color} />
		</section>
	);
};
