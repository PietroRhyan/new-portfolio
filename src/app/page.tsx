import { useTranslations } from "next-intl";
import { AboutMe } from "@/components/about-me";
import { AboutMePhotos } from "@/components/about-me-photos";
import { Intro } from "@/components/intro";
import { Section } from "@/components/ui/section";
import { Experiences } from "@/components/experiences";

export default function Home() {
  const t = useTranslations("home.navbar");

  return (
    <main className="relative max-w-216 mx-auto border-x border-dashed border-x-dark-gray pt-6">
      <Intro />

      <Section
        id="experience"
        title={t("experiences")}
        description={t('descExperiences')}
      >
        <Experiences />
      </Section>

      <Section
        id="aboutme"
        title={t("about")}
        description={t('descAbout')}
      >
        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8">
          <AboutMePhotos />
          <AboutMe />
        </div>
      </Section>
    </main>
  );
}
