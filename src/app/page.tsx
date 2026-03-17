import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/locale-switcher";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <LocaleSwitcher />
    </div>
  );
}
