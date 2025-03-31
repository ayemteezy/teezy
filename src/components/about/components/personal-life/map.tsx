import Image from "next/image";
import { MapPin } from "lucide-react";

import { Card } from "@/components/ui/card";

import map from "../../../../../public/images/map.png";
import memoji3 from "../../../../../public/images/memoji3.png";

export const Map = () => {
  return (
    <Card className="relative h-full py-0">
      <Image
        src={map}
        alt="Dark Map showing my location"
        className="w-full h-full rounded-xl"
      />
      <Image
        src={memoji3}
        alt="Person winking"
        className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 size-20 p-1 bg-primary rounded-full"
      />
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 bg-primary size-20 rounded-full animate-ping-large" />
      <div className="absolute px-2 py-2 top-2 left-2 rounded-lg bg-white">
        <p className=" flex items-center gap-2">
          <MapPin className="size-4  text-blue-500" />
          <span className="text-black font-semibold text-sm">
            Caloocan City, Philippines
          </span>
        </p>
      </div>
    </Card>
  );
};
