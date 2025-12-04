import { motion, useScroll, useSpring, useTransform } from "motion/react"
import Squares from "../GridBackground";

export default function ParallaxBacground() {
    const { scrollYProgress } = useScroll();
    const x = useSpring(scrollYProgress, { damping: 50 });
    const backgroundY = useTransform(x, [0, 0.5], ["0%", "80%"]);
    const sonY = useTransform(x, [0, 0.5], ["90%", "0%"]);
    const montainGridY = useTransform(x, [0, 0.5], ["0%", "80%"]);

    return(
        <section className="absolute inset-0 bg-black/40">
            <div className="relative w-full h-screen overflow-y-hidden">
                <motion.div className="absolute inset-0 w-full h-screen -z-20"
                    style={{
                        backgroundImage: "url(/assets/images/parallax/ativo1.png",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: backgroundY
                    }}
                />
                <Squares 
                    speed={0.5}
                    squareSize={40}
                    direction="up"
                    borderColor="rgba(22, 19, 240, 0.2)"
                    hoverFillColor="rgba(149, 0, 255, 0.1)"
                />
                <motion.div className="absolute inset-0 z-10 w-96 h-96 opacity-70"
                        style={{
                            backgroundImage: "url(/assets/images/parallax/ativo2.png",
                            backgroundPosition: "bottom",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            y: sonY
                        }}
                    />
                <motion.div className="absolute w-full h-full inset-0 z-30 opacity-85" 
                    style={{
                        backgroundImage: "url(/assets/images/parallax/ativo3.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        y: montainGridY
                    }}
                />

            </div>
        </section>
    )
}