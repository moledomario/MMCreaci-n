"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const logoY = scrollProgress * -400;
    const logoScale = 1 - scrollProgress * 0.4;
    const logoOpacity = 1 - scrollProgress * 1.25;
    const textY = scrollProgress * 100;
    const textOpacity = 1 - scrollProgress * 1.67;
    const glowScale = 1 + scrollProgress * 0.5;
    const glowOpacity = 0.3 - scrollProgress * 0.6;

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100vh] overflow-hidden"
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">

                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        transform: `scale(${glowScale})`,
                        opacity: glowOpacity
                    }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[120px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-teal-500/20 blur-[100px]" />
                </div>

                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(rgb(6, 182, 212) 1px, transparent 1px), linear-gradient(90deg, rgb(6, 182, 212) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />

                <div
                    className="z-10 mb-12"
                    style={{
                        transform: `translateY(${logoY}px) scale(${logoScale})`,
                        opacity: logoOpacity
                    }}
                >
                    <Image
                        src="/MMsolo.png"
                        alt="MM Creación Logo"
                        width={200}
                        height={200}
                        className="drop-shadow-2xl transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(6,182,212,0.6)] cursor-pointer"
                        priority
                    />
                </div>

                <div
                    className="z-10 text-center px-4"
                    style={{
                        transform: `translateY(${textY}px)`,
                        opacity: textOpacity
                    }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                        <span className="text-gray-100">Potencia tu empresa</span>
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                            con nosotros
                        </span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-md mx-auto">
                        Impulsa tu negocio con presencia web profesional.
                    </p>


                </div>


            </div>
        </section>
    );
}