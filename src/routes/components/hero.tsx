import { Image } from "@unpic/react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
	return (
		<section>
			<div className="flex gap-4 mb-4">
				<Image
					src="/image.jpg"
					alt="my graduation photo"
					width={65}
					height={65}
					className="shadow rounded-xl"
				/>
				<div>
					<h1 className="font-bold font-sans">Laurence Lester Cariño</h1>
					<span className="text-sm text-muted-foreground">
						Full Stack Developer
					</span>
				</div>
			</div>
			<div className="font-sans text-muted-foreground flex flex-col gap-4">
				<p>
					I build useful digital spaces with a bias toward clarity, performance,
					and thoughtful details — interfaces that feel considered rather than
					assembled, and systems built to last past the first ship.
				</p>
				<div className="flex flex-col gap-4">
					<p>
						I specialize in high-performance, full-stack web applications using
						React, Next.js, TypeScript, and Tailwind CSS, with a focus on clean
						component architecture and fluid user experiences. On the backend, I
						build type-safe, robust systems with Drizzle ORM, Bun, and both SQL
						and NoSQL databases — so what users don't see holds up as well as
						what they do.
					</p>
					<p>
						I bring the same care to every layer of a product: custom tools,
						quiet interactions, and systems that are built to scale, not just
						ship. Whether it's a focused internal tool or a composable system
						for a growing team, I aim to make the work feel deliberate from the
						first line of code to the last pixel.
					</p>
					<Button>
						See More <ChevronDownIcon />
					</Button>
				</div>
			</div>
		</section>
	);
};
