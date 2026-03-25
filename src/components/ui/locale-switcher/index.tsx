"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { setLocaleCookie } from "./actions";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isPT = locale === "pt";

  function handleSwitch() {
    startTransition(async () => {
      await setLocaleCookie(isPT ? "en" : "pt");
      router.refresh();
    });
  }

  return (
    <button
      type="button"
      onClick={handleSwitch}
      disabled={isPending}
      aria-label={`Switch to ${isPT ? "English" : "Portuguese"}`}
      className="relative flex items-center bg-dark-gray rounded-full p-1 cursor-pointer select-none transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div
        className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-background transition-transform duration-300 ease-in-out ${!isPT ? "translate-x-full" : ""}`}
      />
      <span
        className={`relative z-10 px-4 py-1 font-outfit text-xs font-semibold transition-colors duration-300 ${isPT ? "text-foreground" : "text-gray/50"}`}
      >
        PT
      </span>
      <span
        className={`relative z-10 px-4 py-1 font-outfit text-xs font-semibold transition-colors duration-300 ${!isPT ? "text-foreground" : "text-gray/50"}`}
      >
        EN
      </span>
    </button>
  );
}
