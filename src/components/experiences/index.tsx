import { useTranslations } from "next-intl";
import { getAllProjects } from "@/lib/projects";
import { Card, type CardProps } from "../ui/card";

export async function Experiences() {
  const t = useTranslations("commom");
  const projects = await getAllProjects();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {projects.map((project) => (
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

      {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp) => (
          <Card
            key={exp.title}
            title={exp.title}
            role={exp.role}
            description={exp.description}
            href={exp.href}
            style="compact"
          />
        ))}
      </div> */}

      <p className="text-xs text-gray/50">{t("soon")}</p>
    </div>
  );
}
