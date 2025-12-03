import { useRef } from "react";
import Container from "@/components/ui/container"
import { useTranslations   } from "next-intl"
import { AboutType } from "@/types/i18n/AboutType"
import CardEffects from "@/components/ui/CardEffect";
import { Frameworks } from "@/components/ui/Frameworks";
import CardStack from "@/components/ui/CardStack";
import CopyEmailButton from "@/components/ui/CopyEmailButton";



export default function Welcome(){
    const tCMail = useTranslations('common.emailContat');
    const tCCV =  useTranslations('common.cv');
    const tA = useTranslations<'about', AboutType>('page.about');
    const tE = useTranslations('page.expertise');
    const tS = useTranslations('page.skills');

    const grid2container = useRef();
    return(
        <section className="">
            <Container>
                <h1>{tA('title')}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto w-full">
                    <CardEffects containerClassName="col-span-1 h-full  min-h-[300px]">
                        <div className="w-full px-5">
                                <p className="">
                                    {tA('subtitle')}
                                </p>
                                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                    {tA('paragraph1')}
                                </p>
                                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                    {tA('paragraph2')}
                                </p>
                            </div>
                            {/* <img
                            src="/linear.webp"
                            width={500}
                            height={500}
                            alt="linear demo image"
                            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                            /> */}
                        <div/>
                    </CardEffects>
                    <div className="flex flex-col gap-3 ">
                        <CardEffects containerClassName="col-span-1 h-auto">
                            <div className="w-full h-auto px-5" ref={grid2container}>
                               <h2 className="flex items-center justify-center text-4xl text-white">{tE('title')}</h2>
                                {tE.raw('highlights').map((item: string, index: number) => (
                                    <CardStack
                                        key={index}
                                        style={{
                                            rotate: `${Math.random() * 20 - 10}deg`,
                                            top: `${50 + index * 20}%`,
                                            left: `${20 + index * 3}%`,
                                        }}
                                        text={item}
                                        containerRef={grid2container}
                                        />
                                ))}
                            </div>
                        <div/>
                        </CardEffects>
                        <CardEffects containerClassName="col-span-1 min-h-[300px]">
                            <div className="grid grid-cols-2 gap-10 px-10">
                                <div className="w-full">
                                    <h2>{tS('title')}</h2>
                                    <p>{tS('paragraph')}</p>
                                </div>
                                <div className="w-full pl-80">
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
                            <h2 className="text-3xl font-bold">{tCCV('title')}</h2>
                            <CopyEmailButton />
                        </div>
                    </CardEffects>
                </div>
            </Container>
        </section>
    )
}