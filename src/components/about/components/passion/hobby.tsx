"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { Calendar, Clock, Star, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface DraggableHobbyProps {
  title: string;
  icon: LucideIcon;
  description: string;
  image: string;
  detailedInfo?: {
    experience?: string;
    funFact?: string;
    startedYear?: string;
    favoriteAspect?: string;
  };
  initialPosition?: { x: number; y: number };
  zIndex?: number;
  bringToFront: () => void;
}

export const Hobby = ({
  title,
  icon: Icon,
  description,
  image,
  detailedInfo = {},
  initialPosition = { x: 0, y: 0 },
  zIndex = 10,
  bringToFront,
}: DraggableHobbyProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [position, setPosition] = useState(initialPosition);

  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(initialPosition.x);
  const y = useMotionValue(initialPosition.y);

  const { experience, funFact, startedYear } = detailedInfo;

  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position, x, y]);

  useEffect(() => {
    const handleResize = () => {
      if (!cardRef.current) return;

      const container = cardRef.current.parentElement?.getBoundingClientRect();
      const cardWidth = cardRef.current.offsetWidth;
      const cardHeight = cardRef.current.offsetHeight;

      const maxX = (container?.width ?? 0) - cardWidth;
      const maxY = (container?.height ?? 0) - cardHeight;

      const clampedX = Math.max(0, Math.min(x.get(), maxX));
      const clampedY = Math.max(0, Math.min(y.get(), maxY));

      x.set(clampedX);
      y.set(clampedY);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [x, y]);

  // Calculate nearest valid position
  const getNearestValidPosition = (
    card: HTMLDivElement,
    container: DOMRect
  ): { x: number; y: number } => {
    const cardRect = card.getBoundingClientRect();
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;

    const maxX = container.width - cardWidth;
    const maxY = container.height - cardHeight;

    let nearestX = Math.max(0, Math.min(cardRect.left - container.left, maxX));
    let nearestY = Math.max(0, Math.min(cardRect.top - container.top, maxY));

    return { x: nearestX, y: nearestY };
  };

  // Animate back to nearest valid position
  const animateToNearestPosition = (targetX: number, targetY: number) => {
    animate(x, targetX, {
      type: "spring",
      stiffness: 500,
      damping: 30,
    });
    animate(y, targetY, {
      type: "spring",
      stiffness: 500,
      damping: 30,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className="absolute w-44 h-52 sm:w-52 sm:h-60 lg:w-64 lg:h-64 rounded-xl shadow-lg bg-card border border-border overflow-hidden cursor-grab"
      style={{ x, y, zIndex, perspective: "1000px" }}
      drag
      whileDrag={{ scale: 1.05 }}
      onDragStart={() => {
        setIsDragging(true);
        bringToFront();
      }}
      onDragEnd={() => {
        setIsDragging(false);

        const card = cardRef.current;
        const container = card?.parentElement?.getBoundingClientRect();

        if (card && container) {
          const cardRect = card.getBoundingClientRect();

          const isOutOfBounds =
            cardRect.left < container.left ||
            cardRect.top < container.top ||
            cardRect.right > container.right ||
            cardRect.bottom > container.bottom;

          if (isOutOfBounds) {
            const nearestX = Math.max(
              0,
              Math.min(
                cardRect.left - container.left,
                container.width - card.offsetWidth
              )
            );
            const nearestY = Math.max(
              0,
              Math.min(
                cardRect.top - container.top,
                container.height - card.offsetHeight
              )
            );

            animate(x, nearestX, {
              type: "spring",
              stiffness: 500,
              damping: 30,
            });
            animate(y, nearestY, {
              type: "spring",
              stiffness: 500,
              damping: 30,
            });
          }
        }
      }}
      onClick={() => {
        if (!isDragging) {
          bringToFront();
          setIsFlipped(!isFlipped);
        }
      }}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <motion.div
          className="absolute w-full h-full rounded-xl overflow-hidden flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-2/3 w-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-3 text-white">
              <h3 className="lg:text-xl text-lg font-bold flex justify-center items-center gap-2">
                <Icon className="size-6" />
                {title}
              </h3>
            </div>
          </div>
          <div className="px-2 py-1 flex-1 flex items-center justify-center mb-2">
            <p className="text-xs md:text-sm text-center text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="absolute bottom-2 right-2 text-[10px]  text-muted-foreground">
            Click to flip
          </div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute w-full h-full rounded-xl overflow-hidden px-5 flex flex-col bg-primary/5"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center mt-6">
            <div className="mb-2 flex justify-center">
              <Icon />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
              {title}
            </h3>
          </div>

          <div className="flex-1 flex flex-col justify-between overflow-y-auto mb-2">
            <div className="space-y-2 mb-2">
              {experience && (
                <div className="flex items-start gap-1.5">
                  <Clock className="size-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-[10px] leading-tight">{experience}</p>
                </div>
              )}

              {funFact && (
                <div className="flex items-start gap-1.5">
                  <Star className="size-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-[10px] leading-tight">{funFact}</p>
                </div>
              )}

              {startedYear && (
                <div className="flex items-start gap-1.5">
                  <Calendar className="size-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-[10px] leading-tight">
                    Started in {startedYear}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="absolute bottom-2 right-2 text-[10px] text-muted-foreground">
            Click to flip
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
