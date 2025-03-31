import { techStack } from "@/consts";
import { BlurFade } from "@/components/magicui/blur-fade";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const TechStack = () => {
  return (
    <BlurFade
      inView
      delay={0.75}
      className="w-full grid lg:grid-cols-3 grid-cols-1 gap-2 px-4"
    >
      {techStack.map((tech) => (
        <div key={tech.name}>
          <Card className="pt-6 h-full">
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
            <div className="flex flex-col gap-4">
              {tech.details.map((details) => (
                <CardContent key={details.name}>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm lg:text-base font-semibold">
                      {details.name}
                    </h3>
                    <Progress value={details.progress} />
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
