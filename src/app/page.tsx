import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Hero } from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import { Quote } from "@/components/quote/quotation";

export default function Home() {
	return (
		<main>
			<Hero />
			<Projects />
			<About />
			<Quote />
			<Contact />
		</main>
	);
}
