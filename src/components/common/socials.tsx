"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useScroll } from "@/hooks/use-scroll";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BlurFade } from "../magicui/blur-fade";

import { RiTwitterXLine } from "react-icons/ri";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const Socials = () => {
  const scrolled = useScroll(10);

  const positionClass = scrolled ? "top-15" : "top-0";

  return (
    <>
      <div className="max-w-3xl">
        <BlurFade
          className={`fixed left-15 bottom-0 z-10 hidden lg:flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${positionClass}`}
          delay={1.75}
        >
          <div className="h-[calc(50%-2.5rem)] w-px bg-gradient-to-b from-transparent to-muted-foreground" />
          <ul className="z-10 flex flex-col items-center gap-8 my-10">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <li>
                    <Link href={siteConfig.links.github} target="_blank">
                      <FiGithub className="size-5 text-muted-foreground transition-colors hover:text-blue-500" />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-blue-500/10 text-blue-500 mx-5"
                >
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <li>
                    <Link href={siteConfig.links.linkedin} target="_blank">
                      <FiLinkedin className="size-5 text-muted-foreground transition-colors hover:text-blue-500" />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-blue-500/10 text-blue-500 mx-5"
                >
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <li>
                    <Link href={siteConfig.links.twitter} target="_blank">
                      <RiTwitterXLine className="size-5 text-muted-foreground transition-colors hover:text-blue-500" />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-blue-500/10 text-blue-500 mx-5"
                >
                  <p>X</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ul>
          <div className="h-[calc(50%-2.5rem)] w-px bg-gradient-to-t from-transparent to-muted-foreground" />
        </BlurFade>
        <BlurFade
          className={`fixed right-10 bottom-0 z-10 hidden lg:flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${positionClass}`}
          delay={1.75}
        >
          <div className="h-[calc(50%-2.5rem)] w-px bg-gradient-to-b from-transparent to-muted-foreground" />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={`mailto:${siteConfig.links.email}`}
                  className="z-10 my-5 mx-10 text-muted-foreground text-sm tracking-widest transition-colors [writing-mode:vertical-rl] hover:text-blue-500"
                >
                  {siteConfig.links.email}
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="left"
                className="bg-blue-500/10 text-blue-500 mx-5"
              >
                <p>Looking for a developer? Send me an email</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="h-[calc(50%-2.5rem)] w-px bg-gradient-to-t from-transparent to-muted-foreground" />
        </BlurFade>
      </div>
    </>
  );
};
