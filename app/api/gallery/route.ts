import { NextResponse } from "next/server";
import { getGalleryItems } from "@/lib/gallery";

/** Cache gallery manifest at the edge; list changes rarely. Lowers origin work vs fully dynamic. */
export const revalidate = 3600;

export async function GET() {
  try {
    const items = getGalleryItems();
    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ items: [] }, { status: 200 });
  }
}
