import { getLocale } from "next-intl/server";
import { getAllProjects } from "@/lib/projects";
import { Content } from "./content";

export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({
    slug: project.fields.slug,
  }));
}

export default async function Page({
  params,
}: PageProps<"/experiences/[slug]">) {
  const { slug } = await params;
  const locale = await getLocale();

  const lang = locale === "pt" ? "pt-BR" : "en-US";

  return <Content slug={slug} locale={lang} />;
}
