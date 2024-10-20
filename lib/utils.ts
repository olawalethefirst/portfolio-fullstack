import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function downloadURI(uri: string, name?: string) {
  var link = document.createElement("a");
  link.download = name || "download";
  link.target = "_blank";
  link.href = uri;
  link.click();
  link.remove();
};