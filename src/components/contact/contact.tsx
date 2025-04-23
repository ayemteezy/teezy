"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { SectionHeader } from "../common/section-header";
import { Confetti, type ConfettiRef } from "../magicui/confetti";
import RetroGrid from "../magicui/retro-grid";
import { ContactInfo } from "./contact-info";

export const Contact = () => {
  const confettiRef = useRef<ConfettiRef>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        confettiRef.current?.fire({});
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section id="contact" className="relative overflow-visible lg:mb-40 mb-30">
      <RetroGrid className="absolute top-45 md:top-50 lg:-top-15 left-0 w-full  lg:h-[140%] -z-10" />

      <div className="relative overflow-visible">
        <Confetti
          ref={confettiRef}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
          style={{ transform: "translateY(-40%)" }}
        />
        <div ref={ref} className="overflow-visible">
          <SectionHeader
            title="Get In Touch"
            subtitle="contact"
            description="Have a project in mind or want to collaborate? I'm just one click away."
          />
        </div>
      </div>
      <ContactInfo />
    </section>
  );
};
