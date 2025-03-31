import { achievements } from "@/consts";
import { AwardIcon } from "lucide-react";

export const Achievements = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <AwardIcon className="size-4 text-primary" />
        <h4 className="text-sm font-semibold">Personal Achievements</h4>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-xs bg-primary/10 p-2 w-5 h-5 flex items-center justify-center rounded-full">
              {index + 1}
            </span>
            <p className="text-xs text-muted-foreground">{achievement}</p>
          </div>
        ))}
      </div>
    </>
  );
};
