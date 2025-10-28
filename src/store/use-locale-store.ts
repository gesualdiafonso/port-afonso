import { create } from 'zustand'

import { persist } from 'zustand/middleware'

interface LocaleStore{
    locale: string,
    setLocale: (locale: string) =>  void
}

export const useLocaleStore = create<LocaleStore>()(
    persist(
        (set) => ({
            locale: 'en',
            setLocale: (locale: string) => set({ locale })
        }),
        {
            name: 'locale-storage'
        }
    )
)