import { readdirSync } from "fs";
import { join } from "path";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp"]);
const VIDEO_EXT = new Set([".mov", ".mp4", ".webm"]);

export type GalleryItem = {
  src: string;
  type: "image" | "video";
  alt: string;
};

/** Returns all image and video files from public/newstuff for the Our Work gallery. */
export function getGalleryItems(): GalleryItem[] {
  let names: string[];
  try {
    names = readdirSync(join(process.cwd(), "public", "newstuff"));
  } catch {
    return [];
  }
  const items: GalleryItem[] = [];
  for (const name of names) {
    const ext = name.slice(name.lastIndexOf(".")).toLowerCase();
    const href = `/newstuff/${name}`;
    if (IMAGE_EXT.has(ext)) {
      items.push({ src: href, type: "image", alt: name.replace(/\.[^.]+$/, "") });
    } else if (VIDEO_EXT.has(ext)) {
      items.push({ src: href, type: "video", alt: name.replace(/\.[^.]+$/, "") });
    }
  }
  return items.sort((a, b) => a.src.localeCompare(b.src));
}
