import { contentfulClient } from "../lib/contentful";
import type { AmbitionsSkeleton } from "../types/contentful";
import type { Locale } from "./types";

export async function getAllAmbitions(locale: Locale = 'pt-BR') {
  const ambitions = await contentfulClient.getEntries<AmbitionsSkeleton>({
    content_type: "ambitions",
    locale,
    order: ["-sys.createdAt"],
  });

  return ambitions.items;
}
