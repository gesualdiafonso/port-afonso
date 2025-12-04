'use client'
import { useTranslations   } from "next-intl"
// import { WelcomeType } from "@/types/i18n/Welcome"
import ParallaxBacground from "@/components/ui/ParallaxBackground"
import { SceneWrapper } from "@/components/SceneWrapper"
import HeroText from "@/components/ui/HeroText"

export default function Hero(){
    const t = useTranslations('page.welcome')
    return(
        <section className="h-screen" id="home">
            <SceneWrapper />
            <ParallaxBacground />
            <div className="absolute w-[55%] top-0 left-0 flex justify-center items-center flex-col z-50">
                <HeroText />
            </div>
        </section>
    )
}