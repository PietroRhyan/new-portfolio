import { useTranslations } from "next-intl";
import { Card, type CardProps } from "../ui/card";

const mainExperiences: CardProps[] = [
  {
    title: "Ativos Capital",
    role: "Desenvolvedor Frontend",
    startDate: "Nov 2024",
    endDate: "Presente",
    description:
      "Atuei em duas empresas do grupo Ativos Capital, desenvolvi e dei manuntanção nas principais páginas da empresa EasyCDP, lideirei features core da plataforma, mantive um grande Design System e mais.",
    href: "https://www.rhyann.com/",
    img: "/images/me.png",
  },
];

const experiences: CardProps[] = [
  {
    title: "CMA Digital Music",
    role: "Freelancer",
    description:
      "Desenvolvimento de ponta-a-ponta (design ao deploy) de uma landing page para um cliente do setor musical",
    href: "https://www.cmadigitalmusic.com/",
  },
  {
    title: "Fros Venture",
    role: "Desenvolvedor Fullstack",
    description:
      "Side-hustle criado com amigos da faculdade para promover projetos open-source de devs indies",
    href: "https://www.fros.dev/",
  },
];

export function Experiences() {
  const t = useTranslations("commom");

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {mainExperiences.map((exp) => (
        <Card
          key={exp.title}
          title={exp.title}
          startDate={exp.startDate}
          endDate={exp.endDate}
          role={exp.role}
          description={exp.description}
          href={exp.href}
          img={exp.img}
        />
      ))}

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>

      <p className="text-xs text-gray/50">{t("soon")}</p>
    </div>
  );
}
