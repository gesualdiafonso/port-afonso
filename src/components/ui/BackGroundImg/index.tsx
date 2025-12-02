import Background from "../../../../public/assets/images/background2.jpg"
import Image from "next/image"
import Squares from "../GridBackground"

export default function BackgroundImg( {children}: {children: React.ReactNode}){
    return(
        <section>
            <div className="w-[100vw] h-full bg-black absolute -z-10 ">
                <Squares 
                    speed={0.5}
                    squareSize={40}
                    direction="up"
                    borderColor="rgba(22, 19, 240, 0.2)"
                    hoverFillColor="rgba(149, 0, 255, 0.1)"
                />
                
            </div>
            <div >{children}</div>
        </section>    
    )
}