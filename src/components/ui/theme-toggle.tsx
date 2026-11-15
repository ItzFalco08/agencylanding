"use client";

import * as React from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export type ThemeToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  sound?: boolean;
};

function tick() {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(1600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.035, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.onended = () => void ctx.close();
    osc.stop(ctx.currentTime + 0.06);
  } catch {}
}

export function ThemeToggle({
  className,
  onClick,
  sound = true,
  ...props
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (sound) tick();

    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const doc = document as Document & {
      startViewTransition?: (callback: () => void | Promise<void>) => {
        ready: Promise<void>;
      };
    };

    if (prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX || rect.left + rect.width / 2;
    const y = event.clientY || rect.top + rect.height / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    // Keep the old page visible beneath the clipped incoming page. This also
    // provides the same reveal in browsers without the View Transitions API.
    if (!doc.startViewTransition) {
      const root = document.documentElement;
      const body = document.body;
      const oldBackground = getComputedStyle(body).backgroundColor;
      body.style.backgroundColor = oldBackground;
      root.style.clipPath = `circle(0px at ${x}px ${y}px)`;
      setTheme(nextTheme);
      requestAnimationFrame(() => {
        const animation = root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`] },
          { duration: 500, easing: "ease-in-out", fill: "forwards" },
        );
        animation.finished.finally(() => {
          root.style.removeProperty("clip-path");
          body.style.removeProperty("background-color");
        });
      });
      return;
    }

    const root = document.documentElement;
    root.style.setProperty("--theme-toggle-x", `${x}px`);
    root.style.setProperty("--theme-toggle-y", `${y}px`);
    root.style.setProperty("--theme-toggle-radius", `${endRadius}px`);

    const transition = doc.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });

    transition.finished.finally(() => {
      root.style.removeProperty("--theme-toggle-x");
      root.style.removeProperty("--theme-toggle-y");
      root.style.removeProperty("--theme-toggle-radius");
    });
  };

  return (
    <button
      type="button"
      data-slot="theme-toggle"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex size-9 cursor-pointer items-center justify-center rounded-lg bg-secondary text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...props}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform duration-300 motion-reduce:transition-none dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform duration-300 motion-reduce:transition-none dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
