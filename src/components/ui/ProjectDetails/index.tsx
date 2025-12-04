import { motion } from "motion/react"
import Image from "next/image"

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
                        {list?.map((item, i) => (
                            <li className="text-center" key={i}>{item}</li>
                        ))}
                    </ul>
                    <ul className="mt-4 flex gap-5">
                        {tech?.map((techs, tec) => (
                            <li key={tec}>{techs}</li>
                        ))}
                    </ul>
                    <a className="text-end" href={link}>View Project</a>
                </div>
            </motion.div>
        </div>
    )
}