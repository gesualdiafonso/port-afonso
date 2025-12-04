import { useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"
import { useMessages } from "next-intl"
import Container from "@/components/ui/container";
import BtnProjectView from "@/components/ui/BtnProjectView";

export default function Projects(){
    //const t = useTranslations<'projects', ProjectType>('page.projects')
    //const raw = t.raw();
    const messages = useMessages();
    const raw = messages.page.projects

    // Normalizo para un array
    const allProjects = [
        ...Object.values(raw.freelancers).map((p: any) => ({
            ...p,
            category: "freelancer"
        })),
        ...Object.values(raw.academyc.fullstack).map((p: any) =>({
            ...p,
            category: "fullstack"
        })),
        ...Object.values(raw.academyc.desktop).map((p: any) => ({
            ...p,
            category: "desktop"
        }))
    ];
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 10, stiffness: 50 });
    const springY = useSpring(y, { damping: 10, stiffness: 50 });
    const handleMouseMove = (e: React.MouseEvent) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    };

    const [preview, setPreview] = useState(null);
    const [filter, setFilter] = useState("all");

     const filteredProjects =
        filter === "all"
            ? allProjects
            : allProjects.filter(p => p.category === filter);

    return(
        <section className="h-full w-full bg-black" id="projects">
            <Container>
                <section 
                    onMouseMove={handleMouseMove}
                    className="relative c-space section-spacing bg-black w-full h-auto py-10"
                    >
                        <h2 className="text-3xl text-center md:text-left font-bold">{raw.title}</h2>
                        {/* Filtro */}
                        <div className="flex flex-col md:flex-row gap-4 mt-10">
                            {["all", "freelancer", "fullstack", "desktop"].map(type => (
                                <button
                                    key={type}
                                    onClick={() => setFilter(type)}
                                    className={`px-4 py-2 rounded-xl border
                                        ${filter === type
                                            ? "bg-white text-black"
                                            : "bg-transparent text-white border-white/20"}
                                        transition hover:bg-white hover:text-black`}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </button>
                            ))}
                        </div>
                        {/* Btn de project view */}
                        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 w-full" />
                        {filteredProjects.map((project, index) => (
                            <BtnProjectView
                                key={index}
                                {...project}
                                setPreview={setPreview}    
                            />
                        ))}
                        {/* View Project imagem */}
                        {preview && (
                            <motion.img
                                className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
                                src={preview}
                                style={{ x: springX, y: springY }}
                                />
                        )}
                </section>
            </Container>
        </section>
    )
}