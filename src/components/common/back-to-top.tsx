"use client";

import { useScroll } from "@/hooks/use-scroll";
import { motion as m } from "framer-motion";
import { ArrowUpIcon } from "lucide-react";
import { Button } from "../ui/button";

export const BackToTop = () => {
  const hasScrolled = useScroll(50); // Detects scroll position

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <m.div
      className={`fixed lg:hidden block bottom-6 right-6 md:bottom-8 md:right-10 lg:right-30 z-40 ${
        hasScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        aria-label="Back to top"
      >
        <ArrowUpIcon className="size-5 md:size-4" />
      </Button>
    </m.div>
  );
};
