import React, { useState } from "react"
import ProjectDetails from "../ProjectDetails";
import { getTechIcon } from "@/lib/utils/getTechIcons";
import { useTranslations } from "next-intl";

interface BtnProjectViewProps {
  title: string;
  image: string;
  description: string;
  list: string[];
  tech: string[];
  link: string;
  setPreview: (image: string | null) => void;
}

export default function BtnProjectView({ title, image, description, list, tech, link, setPreview }: BtnProjectViewProps){
    const tc = useTranslations('common.btnsAll')
    const [isHidden, setIsHidden] = useState(false);

    const techIcons = (tech ?? []).map(techName => ({
        name: techName,
        iconData: getTechIcon(techName)
    }));
    return(
        <>
            <div 
                className="flex-wrap items-center justify-between py-10 px-10 space-y-14 sm:flex sm:space-y-0 bg-black"
                onMouseEnter={() => setPreview(image)}
                onMouseLeave={() => setPreview(null)}
            >
                <div>
                    <p className="text-2xl">{title}</p>
                    <div className="flex gap-2 md:gap-5 mt-2 text-cyan-600 w-full">
                        {(techIcons ?? []).map((item, index) => {
                            const IconComponent = item.iconData?.icon;
                            return IconComponent ? (
                                <IconComponent
                                    key={index}
                                    size={24}
                                    style={{ color: item.iconData.color }}
                                    title={item.name}    
                                />
                            ) : (
                                <span key={index}>{item.name}</span>
                            );
                        })}
                    </div>
                </div>
                <button
                    onClick={() => setIsHidden(true)}
                    className="flex items-center gap-1 cursor-pointer hover-animation"
                >
                    {tc('view')}

                </button>
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
            {isHidden && (
                <ProjectDetails
                    title={title}
                    image={image}
                    description={description}
                    list={list}
                    tech={tech}
                    link={link}
                    closeModal={() => setIsHidden(false)}
                />
            )}
        </>
    )
}