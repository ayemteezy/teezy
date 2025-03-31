"use client";

import Link from "next/link";
import { FileIcon } from "lucide-react";

import { useScroll } from "@/hooks/use-scroll";

import { links } from "@/consts";

import Logo from "../common/logo";
import ScrollLink from "../common/scroll-link";

import { Button } from "../ui/button";
import { ThemeToggle } from "../mode-toggle";
import { BlurFade } from "../magicui/blur-fade";
import { Sidebar } from "./sidebar";

export const Header = () => {
  const hasScrolled = useScroll(50);

  return (
    <header
      className={`fixed top-0 flex w-full justify-center ${
        hasScrolled
          ? "border border-b-[#0c0a091a] bg-background/30 shadow-md backdrop-blur-sm dark:border-b-[#fafaf91a]"
          : "bg-transparent"
      } z-30 transition-all ease-in`}
    >
      <BlurFade className="w-full">
        <nav className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between px-4 py-2.5 lg:px-6">
          <Logo />
          <div className="hidden w-full items-center justify-between gap-8 lg:flex lg:w-auto">
            <ul className="inline-flex space-x-8">
              {links.map((link) => (
                <ScrollLink
                  id={link.id}
                  key={link.name}
                  className="text-muted-foreground transition-colors ease-in hover:text-primary"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </ul>

            <div className="flex items-center justify-center gap-2">
              <ThemeToggle />
              <Button size="lg" asChild>
                <a href="/docs/resume.pdf" download="resume.pdf">
                  <FileIcon className="size-4" />
                  <span>Resume</span>
                </a>
              </Button>
            </div>
          </div>

          <Sidebar />
        </nav>
      </BlurFade>
    </header>
  );
};
