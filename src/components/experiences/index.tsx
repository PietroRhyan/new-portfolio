import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";
import { getAllAwards } from "@/lib/awards";
import { getAllProjects } from "@/lib/projects";
import { Card } from "../ui/card";
import { SmallCard } from "../ui/card/small-card";

export async function Experiences() {
  const t = useTranslations("commom");
  const locale = await getLocale();

  const lang = locale === "en" ? "en-US" : "pt-BR";

  const [projects, awards] = await Promise.all([
    getAllProjects(lang),
    getAllAwards(lang),
  ]);

  const mainExperiences = projects.filter(
    (project) => project.fields.style === "full",
  );
  const subExperiences = projects.filter(
    (project) => project.fields.style !== "full",
  );

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {mainExperiences.map((project) => (
        <Card
          key={project.fields.title}
          title={project.fields.title}
          startDate={project.fields.startDate}
          endDate={project.fields.endDate}
          role={project.fields.role}
          description={project.fields.description}
          href={project.fields.slug}
          img={project.fields.img}
        />
      ))}

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {subExperiences.map((project) => (
          <Card
            key={project.fields.title}
            title={project.fields.title}
            role={project.fields.role}
            description={project.fields.description}
            href={project.fields.slug}
            style="compact"
          />
        ))}
      </div>

      {awards.map((award) => (
        <SmallCard
          key={award.fields.title}
          title={award.fields.title}
          from={award.fields.from}
          endDate={award.fields.endDate}
        />
      ))}

      <p className="text-xs text-gray/50">{t("soon")}</p>
    </div>
  );
}
