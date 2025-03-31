"use client";

import Image from "next/image";
import { Hobby } from "./hobby";
import { hobbies } from "@/consts";
import { useEffect, useRef, useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import memoji2 from "../../../../../public/images/memoji2.png";

export const Passion = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [velocity, setVelocity] = useState({ vx: 1, vy: 1 });
  const [imageSize, setImageSize] = useState(200);

  const [zIndexMap, setZIndexMap] = useState(
    hobbies.reduce(
      (acc, _, index) => {
        acc[index] = 10 + index;
        return acc;
      },
      {} as Record<number, number>
    )
  );

  const [maxZIndex, setMaxZIndex] = useState(10 + hobbies.length);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });

        // **Adjust image size based on screen width**
        if (window.innerWidth < 768) {
          setImageSize(100);
        } else if (window.innerWidth < 1024) {
          setImageSize(150);
        } else {
          setImageSize(200);
        }
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const moveImage = () => {
      setPosition((prev) => {
        let newX = prev.x + velocity.vx;
        let newY = prev.y + velocity.vy;
        let newVx = velocity.vx;
        let newVy = velocity.vy;

        // **Bounce off left and right walls**
        if (newX <= 0 || newX + imageSize >= containerSize.width) {
          newVx = -newVx;
        }

        // **Bounce off top and bottom walls**
        if (newY <= 0 || newY + imageSize >= containerSize.height) {
          newVy = -newVy;
        }

        setVelocity({ vx: newVx, vy: newVy });

        return { x: newX, y: newY };
      });

      animationFrameId = requestAnimationFrame(moveImage);
    };

    animationFrameId = requestAnimationFrame(moveImage);

    return () => cancelAnimationFrame(animationFrameId);
  }, [containerSize, velocity, imageSize]);

  const bringToFront = (index: number) => {
    setMaxZIndex((prev) => prev + 1);
    setZIndexMap((prev) => ({ ...prev, [index]: maxZIndex }));
  };

  return (
    <BlurFade inView delay={0.75} className="w-full px-4">
      <div
        ref={containerRef}
        className="relative lg:h-[600px] md:h-[400px] h-[350px] bg-muted/20 rounded-xl border border-border overflow-hidden mb-8"
      >
        {/* Floating Image with Bouncing Effect */}
        <div
          className="absolute bg-primary opacity-15 rounded-full"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: `${imageSize}px`,
            height: `${imageSize}px`,
            transition: "transform 0.05s linear",
          }}
        >
          <Image
            src={memoji2}
            alt="Person with a kiss pose"
            width={imageSize}
            height={imageSize}
          />
        </div>

        {hobbies.map((hobby, index) => {
          const x =
            containerSize.width > 0
              ? (hobby.initialPosition.x / 500) * (containerSize.width - 256)
              : hobby.initialPosition.x;

          const y =
            containerSize.height > 0
              ? (hobby.initialPosition.y / 400) * (containerSize.height - 256)
              : hobby.initialPosition.y;

          return (
            <Hobby
              key={index}
              title={hobby.title}
              icon={hobby.icon}
              description={hobby.description}
              image={hobby.image}
              detailedInfo={hobby.detailedInfo}
              initialPosition={{ x, y }}
              zIndex={zIndexMap[index]}
              bringToFront={() => bringToFront(index)}
            />
          );
        })}
      </div>
    </BlurFade>
  );
};
