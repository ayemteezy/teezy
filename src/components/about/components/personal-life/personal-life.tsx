import { BlurFade } from "@/components/magicui/blur-fade";
import { Books } from "./books";
import { LanguagesAndAchievement } from "./languages-and-achievements";
import { Map } from "./map";
import { MusicAndEntertainment } from "./music-and-entertainment";

export const PersonalLife = () => {
  return (
    <BlurFade inView delay={0.75} className="w-full px-4">
      <div className="grid w-full grid-cols-1 lg:grid-cols-12 gap-8 auto-rows-[minmax(150px,auto)]">
        <div className="col-span-1 lg:col-span-8 row-span-2 relative">
          <Books />
        </div>
        <div className="col-span-1 lg:col-span-4 row-span-2">
          <LanguagesAndAchievement />
        </div>
        <div className="col-span-1 lg:col-span-5 row-span-2">
          <Map />
        </div>
        <div className="col-span-1 lg:col-span-7 row-span-2">
          <MusicAndEntertainment />
        </div>
      </div>
    </BlurFade>
  );
};
