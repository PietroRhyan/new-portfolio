import { NextIntlClientProvider } from 'next-intl'

export default async function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlClientProvider>
      {children}
    </NextIntlClientProvider>
  );
}