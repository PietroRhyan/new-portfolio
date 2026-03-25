import { useTranslations } from "next-intl";
import LocaleSwitcher from "../ui/locale-switcher";

export function Footer() {
  const t = useTranslations('home.footer')

  const socials = [
    { href: "https://github.com/PietroRhyan", label: 'Github' },
    { href: "https://linkedin.com/in/pietrorhyan/", label: 'LinkedIn' },
    { href: "https://x.com/pietrorhyan2", label: 'X (Twitter)' },
  ]

  return (
    <footer className="w-full border-t border-t-dark-gray " >
      <div className="max-w-216 mx-auto pb-7 flex flex-col gap-20" >
        <div className="flex items-end justify-start overflow-hidden flex-wrap" >
          <h1 className="font-outfit text-[96px] font-bold bg-clip-text text-transparent bg-linear-to-b from-dark-gray/50 to-gray/50 uppercase leading-[72px] -mt-1.5 -ml-1.5">Pietro Rhyan</h1>
          <div className="flex flex-col gap-0 leading-3 text-xs text-gray/50 -ml-1" >
            <span className="font-light">{t('thanks')}</span>
            <span className="font-medium">{t('tooSee')}</span>
            <span className="font-bold">{t('myPortfolio')}</span>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-11.5" >
          <LocaleSwitcher />
          <div className="w-full flex items-center justify-center sm:justify-start gap-11.5" >
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" className="text-xs font-semibold text-foreground/80 transition-colors duration-200 hover:text-foreground" >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}