"use client";
import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Hero() {


    return (
        <section
            className="relative min-h-[100vh] overflow-hidden"
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden hero-background colorblack ">



                <div className="z-10 text-center px-4 mt-24">
                    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-100">
                        Potencia tu empresa
                        <br />
                        con nosotros
                    </h1>
                    <TextAnimate animation="blurInUp" by="character" duration={3} className="mt-6 text-lg text-[#3b82f6] max-w-md mx-auto ">
                        Impulsa tu negocio con presencia web profesional.
                    </TextAnimate>
                </div>

                <div className="z-10 mt-6">
                    <Image
                        src="/MMsolo.png"
                        alt="MM Creación Logo"
                        width={200}
                        height={200}
                        className="drop-shadow-2xl transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(6,182,212,0.6)] cursor-pointer"
                        priority

                    />
                </div>


            </div>
        </section>
    );
}