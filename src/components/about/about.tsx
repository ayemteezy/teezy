"use client";

import { SectionHeader } from "../common/section-header";
import { BlurFade } from "../magicui/blur-fade";
import { AboutTabs } from "./about-tabs";

export const About = () => {
	return (
		<section id="about">
			<SectionHeader
				title="Code, Creativity & Coffee"
				subtitle="A Bit About Me"
				description="I turn ideas into fully functional applications, blending logic with creativity. From web development to real-time systems, I build solutions that don’t just work—they engage, inspire, and make life easier."
			/>
			<BlurFade inView delay={0.25}>
				<div className="flex items-center justify-center lg:px-30 mb-30">
					<AboutTabs />
				</div>
			</BlurFade>
		</section>
	);
};
