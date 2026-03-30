import type { PostsSkeleton, ProjectsSkeleton } from "../types/contentful";
import { contentfulClient } from "./contentful";
import type { Locale } from "./types";

export async function getAllProjects(locale: Locale = "pt-BR") {
  const response = await contentfulClient.getEntries<ProjectsSkeleton>({
    content_type: "projects",
    locale,
    order: ["-sys.createdAt"],
  });

  return response.items;
}

export async function getProjectBySlug(slug: string, locale: Locale = "pt-BR") {
  const response = await contentfulClient.getEntries<PostsSkeleton>({
    content_type: "posts",
    "fields.slug": slug,
    locale,
    limit: 1,
  });

  return response.items[0] ?? null;
}