'use client'
import Container from "@/components/ui/container"
import { useTranslations   } from "next-intl"
import { WelcomeType } from "@/types/i18n/Welcome"
import ParallaxBacground from "@/components/ui/ParallaxBackground"
import { SceneWrapper } from "@/components/SceneWrapper"

export default function Hero(){
    const t = useTranslations<'welcome', WelcomeType>('page.welcome')
    return(
        <section className="h-screen">
            <SceneWrapper />
            <ParallaxBacground />
            <div className="absolute top-0 right-0 flex justify-center items-center flex-col">
                <h1>{t('title')}</h1>
                <p>{t('subtitle')}</p>
            </div>
        </section>
    )
}