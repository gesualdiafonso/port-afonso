"use-client"

import { NextIntlClientProvider } from "next-intl"
import { ReactNode, useEffect, useState } from "react"
import { useLocaleStore } from "@/store/use-locale-store"

interface Props {
    children: ReactNode;
}

export default function Provider({ children }: Props){
    const { locale } = useLocaleStore();
    
    const [message, setMessage] = useState<any>(null);

    useEffect(() => {
        async function loadMessage(){
            try{
                const section = ['common'];
                const imports = await Promise.all(
                    section.map((section) => 
                    import (`@/locales/${locale}/${section}.json`).then((mod) => ({
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
}