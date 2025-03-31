import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { books, genres } from "@/consts";
import { BookOpenIcon } from "lucide-react";
import Image from "next/image";

export const Books = () => {
  return (
    <Card className="h-auto w-full relative bg-gradient-to-br from-primary/5 to-primary/20 backdrop-blur-sm border-primary/20 overflow-hidden dark:from-primary/10 dark:to-primary/30 dark:border-primary/30">
      <BookOpenIcon className="absolute size-40 text-primary/10 bottom-0 right-0 z-0" />
      <CardHeader>
        <div className="flex items-center gap-2">
          <BookOpenIcon className="size-5 text-primary" />
          <h3 className="font-bold text-lg">My Favorite Books</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="max-w-160 z-10 text-sm md:text-base">
          I read{" "}
          <span className="font-bold text-primary">
            50+ books, manga, and manhwa{" "}
          </span>
          per year. These stories have shaped my thinking and approach to both
          life and coding.
        </p>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-4">
          {books.map((book) => (
            <div
              key={book.title}
              className="rounded-lg overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative w-full aspect-[3/4] group">
                <Image
                  src={book.image}
                  alt="Book Cover"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-lg" />
                <p className="absolute bottom-2 px-0.75 hidden group-hover:block text-xs z-10 italic">
                  &quot;{book.quote}&quot;
                </p>

                <Badge className="absolute top-1 right-1 z-20 rounded-full bg-primary text-white capitalize">
                  {book.type}
                </Badge>
              </div>
              <div className="p-2 leading-3">
                <p className="font-semibold text-sm">{book.title}</p>
                <span className="text-xs text-muted-foreground">
                  {book.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h4 className="flex items-center gap-2 mb-2">
            <BookOpenIcon className="size-4 text-primary" />
            <span className="text-sm font-semibold">Favorite Genres</span>
          </h4>
          <div className="flex gap-2 flex-wrap">
            {genres.map((genre) => (
              <Badge
                key={genre}
                className="bg-primary/10 text-primary rounded-full"
              >
                {genre}
              </Badge>
            ))}
          </div>
        </div>
        <div className="pl-4 border-l-2 border-primary/20 mt-4">
          <div className="flex flex-col gap-1 italic text-muted-foreground">
            <p className="text-sm">
              &quot;A reader lives a thousand lives before he dies. The man who
              never reads lives only one.&quot;
            </p>
            <span className="text-xs"> — George R.R. Martin</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
