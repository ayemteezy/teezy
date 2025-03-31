import React from "react";
import { BlurFade } from "../magicui/blur-fade";

interface Props {
  title: string;
  subtitle: string;
  description: string;
}
export const SectionHeader = ({ title, subtitle, description }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 md:pt-0 pt-10">
        <BlurFade inView>
          <h3 className="lg:mb-3 md:mb-2 mb-1 mt-2 inline-block font-bold text-primary text-sm uppercase tracking-wider md:text-base">
            {subtitle}
          </h3>
        </BlurFade>

        <BlurFade inView delay={0.25}>
          <h1 className="lg:text-5xl md:text-4xl text-2xl lg:mb-8 md:mb-6 mb-3 lg:max-w-150 md:max-w-100 max-w-75 text-center font-bold">
            {title}
          </h1>
        </BlurFade>

        <BlurFade inView delay={0.5}>
          <p className="lg:text-base text-sm text-center text-muted-foreground  max-w-2xl   mx-auto lg:mb-14 mb-10">
            {description}
          </p>
        </BlurFade>
      </div>
    </>
  );
};
