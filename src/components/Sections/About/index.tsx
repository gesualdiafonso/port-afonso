import { useRef } from "react";
import Container from "@/components/ui/container"
import { useTranslations   } from "next-intl"
// import { AboutType } from "@/types/i18n/AboutType"
import CardEffects from "@/components/ui/CardEffect";
import { Frameworks } from "@/components/ui/Frameworks";
import CopyEmailButton from "@/components/ui/CopyEmailButton";
import CardStack from "@/components/ui/CardStack";
import BtnHover from "@/components/ui/BtnHover";

export default function Welcome(){
    const tCMail = useTranslations('common.emailContat');
    const tCCV =  useTranslations('common.cv');
    const tA = useTranslations('page.about');
    const tE = useTranslations('page.expertise');
    const tS = useTranslations('page.skills');

    const grid2container = useRef<HTMLDivElement>(null);
    return(
        <section className="px-5 w-full" id="about">
            <Container>
                <h1 className="text-center font-bold text-3xl py-10">{tA('title')}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto w-full">
                    <CardEffects containerClassName="col-span-1 h-full w-full min-h-[300px]">
                        <div className="w-full px-5">
                                <p className="text-lg">
                                    {tA('subtitle')}
                                </p>
                                <p className="mt-4 text-lg text-neutral-200">
                                    {tA('paragraph1')}
                                </p>
                                <p className="mt-4 text-lg text-neutral-200">
                                    {tA('paragraph2')}
                                </p>
                            </div>
                        <div/>
                    </CardEffects>
                    <div className="flex flex-col gap-3 ">
                        <CardEffects containerClassName="col-span-1 h-auto">
                            <div className="w-full h-auto px-5" ref={grid2container}>
                               <h2 className="flex items-center justify-center text-3xl text-center font-black text-white">{tE('title')}</h2>
                                {tE.raw('highlights').map((item: string, index: number) => (
                                    <CardStack
                                        key={index}
                                        style={{
                                            rotate: `${Math.random() * 20 - 10}deg`,
                                            top: `${50 + index * 20}%`,
                                            left: `${20 + index * 3}%`,
                                        }}
                                        image=""
                                        text={item}
                                        containerRef={grid2container as any}
                                        />
                                ))}
                            </div>
                        <div/>
                        </CardEffects>
                        <CardEffects containerClassName="col-span-1 min-h-[300px]">
                            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
                                <div className="w-full mb-20">
                                    <h2 className="text-2xl font-black mb-5">{tS('title')}</h2>
                                    <p className="text-lg font-medium">{tS('paragraph')}</p>
                                </div>
                                <div className="w-full absolute -bottom-50 left-0 md:top-10 md:left-80 lg:top-15 lg:left-60">
                                    <Frameworks />
                                </div>
                            </div>
                        </CardEffects>  
                    </div>

                    <CardEffects containerClassName="col-span-1">
                        <div className="px-10 text-center flex flex-col justify-center items-center gap-5">
                            <h2 className="text-3xl font-bold">{tCMail('title')}</h2>
                            <CopyEmailButton />
                        </div>
                    </CardEffects>
                    <CardEffects containerClassName="col-span-1">
                        <div className="px-10 text-center flex flex-col justify-center items-center gap-5">
                            <h2 className="text-xl md:text-3xl font-bold">{tCCV('title')}</h2>
                            <div className="flex justify-center items-center gap-6">
                                <BtnHover 
                                action="download"
                                href="/assets/CV-Afonso-FullStack.pdf"
                                text="Baixar Cv"
                                bgColorClass="bg-gray-800"
                                hoverBgColorClass="hover:bg-gray-700"
                                />
                                <BtnHover
                                    action="linkedin"
                                    href=""
                                    text="LinkedIn"
                                    iconName="linkedin"
                                />
                            </div>

                        </div>
                    </CardEffects>
                </div>
            </Container>
        </section>
    )
}