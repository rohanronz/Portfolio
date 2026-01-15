"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="h-10 w-10 rounded-full border border-border bg-surface/80"
      />
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80 text-foreground transition hover:-translate-y-0.5 hover:bg-surface"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
