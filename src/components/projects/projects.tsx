import { Repo } from "@/types";
import { getRepo } from "@/lib/api/github";

import { ProjectCard } from "./project-card";
import { BlurFade } from "../magicui/blur-fade";
import ProjectsSkeleton from "./project-skeleton";
import { SectionHeader } from "../common/section-header";
import { Particles } from "../magicui/particles";

type RepoData = Repo[] | { error: string };

export default async function Projects() {
  const data = (await getRepo()) as RepoData;

  if ("error" in data) {
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
          className="flex flex-col gap-8 lg:px-34 md:px-6  px-4"
        >
          <ProjectsSkeleton />
        </BlurFade>
      </section>
    );
  }

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
        className="flex flex-col gap-8 lg:px-34 md:px-6 px-4 md:mb-30 mb-15"
      >
        {Array.isArray(data) &&
          data.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
            />
          ))}
      </BlurFade>
    </section>
  );
}
