import { SunIcon, MoonIcon, DesktopIcon } from "@phosphor-icons/react";

import { useTheme } from "~components/theme/ThemeProvider";
import { cn } from "~lib/utils";

import { useCallback } from "react";

function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const toggle = useCallback(() => {
    setTheme(
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light",
    );
  }, [theme]);

  const icon =
    theme === "light" ? (
      <SunIcon size={20} color="var(--color-tertiary)" />
    ) : theme === "dark" ? (
      <MoonIcon size={20} color="var(--color-tertiary)" />
    ) : (
      <DesktopIcon size={20} color="var(--color-tertiary)" />
    );

  const label =
    theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

  return (
    <button
      onClick={() => toggle()}
      className={cn(
        "border-tertiary hover:bg-secondary/20 cursor-pointer rounded-lg border-2 p-2 transition-colors",
        className,
      )}
      aria-label={`Switch to ${label} mode`}
    >
      {icon}
    </button>
  );
}

export default ThemeToggle;
