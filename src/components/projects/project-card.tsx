"use client";

import Image from "next/image";
import { Repo } from "@/types";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

import { GitForkIcon, StarIcon } from "lucide-react";
import { ProjectCardButton } from "./project-card-button";
import { useEffect, useState } from "react";

interface Props {
  project: Repo;
  className?: string;
  style?: React.CSSProperties;
}

export const ProjectCard = ({ project, className, style }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className={cn(className)} style={style}>
      <Card className="overflow-hidden h-full flex flex-col pt-0 hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={`https://ayemteezy.github.io/${project.name}/social-preview.jpg`}
            alt={project.name}
            fill
            className="object-cover transition-transform hover:scale-105"
            priority
          />
        </div>
        <div>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl lg:text-3xl">
              <h3 className="text-xl font-bold mb-1 lg:mb-2">{project.name}</h3>
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm md:text-base lg:text-lg">
              <p className="text-muted-foreground text-sm xl:text-base mb-4 flex-1">
                {project.description}
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="lg:mb-4 mb-3 flex gap-2">
              {project.languages.map((language) => {
                return (
                  <Badge
                    key={language.name}
                    style={{
                      backgroundColor: language.color || "#cccccc", // Default gray if color is undefined
                      color: "#fff",
                    }}
                    variant="secondary"
                  >
                    {language.name}
                  </Badge>
                );
              })}
            </div>
            <div className="lg:mb-4 mb-3 flex lg:gap-4 gap-3 text-muted-foreground flex-row lg:items-center">
              <div className="flex items-center gap-1.5">
                <StarIcon className="size-4 text-amber-400" />
                <span className="text-sm">{project.stargazerCount}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <GitForkIcon className="size-4 text-primary" />
                <span className="text-sm">{project.forkCount}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <ProjectCardButton project={project} />
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};
