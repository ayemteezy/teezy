import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton
          key={index}
          className=" h-70 w-full rounded-xl "
          style={{
            top: `calc(64px + ${index * 40}px)`,
          }}
        />
      ))}
    </div>
  );
}
