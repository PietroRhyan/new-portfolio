/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { useTranslations } from "next-intl";
import { Checkbox } from "../ui/checkbox";
import { Field, FieldLabel } from "../ui/field";

export function Ambitions() {
  const t = useTranslations("home.ambitions");

  const personalAmb = [
    { isChecked: false, label: t("personal.item0") },
    { isChecked: false, label: t("personal.item1") },
    { isChecked: false, label: t("personal.item2") },
    { isChecked: false, label: t("personal.item3") },
    { isChecked: true, label: t("personal.item4") },
    { isChecked: false, label: t("personal.item5") },
    { isChecked: false, label: t("personal.item6") },
  ];

  const professionalAmb = [
    { isChecked: true, label: t("professional.item0") },
    { isChecked: false, label: t("professional.item1") },
    { isChecked: true, label: t("professional.item2") },
    { isChecked: false, label: t("professional.item3") },
    { isChecked: false, label: t("professional.item4") },
    { isChecked: false, label: t("professional.item5") },
    { isChecked: false, label: t("professional.item6") },
  ];

  return (
    <div className="max-w-[384px] w-full mx-auto flex flex-col gap-14">
      <div className="w-full flex flex-col gap-6">
        <div className="relative w-full flex items-center">
          <div role="img" className="w-full h-px bg-foreground/80" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-background flex items-center justify-center py-2.5 w-[110px]">
            {t("personal.title")}
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          {personalAmb.map((ambition, i) => (
            <Field key={`personal-${i}`} orientation="horizontal">
              <Checkbox checked={ambition.isChecked} id={`personal-${i}`} name={`personal-${i}`} />
              <FieldLabel htmlFor={`personal-${i}`}>{ambition.label}</FieldLabel>
            </Field>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-6">
        <div className="relative w-full flex items-center">
          <div role="img" className="w-full h-px bg-foreground/80" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-background flex items-center justify-center py-2.5 w-[110px]">
            {t("professional.title")}
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          {professionalAmb.map((ambition, i) => (
            <Field key={`professional-${i}`} orientation="horizontal">
              <Checkbox checked={ambition.isChecked} id={`professional-${i}`} name={`professional-${i}`} />
              <FieldLabel htmlFor={`professional-${i}`}>{ambition.label}</FieldLabel>
            </Field>
          ))}
        </div>
      </div>
    </div>
  );
}
