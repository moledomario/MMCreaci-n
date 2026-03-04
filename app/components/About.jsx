"use client";

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function About() {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1, rootMargin: "-100px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <section
            ref={ref}
            className="min-h-screen bg-gray-900 py-24 px-6 relative overflow-hidden"
            id="quienes-somos"
        >
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />

            <div
                className={`max-w-7xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="text-center mb-16">
                    <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase font-medium">
                        Conócenos
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
                        Quiénes Somos
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-cyan-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">
                                MM Creación
                            </h3>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            En MM Creación nos especializamos en el diseño y desarrollo de sitios web modernos, funcionales y adaptados a las necesidades de cada negocio. Nuestro objetivo es ayudar a empresas que aún no tienen presencia online a posicionarse, destacarse y crecer en el entorno digital.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">

                            Tambien nos dedicamos a la automatizacion de procesos repetitivos, creamos sistemas personalizados y soluciones digitales
                            que impulsan la productividad y eficiencia de nuestros clientes.
                        </p>

                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700/50">
                            {[
                                { number: '3+', label: 'Años de experiencia' },
                                { number: '20+', label: 'Proyectos completados' },
                                { number: '12+', label: 'Clientes satisfechos' },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-cyan-400">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                            <div className="relative rounded-2xl overflow-hidden">
                                <div className="relative w-full h-[400px] md:h-[500px] group-hover:scale-105 transition-transform duration-700">
                                    <Image
                                        src="/about-image.png"
                                        alt="Código de desarrollo web"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

                                <div
                                    className={`absolute bottom-6 left-6 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700/50 transition-all duration-500 delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                                        }`}
                                >
                                    <span className="text-cyan-400 font-semibold">Innovación</span>
                                    <span className="text-gray-400"> - Tecnología - </span>
                                    <span className="text-cyan-300 font-semibold">Futuro</span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-cyan-500/30 rounded-2xl animate-spin-slow"
                            style={{ animationDuration: '20s' }} />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-cyan-400/30 rounded-full animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
}