"use client";

import { useTheme } from "next-themes";

import { Separator } from "../ui/separator";
import { BlurFade } from "../magicui/blur-fade";
import { MagicCard } from "../magicui/magic-card";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useEffect, useState } from "react";

export const Quote = () => {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <BlurFade
      inView
      delay={0.25}
      className="lg:px-34 px-4 lg:mb-50 md:mb-30 mb-20"
    >
      <div className="xl:px-50 px-0">
        <MagicCard
          className="text-center rounded-xl dark:bg-gray-900 border-0 p-0.5"
          gradientColor={theme === "dark" ? "#2B7FFF" : "#2563EB"}
        >
          <Card className="pt-6">
            <CardHeader>
              <CardTitle>
                <h1 className="md:text-lg">My Development Philosophy</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <p className="text-sm lg:text-base text-muted-foreground">
                  I believe in writing clean, maintainable code that solves real
                  problems. My approach combines technical excellence with
                  user-centered design, ensuring that the solutions I build are
                  not only functional but also intuitive and enjoyable to use.
                </p>
                <div className="flex flex-col gap-4">
                  <Separator />
                  <span className="text-xs lg:text-sm italic text-muted-foreground">
                    "The best code is the code that's easy to delete and
                    replace." — Programming wisdom I live by
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </MagicCard>
      </div>
    </BlurFade>
  );
};
