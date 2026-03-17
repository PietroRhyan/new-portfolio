'use server'

import { cookies } from 'next/headers'
import { languages } from '@/i18n/utils'

export async function setLocaleCookie(locale: string) {
  if (!languages.includes(locale)) return

  const store = await cookies()
  store.set('locale', locale)
}
