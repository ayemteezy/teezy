import { siteConfig } from "@/config/site";

import Link from "next/link";
import { BlurFade } from "../magicui/blur-fade";

import { FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

export const Socials = () => {
	return (
		<>
			<div className="max-w-3xl">
				<BlurFade
					className="fixed right-auto bottom-0 left-10 z-10 hidden w-10 lg:block"
					delay={1.75}
				>
					<ul className="vertical-line dark:vertical-link-dark my-4 flex flex-col items-center gap-4">
						<li>
							<Link href={siteConfig.links.github} target="_blank">
								<RxGithubLogo className="h-6 w-6 text-muted-foreground transition-colors ease-in hover:text-foreground" />
							</Link>
						</li>
						<li>
							<Link href={siteConfig.links.linkedin} target="_blank">
								<FaLinkedin className="h-6 w-6 text-muted-foreground transition-colors ease-in hover:text-foreground" />
							</Link>
						</li>
					</ul>
				</BlurFade>

				<BlurFade
					className="fixed right-10 bottom-0 left-auto z-10 hidden w-10 lg:block"
					delay={1.75}
				>
					<div className="vertical-line dark:vertical-link-dark my-4 flex flex-col items-center gap-4">
						<Link
							href={`mailto:${siteConfig.links.email}`}
							className="text-muted-foreground text-sm tracking-widest transition-colors ease-in [writing-mode:vertical-rl] hover:text-foreground"
						>
							{siteConfig.links.email}
						</Link>
					</div>
				</BlurFade>
			</div>
		</>
	);
};
