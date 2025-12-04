import React, { useState } from "react"
import ProjectDetails from "../ProjectDetails";


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
    const [isHidden, setIsHidden] = useState(false);

    return(
        <>
            <div 
                className="flex-wrap items-center justify-between py-10 px-10 space-y-14 sm:flex sm:space-y-0 bg-black"
                onMouseEnter={() => setPreview(image)}
                onMouseLeave={() => setPreview(null)}
            >
                <div>
                    <p className="text-2xl">{title}</p>
                    <div className="flex gap-5 mt-2 text-sand">
                        {tech}
                    </div>
                </div>
                <button
                    onClick={() => setIsHidden(true)}
                    className="flex items-center gap-1 cursor-pointer hover-animation"
                >
                    Ver mas

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