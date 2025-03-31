import { BlurFade } from "@/components/magicui/blur-fade";

interface Props {
  title: string;
  subtitle: string;
}

export const TabHeader = ({ title, subtitle }: Props) => {
  return (
    <BlurFade inView delay={0.5} className="mb-10">
      <div className="text-center">
        <h1 className="text-xl md:text-2xl font-bold mb-2">{title}</h1>
        <h3 className="text-sm max-w-xl lg:text-base text-muted-foreground">
          {subtitle}
        </h3>
      </div>
    </BlurFade>
  );
};
