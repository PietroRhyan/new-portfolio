import Link from "next/link";
import { useTranslations } from "next-intl";

interface SectionType {
  name: string;
  link: string;
}

export function Navbar() {
  const t = useTranslations("home.navbar");

  const sections: SectionType[] = [
    { name: t("intro"), link: "#intro" },
    { name: t("experiences"), link: "#experiences" },
    { name: t("about"), link: "#aboutme" },
    { name: t("ambitions"), link: "#ambitions" },
  ];

  return (
    <header className="w-full py-6 border-b border-b-dark-gray">
      <nav className="max-w-216 mx-auto">
        <ul className="flex items-center justify-center gap-6 sm:gap-9 list-none">
          {sections.map((section) => (
            <Link key={section.name} href={section.link}>
              <li className="font-outfit text-sm text-gray/50 transition-colors duration-200 hover:text-gray">{section.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
