'use client'
import { useTranslations   } from "next-intl"
// import { WelcomeType } from "@/types/i18n/Welcome"
import ParallaxBacground from "@/components/ui/ParallaxBackground"
import { SceneWrapper } from "@/components/SceneWrapper"

export default function Hero(){
    const t = useTranslations('page.welcome')
    return(
        <section className="h-screen" id="home">
            <SceneWrapper />
            <ParallaxBacground />
            <div className="absolute top-3/6 right-0 flex justify-center items-center flex-col">
                <h1>{t('title')}</h1>
                <p>{t('subtitle')}</p>
            </div>
        </section>
    )
}