import Link from "next/link";
import { BlurFade } from "../magicui/blur-fade";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <BlurFade delay={1} inView>
      <footer className="p-4 sm:p-6">
        <div className="mx-auto max-w-screen-lg">
          <div className="flex items-center justify-center">
            <span className="text-center text-muted-foreground text-sm">
              &copy; {year}{" "}
              <Link href="" target="_blank" className="hover:underline">
                {/* Made with 💖 by  */}
                Laurence Lester Cariño
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </BlurFade>
  );
};
