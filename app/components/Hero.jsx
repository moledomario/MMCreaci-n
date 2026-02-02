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
    const iconsY = scrollProgress * -150;
    const iconsOpacity = 1 - scrollProgress * 1.5;
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
                    className="z-10 mb-8 flex gap-6 justify-center"
                    style={{
                        transform: `translateY(${iconsY}px)`,
                        opacity: iconsOpacity
                    }}
                >
                    <a
                        href="https://www.facebook.com/profile.php?id=61587257003860"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a
                        href="https://www.instagram.com/mm_programacion/"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.484 2h.465zM12.35 4.315h-.475c-2.614 0-2.92.011-3.953.058-1.033.047-1.594.225-1.968.371-.494.192-.851.422-1.226.797-.375.375-.605.732-.797 1.226-.146.374-.324.935-.371 1.968-.047 1.033-.058 1.339-.058 4.07v.358c0 2.593.01 2.916.058 3.95.047 1.033.225 1.595.371 1.97.192.493.422.85.797 1.225.375.375.732.605 1.226.797.374.146.935.324 1.968.371 1.033.047 1.358.058 4.093.058h.334c2.594 0 2.917-.01 3.952-.058 1.033-.047 1.594-.225 1.968-.371.494-.192.851-.422 1.226-.797.375-.375.605-.732.797-1.226.146-.374.324-.935.371-1.968.047-1.033.058-1.359.058-4.093V9.61c0-2.594-.01-2.917-.058-3.952-.047-1.033-.225-1.594-.371-1.968-.192-.494-.422-.851-.797-1.226-.375-.375-.732-.605-1.226-.797-.374-.146-.935-.324-1.968-.371-1.033-.047-1.339-.058-4.07-.058zM12 7.187a4.813 4.813 0 110 9.626 4.813 4.813 0 010-9.626zm0 2.315a2.498 2.498 0 100 4.996 2.498 2.498 0 000-4.996zm5.37-3.69a1.14 1.14 0 110 2.28 1.14 1.14 0 010-2.28z" clipRule="evenodd" />
                        </svg>
                    </a>
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