"use client"

import { useState } from "react"
import { useLocaleStore } from "@/store/use-locale-store"
import { RiTranslate2 } from "react-icons/ri"

const languageMap: Record<string, string> = {
  en: "English",
  "pt-br": "Português",
  es: "Español",
}

export default function BtnLanguage() {
  const { locale, setLocale } = useLocaleStore()
  const [open, setOpen] = useState(false)

  const handleChange = (lang: string) => {
    setLocale(lang)
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 active:scale-95 shadow-md"
      >
        <RiTranslate2 size={22} />
        <span className="text-sm hidden lg:inline">{languageMap[locale]}</span>
      </button>

      {open && (
        <div className="absolute bottom-16 mt-2 w-36 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg overflow-hidden z-10">
          {Object.entries(languageMap).map(([key, label]) => (
            <button
              key={key}
              onClick={() => handleChange(key)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-neutral-700 transition ${
                locale === key ? "font-semibold text-blue-600 dark:text-blue-400" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
