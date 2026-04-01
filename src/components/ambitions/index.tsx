import { useLocale, useTranslations } from "next-intl";
import { getAllAmbitions } from "@/lib/ambitions";
import { Checkbox } from "../ui/checkbox";
import { Field, FieldLabel } from "../ui/field";

export async function Ambitions() {
  const t = useTranslations("home.ambitions");
  const locale = await useLocale();

  const lang = locale === "pt" ? "pt-BR" : "en-US";

  const ambitions = await getAllAmbitions(lang);

  const personalAmb = ambitions.filter(
    (ambition) => ambition.fields.kind === "personal",
  );
  const professionalAmb = ambitions.filter(
    (ambition) => ambition.fields.kind === "career",
  );

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
            <Field key={ambition.fields.ambition} orientation="horizontal">
              <Checkbox
                checked={ambition.fields.isChecked}
                id={`personal-${i}`}
                name={`personal-${i}`}
              />
              <FieldLabel htmlFor={`personal-${i}`}>
                {ambition.fields.ambition}
              </FieldLabel>
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
            <Field key={ambition.fields.ambition} orientation="horizontal">
              <Checkbox
                checked={ambition.fields.isChecked}
                id={`professional-${i}`}
                name={`professional-${i}`}
              />
              <FieldLabel htmlFor={`professional-${i}`}>
                {ambition.fields.ambition}
              </FieldLabel>
            </Field>
          ))}
        </div>
      </div>
    </div>
  );
}
