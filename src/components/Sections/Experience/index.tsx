import React from "react";
import { useTranslations } from "next-intl";
import { Timeline } from "@/components/ui/TimeLine";
import Squares from "@/components/ui/GridBackground";

export default function Experience() {
    const t = useTranslations("page.experience");

    // Número total de experiências
    const totalItems = 5;

    const data = Array.from({ length: totalItems }).map((_, index) => {
        const contentsLength = t.raw(`items.${index}.contents`).length;

        return {
            title: t(`items.${index}.title`),
            job: t(`items.${index}.job`),
            date: t(`items.${index}.date`),

            informacion: t.raw(`items.${index}.contents`), // array puro mantendo ordem

            content: (
                <ul className="space-y-2">
                    {Array.from({ length: contentsLength }).map((_, i) => (
                        <li key={i} className="text-gray-300 leading-relaxed">
                            {t(`items.${index}.contents.${i}`)}
                        </li>
                    ))}
                </ul>
            )
        };
    });

    return (
        <section className="relative w-full h-full max-h-[1980px] overflow-clip">
            <h3>{t('title')}</h3>
            <Timeline data={data} />
            <Squares 
                    speed={0.5}
                    squareSize={40}
                    direction="up"
                    borderColor="rgba(22, 19, 240, 0.2)"
                    hoverFillColor="rgba(149, 0, 255, 0.1)"
                />
        </section>
    );
}
