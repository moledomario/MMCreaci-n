"use client";

import { useRef, useEffect, useState } from 'react';

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
            className="min-h-screen py-24 px-6 relative overflow-hidden colorblack border-b border-white/50 border-t-2 border-[#3b82f6] "
            id="quienes-somos"
        >
            <div
                className={`max-w-7xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="text-center mb-16">
                    <span className="colorblue text-sm tracking-[0.3em] uppercase font-medium">
                        Conócenos
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
                        Quiénes Somos
                    </h2>
                    <div className="w-24 h-1 bg-[#3b82f6] mx-auto mt-6 rounded-full" />
                </div>

                <div className="items-center max-w-[75%] mx-auto">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 colorblue"
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
                                    <div className="text-2xl md:text-3xl font-bold colorblue">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </section >
    );
}