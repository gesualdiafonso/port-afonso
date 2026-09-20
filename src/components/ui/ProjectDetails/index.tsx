import { motion } from "motion/react"
import Image from "next/image"
import { getTechIcon } from "@/lib/utils/getTechIcons";
import { useTranslations } from "next-intl";
import ProjectLinkButton from "../ProjectLinkButton";
interface ProjectDetailsProps {
    title: string;
    image: string;
    description: string;
    list: string[];
    tech: string[];
    link: string;
    closeModal: () => void;
}

export default function ProjectDetails ({ title, image, description, list, tech, link, closeModal }: ProjectDetailsProps){
    const tc = useTranslations('common.btnsAll')
    const techIcons = (tech ?? []).map(techName => ({
        name: techName,
        iconData: getTechIcon(techName)
    }));    
    
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm p-4">
    
        <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gray-900 border-white/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            {/* CLOSE BUTTON */}
            <button
                onClick={closeModal}
                className="absolute top-3 right-3 z-20 p-2 rounded-md bg-midnight hover:bg-gray-500"
            >
                X
            </button>

            {/* IMAGE */}
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] relative">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-t-2xl"
                />
            </div>

            {/* CONTENT */}
            <div className="px-4 sm:px-6 md:px-10 py-5">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black">
                    {title}
                </h3>

                <p className="mt-2 text-sm sm:text-base">
                    {description}
                </p>

                {/* TECH LIST */}
                <ul className="mt-4 flex flex-wrap gap-4 justify-center">
                    {(techIcons ?? []).map((item, index) => {
                        const IconComponent = item.iconData?.icon;

                        return (
                            <li key={index} className="flex flex-col items-center text-xs">
                                {IconComponent ? (
                                    <>
                                        <IconComponent 
                                            size={24}
                                            style={{ color: item.iconData.color }} 
                                            title={item.name}
                                        />
                                        <span className="mt-1">{item.name}</span>
                                    </>
                                ) : (
                                    <span>{item.name}</span>
                                )}
                            </li>
                        )
                    })}
                </ul>

                {/* BUTTON */}
                <ProjectLinkButton link={link} label={tc('project')} />
                {/* <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full sm:w-auto group relative inline-flex justify-center items-center cursor-pointer overflow-hidden rounded-full border border-gray-200 bg-white px-5 py-2 text-center font-medium text-gray-900 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-white"
                >
                    <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-gray-900 transition-all duration-300 group-hover:scale-[100.8] dark:bg-white"></div>

                        <span className="transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                            {tc('project')}
                        </span>
                    </div>

                    <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-3 bg-gray-900 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-900">
                        <span className="font-medium">{tc('project')}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h14" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6" />
                        </svg>
                    </div>
                </a> */}
            </div>
        </motion.div>
    </div>
    )
}