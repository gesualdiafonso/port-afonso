'use client'
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About"
import BackgroundImg from "@/components/ui/BackGroundImg";
import NavBar from "@/components/ui/navbar";
import Projects from "@/components/Sections/Projects";
import Experience from "@/components/Sections/Experience";
import Testimonial from "@/components/Sections/Testimonial";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Footer";

export default function Home(){
  return(
    <>
    <Hero/>
    <BackgroundImg>
        <About />
        <Projects />
        <Experience/>
        <Testimonial />
        <Contact />
    </BackgroundImg>
    <NavBar />
    <Footer/>
    </>
  )
}