'use client'
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About"
import BackgroundImg from "@/components/ui/BackGroundImg";
import Squares from "@/components/ui/GridBackground";
import NavBar from "@/components/ui/navbar";
import Projects from "@/components/Sections/Projects";
import Experience from "@/components/Sections/Experience";
import Testimonial from "@/components/Sections/Testimonial";
import Contact from "@/components/Sections/Contact";

export default function Home(){
  return(
    <>
    <Hero/>
    <Squares 
        speed={0.5}
        squareSize={40}
        direction="up"
        borderColor="rgba(22, 19, 240, 0.2)"
        hoverFillColor="rgba(149, 0, 255, 0.1)"
       />
    <BackgroundImg>
        <About />
        <Projects />
        <Experience/>
        <Testimonial />
        <Contact />
    </BackgroundImg>
    <NavBar />
    </>
  )
}