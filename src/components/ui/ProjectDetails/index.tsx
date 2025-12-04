import { motion } from "motion/react"
import Image from "next/image"
import { getTechIcon } from "@/lib/utils/getTechIcons";

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
    
    const techIcons = (tech ?? []).map(techName => ({
        name: techName,
        iconData: getTechIcon(techName)
    }));    
    
    return(
        <div className="fixed bg-gray-900/50 inset-0 z-50 felx items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
            <motion.div
                className="relative max-w-2xl border shadow-sm rounded-2xl bg-gray-900 from-midnight to-navy border-white/10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <button
                    onClick={closeModal}
                    className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
                >
                    X
                </button>
                <Image src={image} alt={title} width={800} height={600} className="w-full rounded-t-2xl" />
                <div className="px-10 py-5">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ul className="mt-4 flex gap-5 items-center justify-center">
                        
                        {(techIcons ?? []).map((item, index) => {
                            const IconComponent = item.iconData?.icon;

                            return (
                                <li key={index} className="flex flex-col items-center">
                                    {IconComponent ? (
                                        <>
                                            <IconComponent 
                                                size={32} // Ícone maior nos detalhes
                                                style={{ color: item.iconData.color }} 
                                                title={item.name}
                                            />
                                            {/* Opcional: Manter o nome abaixo do ícone */}
                                            <span className="text-xs mt-1">{item.name}</span> 
                                        </>
                                    ) : (
                                        // Renderiza o nome se o ícone não for encontrado
                                        <span>{item.name}</span> 
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                    
                    <a 
                        className="group relative w-full cursor-pointer overflow-hidden rounded-full border border-gray-200 bg-white px-5 py-2 text-center font-medium text-gray-900 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-white dark:hover:border-gray-700" 
                        href={link}
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="h-2 w-2 rounded-full bg-gray-900 transition-all duration-300 group-hover:scale-[100.8] dark:bg-white"
                            />
                            <span
                                className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0"
                            >
                            View Project
                            </span>
                            <div
                                 className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-3 bg-gray-900 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-900"
                            >
                                <div className="flex items-center gap-3 whitespace-nowrap">
                                    <span className="leading-none font-medium">View Project</span>
                                </div>
                            </div>
                        </div>


                    </a>
                </div>
            </motion.div>
        </div>
    )
}