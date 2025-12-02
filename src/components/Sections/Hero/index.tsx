import Container from "@/components/ui/container"
import { useTranslations   } from "next-intl"
import { WelcomeType } from "@/types/i18n/Welcome"
import ParallaxBacground from "@/components/ui/ParallaxBackground"

export default function Hero(){
    const t = useTranslations<'welcome', WelcomeType>('page.welcome')
    return(
        <section className="h-screen">
            <Container>
                <div>
                    <h1>{t('title')}</h1>
                    <p>{t('subtitle')}</p>
                </div>
            </Container>
            <ParallaxBacground />
        </section>
    )
}