import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Quote } from "@/components/quote/quotation";
import Projects from "@/components/projects/projects";
import { Contact } from "@/components/contact/contact";

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
