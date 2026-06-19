"use client";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggleTheme}
      size="icon"
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      type="button"
      variant="ghost"
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
