import type { AwardsSkeleton } from "../types/contentful";
import { contentfulClient } from "./contentful";
import type { Locale } from "./types";

export async function getAllAwards(locale: Locale = "pt-BR") {
  const response = await contentfulClient.getEntries<AwardsSkeleton>({
    content_type: "awards",
    locale,
    order: ["-sys.createdAt"],
  });

  return response.items;
}
