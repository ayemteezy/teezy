"use client";

import { Repo } from "@/types";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { ExternalLinkIcon } from "lucide-react";

interface Props {
  project: Repo;
}

export const ProjectCardButton = ({ project }: Props) => {
  const router = useRouter();

  const onClick = (url: string) => {
    router.push(url);
  };

  return (
    <>
      <div className="flex gap-2">
        <Button
          onClick={() => onClick(project.homepageUrl)}
          size="lg"
          variant="outline"
        >
          <ExternalLinkIcon className="size-4 mr-1" />
          Demo
        </Button>
        <Button
          onClick={() => onClick(project.url)}
          size="lg"
          variant="outline"
        >
          <FaGithub className="size-4 mr-1" />
          Code
        </Button>
      </div>
    </>
  );
};
