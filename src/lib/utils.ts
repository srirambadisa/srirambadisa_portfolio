import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function expandSizeUtilities(className: string): string {
  if (!className.includes("size-")) return className;

  return className
    .split(/\s+/)
    .flatMap((token) => {
      if (!token) return [];
      const match = token.match(/^(.*:)?size-(\[[^\]]+\]|.+)$/);
      if (!match) return [token];
      const prefix = match[1] ?? "";
      const size = match[2];
      return [`${prefix}h-${size}`, `${prefix}w-${size}`];
    })
    .join(" ");
}

export function cn(...inputs: ClassValue[]) {
  return expandSizeUtilities(twMerge(clsx(inputs)));
}
