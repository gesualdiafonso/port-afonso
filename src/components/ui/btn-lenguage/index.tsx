'use-client'

import { useState } from "react"
import { useLocaleStore } from "@/store/use-locale-store"
import { RiTranslate2 } from "react-icons/ri"

const languageMap: Record<string, string> = {
    'en': "English",
    'pt': "Português",
    'pt-br': "Português",
    'es': "Español"
}

export default function BtnLanguge(){
    const { locale, setLocale} = useLocaleStore();
    const [open, setOpen]  = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    }

    const handleLanguageChange = (lang: string) => {
        setLocale(lang);
        setOpen(false);
    };

    return(
        <div>
            <button
                onClick={toggleDropdown}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 flex items-center justify-between gap-2 w-full shadow-lg hover:shadow-lg active:scale-95"
            >
                <RiTranslate2 size={24}>
                    <span>{languageMap[locale]}</span>
                </RiTranslate2>
            </button>

            {open && (
                <div className="absolute mt-2 w-full bg-white text-black rounded shadow-lg z-10">
                    <button
                        onClick={() => handleLanguageChange('en')}
                        className="w-full text.left px-4 py-2 hover:bg-gray-100"
                    >
                        English
                    </button>
                    <button
                        onClick={() => handleLanguageChange('es')}
                        className="w-full text.left px-4 py-2 hover:bg-gray-100"
                    >
                        Español
                    </button>
                    <button
                        onClick={() => handleLanguageChange('pt-br')}
                        className="w-full text.left px-4 py-2 hover:bg-gray-100"
                    >
                        Protuguês
                    </button>
                </div>
            )
            }
        </div>
    )
}