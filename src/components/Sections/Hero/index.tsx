'use client'
// import { WelcomeType } from "@/types/i18n/Welcome"
import ParallaxBacground from "@/components/ui/ParallaxBackground"
import { SceneWrapper } from "@/components/SceneWrapper"
import HeroText from "@/components/ui/HeroText"
import { useMediaQuery } from "react-responsive"


export default function Hero(){
    const isMobile = useMediaQuery({ maxWidth: 853 })
    return(
        <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space" id="home">
            <SceneWrapper isMobile={isMobile} className="absolute inset-0 w-full h-full" />
            <ParallaxBacground />
            <div className={`absolute z-50 p-4 transition-all duration-500
                ${isMobile 
                    ? 'top-20 left-0 w-full text-center' // Mobile: Centralizado no topo
                    : 'top-1/2 left-[10%] transform -translate-y-1/2 w-[55%] max-w-lg text-left' // Desktop: Esquerda, no meio
                }`}
            >
                <HeroText />
            </div>
        </section>
    )
}