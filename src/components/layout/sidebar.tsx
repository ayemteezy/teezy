"use client";

import { useState } from "react";

import Link from "next/link";
import { links } from "@/consts";
import { FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { FileIcon, MailIcon, MenuIcon } from "lucide-react";

import { Button } from "../ui/button";
import { ThemeToggle } from "../mode-toggle";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Logo from "../common/logo";
import ScrollLink from "../common/scroll-link";

// Sidebar Menu for Mobile View
export const Sidebar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleSheetClose = () => {
    setSheetOpen((prev) => !prev);
  };

  return (
    <div className="inline-flex items-center gap-2 lg:hidden">
      <div className="flex items-center gap-2 ">
        <Button size="lg" asChild>
          <a href="/docs/resume.pdf" download="resume.pdf">
            <FileIcon className="size-4" />
            <span className="sr-only">Download Resume</span>
          </a>
        </Button>
        <ThemeToggle />
        <Sheet open={sheetOpen} onOpenChange={handleSheetClose}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0">
              <MenuIcon className="size-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="px-6 w-full md:max-w-sm">
            <SheetHeader>
              <VisuallyHidden.Root>
                <SheetTitle>Main Menu</SheetTitle>
                <SheetDescription>Toggle main menu</SheetDescription>
              </VisuallyHidden.Root>
            </SheetHeader>
            <nav className="grid gap-8 font-medium text-lg">
              <Logo />
              {links.map((link) => (
                <ScrollLink
                  id={link.id}
                  key={link.id}
                  className="text-muted-foreground transition-colors ease-in hover:text-primary"
                  onHandleSheetClose={handleSheetClose}
                >
                  {link.name}
                </ScrollLink>
              ))}
            </nav>
            <div className="mt-auto mb-4 flex flex-col">
              <div className="flex items-center justify-around">
                <Link
                  href=""
                  target="_blank"
                  onClick={() => setSheetOpen(false)}
                >
                  <RxGithubLogo className="h-6 w-6 text-muted-foreground transition-colors ease-in hover:text-foreground" />
                </Link>
                <Link
                  href=""
                  target="_blank"
                  onClick={() => setSheetOpen(false)}
                >
                  <FaLinkedin className="h-6 w-6 text-muted-foreground transition-colors ease-in hover:text-foreground" />
                </Link>
                <Link href="" onClick={() => setSheetOpen(false)}>
                  <MailIcon className="h-6 w-6 text-muted-foreground transition-colors ease-in hover:text-foreground" />
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
