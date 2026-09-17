import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Gear } from "@/types/gear";

interface GearItemProps {
  data: Gear;
}

export const GearItem = ({ data }: GearItemProps) => {
  return (
    <Link to={data.link} className="block h-full">
      <Card className="flex h-full cursor-pointer flex-col gap-0 overflow-hidden pt-0 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg/5">
        <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-white">
          <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-white">
            <Image
              src={data.image}
              alt={data.name}
              loading="eager"
              layout="fullWidth"
              className="h-32 w-48 scale-140 object-contain object-center"
            />
          </div>
        </div>

        <CardHeader className="flex-1 rounded-t-none border-t pt-4">
          <CardTitle className="font-sans font-semibold text-sm">
            {data.name}
          </CardTitle>

          <CardDescription className="font-sans text-xs">
            {data.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
