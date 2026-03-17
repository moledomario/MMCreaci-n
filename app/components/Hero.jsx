"use client";


import Image from "next/image";

export default function Hero() {


    return (
        <section
            className="relative min-h-[100vh] overflow-hidden"
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
                <div className="z-10 text-center px-4 mt-24">
                    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-100">
                        Potencia tu empresa
                        <br />
                        con nosotros
                    </h1>
                    <p className="mt-6 text-lg text-cyan-400 max-w-md mx-auto animate-pulse">
                        Impulsa tu negocio con presencia web profesional.
                    </p>
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