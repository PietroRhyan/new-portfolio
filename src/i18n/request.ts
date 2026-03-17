import { cookies } from 'next/headers'
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const defaultLanguage = 'pt'

  const store = await cookies()
  const locale = store.get('locale')?.value || defaultLanguage

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});