"use client";

import { useEffect, useState } from "react";
import type { Repo } from "@/types";
import { getRepo } from "@/lib/api/github";

import { ProjectCard } from "./project-card";
import { BlurFade } from "../magicui/blur-fade";
import ProjectsSkeleton from "./project-skeleton";
import { SectionHeader } from "../common/section-header";

export default function ProjectsClient() {
  const [data, setData] = useState<Repo[] | { error: string } | null>(null);

  useEffect(() => {
    getRepo().then(setData);
  }, []);

  return (
    <section id="projects">
      <SectionHeader
        title="Bringing Ideas to Life, One Line at a Time"
        subtitle="My Creations"
        description="From intuitive web applications to real-time systems, I build projects that merge functionality with seamless user experience. Here are some of my favorite works that showcase my skills and creativity."
      />
      <BlurFade
        inView
        delay={0.75}
        className={`grid grid-cols-1 ${
          Array.isArray(data) ? "sm:grid-cols-2 lg:grid-cols-3" : ""
        } gap-6 lg:px-34 md:px-6 px-4 md:mb-30 mb-15`}
      >
        {Array.isArray(data) ? (
          data.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <ProjectsSkeleton />
        )}
      </BlurFade>
    </section>
  );
}
