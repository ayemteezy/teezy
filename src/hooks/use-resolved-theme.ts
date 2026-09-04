// src/hooks/use-resolved-theme.ts
import { useEffect, useState } from "react";
import { useTheme } from "@/providers/theme-provider";

export const useResolvedTheme = (): "light" | "dark" => {
  const { theme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark" || theme === "light") {
      setResolvedTheme(theme);
      return;
    }

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setResolvedTheme(mediaQuery.matches ? "dark" : "light");

      const handleChange = (e: MediaQueryListEvent) => {
        setResolvedTheme(e.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  return resolvedTheme;
};