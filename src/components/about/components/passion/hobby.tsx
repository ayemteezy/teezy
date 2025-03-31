"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Star, Calendar, LucideIcon } from "lucide-react";

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
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const { experience, funFact, startedYear } = detailedInfo;

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current) {
        const container =
          cardRef.current.parentElement?.getBoundingClientRect();
        if (!container) return;

        let newX = position.x;
        let newY = position.y;

        if (position.x + 256 > container.width) newX = container.width - 256;
        if (position.y + 256 > container.height) newY = container.height - 256;

        setPosition({ x: newX, y: newY });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [position]);

  return (
    <motion.div
      ref={cardRef}
      className="absolute lg:w-64 h-64 w-55  rounded-xl shadow-lg bg-card border border-border overflow-hidden cursor-grab"
      style={{ zIndex, perspective: "1000px" }}
      initial={{ x: initialPosition.x, y: initialPosition.y }}
      animate={{ x: position.x, y: position.y }}
      drag
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      whileDrag={{ scale: 1.05 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(e, info) => {
        setIsDragging(false);
        setPosition({
          x: position.x + info.offset.x,
          y: position.y + info.offset.y,
        });
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
        {/* Front Side */}
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
            <p className="text-sm text-center text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
            Click to flip
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute w-full h-full rounded-xl overflow-hidden px-5 flex flex-col bg-primary/5"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center mt-6">
            <div className="mb-2 flex justify-center">
              <Icon />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
          </div>

          <div className="flex-1 flex flex-col justify-between overflow-y-auto">
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

          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
            Click to flip
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
