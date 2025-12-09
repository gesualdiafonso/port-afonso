"use-client"

import { NextIntlClientProvider } from "next-intl"
import { ReactNode, useEffect, useState } from "react"
import { useLocaleStore } from "@/store/use-locale-store"

interface Props {
    children: ReactNode;
}

/* export default function Provider({ children }: Props){
    const { locale } = useLocaleStore();
    
    const [message, setMessage] = useState(null);

    useEffect(() => {
        async function loadMessage(){
            try{
                const section = ['common', 'page'];
                const imports = await Promise.all(
                    section.map((section) => 
                    import (`@/locale/${locale}/${section}.json`).then((mod) => ({
                        [section]:mod.default
                    })))
                );
                const combinedMessages = Object.assign({}, ...imports);
                setMessage(combinedMessages);
            } catch( err ){
                console.error('Erro loading translations:', err)
            }
        }

        loadMessage()
    },[locale])

    if (!message) return null

    return (
        <NextIntlClientProvider locale={locale} messages={message}>
            {children}
        </NextIntlClientProvider>
    )
} */
export default function Provider({ children }: Props){
    const { locale } = useLocaleStore();
    
    const [message, setMessage] = useState(null);

    useEffect(() => {
        async function loadMessage(){
            try{
                const section = ['common', 'page'];
                
                const imports = await Promise.all(
                    section.map(async (section) => {
                        // ❌ ANTES: import (`@/locales/${locale}/${section}.json`)
                        // ✅ AGORA: Use fetch para carregar o asset estático da pasta /public
                        const response = await fetch(`/locales/${locale}/${section}.json`);
                        if (!response.ok) {
                            throw new Error(`Failed to fetch ${section}.json for locale ${locale}`);
                        }
                        const data = await response.json();
                        return {
                            [section]: data
                        };
                    })
                );
                
                const combinedMessages = Object.assign({}, ...imports);
                setMessage(combinedMessages);
            } catch( err ){
                console.error('Erro loading translations:', err)
            }
        }

        loadMessage()
    },[locale])

    if (!message) return null

    return (
        <NextIntlClientProvider locale={locale} messages={message}>
            {children}
        </NextIntlClientProvider>
    )
}