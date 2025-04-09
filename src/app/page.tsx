"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";

import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Quote } from "@/components/quote/quotation";
import { Contact } from "@/components/contact/contact";
import ProjectsSkeleton from "@/components/projects/project-skeleton";

const Projects = dynamic(() => import("@/components/projects/projects"), {
  ssr: false,
  loading: () => <ProjectsSkeleton />,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      <About />
      <Quote />
      <Contact />
    </main>
  );
}
