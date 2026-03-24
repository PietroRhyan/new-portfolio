import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AboutMe() {
  const t = useTranslations("home.about");

  const tabs = [
    { value: "aboutme", label: t("tabs.aboutMe") },
    { value: "skills", label: t("tabs.skills") },
  ];

  const paragraphs = [
    t("aboutmeContent.paragraph1"),
    t("aboutmeContent.paragraph2"),
    t("aboutmeContent.paragraph3"),
    t("aboutmeContent.paragraph4"),
  ];

  const skillsContent = [
    { skill: t("skillsContent.languages.skill"), content: t("skillsContent.languages.content") },
    { skill: t("skillsContent.databases.skill"), content: t("skillsContent.databases.content") },
    { skill: t("skillsContent.devops.skill"), content: t("skillsContent.devops.content") },
    { skill: t("skillsContent.architecture.skill"), content: t("skillsContent.architecture.content") },
    { skill: t("skillsContent.agile.skill"), content: t("skillsContent.agile.content") },
  ];

  return (
    <div className="w-auto flex flex-col items-center gap-6">
      <Tabs defaultValue={tabs[0].value} className="w-full flex items-center">
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="aboutme">
          <div className="max-w-[454px] min-h-[570px] w-full flex flex-col gap-4 mx-auto">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-sm text-foreground/80">
                {paragraph}
              </p>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="skills">
          <div className="max-w-[454px] min-h-[570px] w-full mx-auto">
            <ul className="w-full flex flex-col gap-4">
              {skillsContent.map((item) => (
                <li key={item.skill} className="text-sm text-foreground/80">
                  <strong className="text-foreground font-semibold">{item.skill}</strong>: {item.content}
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
