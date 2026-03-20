import { useTranslations } from "next-intl";
import { Intro } from "@/components/intro";
import { Section } from "@/components/ui/section";

export default function Home() {
  const t = useTranslations("home.navbar");

  return (
    <main className="relative h-[calc(100dvh-69px)] max-w-216 mx-auto border-x border-dashed border-x-dark-gray pt-6">
      <Intro />

      <Section
        id="experience"
        title={t("experiences")}
        description="Experiência profissional, projetos e outros..."
      >
        Oi porra
      </Section>
    </main>
  );
}
