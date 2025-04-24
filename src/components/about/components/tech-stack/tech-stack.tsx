import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { techStack } from "@/consts";
import { CheckIcon } from "lucide-react";

export const TechStack = () => {
  return (
    <BlurFade
      inView
      delay={0.75}
      className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 px-4"
    >
      {techStack.map((tech) => (
        <div key={tech.name}>
          <Card className="h-full hover:-translate-y-1 transition">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <tech.icon className="size-5 text-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-lg">{tech.name}</p>
                    <span className="text-xs text-muted-foreground font-normal">
                      {tech.description}
                    </span>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <div className="flex flex-col gap-2">
              {tech.details.map((details) => (
                <CardContent key={details.name}>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 bg-blue-500/10 border border-transparent hover:border-blue-500/20 cursor-pointer text-blue-500 py-2 px-3 rounded-2xl">
                      <CheckIcon className="size-4 bg-emerald-500 p-0.5 rounded-full text-white" />
                      <h3 className="text-sm font-semibold">{details.name}</h3>
                    </div>
                  </div>
                </CardContent>
              ))}
            </div>
            {tech.lib && tech.lib.length > 0 && (
              <CardFooter className="flex flex-wrap gap-2">
                <h3 className="text-xs font-bold md:text-sm uppercase text-muted-foreground w-full">
                  {tech.libTitle || "Libraries & Tools"}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {tech.lib.map((library) => (
                    <Badge
                      key={library}
                      className="rounded-full  text-blue-500"
                    >
                      {library}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            )}
          </Card>
        </div>
      ))}
    </BlurFade>
  );
};
