"use client";

import { useEffect, useRef } from "react";
import { ContactInfo } from "./contact-info";
import { useInView } from "react-intersection-observer";
import { SectionHeader } from "../common/section-header";
import RetroGrid from "../magicui/retro-grid";
import { Confetti, type ConfettiRef } from "../magicui/confetti";

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
    <section id="contact" className="relative overflow-visible lg:mb-50 mb-30">
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
            description="Have a project in mind or want to collaborate? Feel free to reach out to me through the form below or via my contact information."
          />
        </div>
      </div>
      <ContactInfo />
    </section>
  );
};
