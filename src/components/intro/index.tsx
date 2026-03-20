import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Avatar } from "../ui/avatar";
import { CTAButton } from "../ui/cta";
import { Social, type SocialProps } from "../ui/social";

interface ProjectType {
  name: string;
  href: string;
}

const lProjects: ProjectType[] = [
  { name: "Manorder", href: "/images/manorder.png" },
  { name: "NeedU", href: "/images/needu.png" },
  { name: "Recycle.it", href: "/images/recycleit.png" },
];

const rProjects: ProjectType[] = [
  { name: "Fros Venture", href: "/images/fros.png" },
  { name: "Portfolio", href: "/images/portfolio.png" },
  { name: "CMA", href: "/images/cma.png" },
];

const socials: SocialProps[] = [
  { href: "https://github.com/PietroRhyan", icon: <FaGithub size={20} /> },
  { href: "https://linkedin.com/in/pietrorhyan/", icon: <FaLinkedin size={20} /> },
  { href: "https://x.com/pietrorhyan2", icon: <FaXTwitter size={20} /> },
];

export function Intro() {
  const t = useTranslations("home.intro");

  return (
    <section
      id="intro"
      className="relative top-0 -left-px w-[calc(100%+2px)] bg-background p-9 border-x border-x-background space-y-8 mb-6"
    >
      <div className="relative w-full flex items-center justify-center gap-4">
        <div className="overflow-hidden h-[275px] w-[50%]">
          <div className="flex flex-col animate-scroll-up">
            {[...lProjects, ...lProjects].map((project, i) => (
              <div
                key={`${project.name}-${i}`}
                className="relative h-[215px] mb-4 shrink-0 rounded-xl overflow-hidden"
              >
                <Image
                  src={project.href}
                  alt={`${project.name} Project Image`}
                  fill
                  quality={80}
                  draggable={false}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden h-[275px] w-[50%]">
          <div className="flex flex-col animate-scroll-down">
            {[...rProjects, ...rProjects].map((project, i) => (
              <div
                key={`${project.name}-${i}`}
                className="relative h-[215px] -top-[calc(215px*5)] mb-4 shrink-0 rounded-xl overflow-hidden"
              >
                <Image
                  src={project.href}
                  alt={`${project.name} Project Image`}
                  fill
                  quality={80}
                  draggable={false}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          role="presentation"
          className="absolute z-10 w-full h-full top-0 left-0 bottom-0 bg-linear-to-b from-10% from-background via-background/70 to-background to-90% p-6"
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <h1 className="font-outfit text-5xl font-semibold max-w-[740px]">
              {t.rich("title", {
                role: (chunk) => (
                  <span className="font-playfair italic font-semibold">
                    {chunk}
                  </span>
                ),
                essence: (chunk) => (
                  <span className="font-playfair italic font-semibold">
                    {chunk}
                  </span>
                ),
              })}
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col gap-6" >
          <div className="flex items-center gap-4">
            <Avatar />

            {socials.map((social) => (
              <Social key={social.href} href={social.href} icon={social.icon} />
            ))}
          </div>

          <CTAButton label={t("contact")} />
        </div>

        <div className="max-w-[410px] space-y-4.5">
          <p className="text-xs text-foreground/80">{t("description")}</p>

          <p className="text-xs text-gray/50">
            {t.rich("living", {
              unknown: (chunk) => <span className="italic">{chunk}</span>,
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
