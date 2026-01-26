"use client";

import { useRef, useEffect, useState } from 'react';

export default function Process() {
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

    const steps = [
        {
            icon: (
                <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            step: "01",
            title: "Consulta Inicial",
            description: "Conversamos sobre tu proyecto, objetivos y visión. Entendemos tu negocio y tus necesidades específicas para crear la mejor estrategia digital.",
            highlight: "Gratis y sin compromiso"
        },
        {
            icon: (
                <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            step: "02",
            title: "Diseño Estratégico",
            description: "Creo un diseño visual único que represente tu marca. Enfocado en conversion, experiencia de usuario y optimizado para todos los dispositivos.",
            highlight: "Revisiones incluidas"
        },
        {
            icon: (
                <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            step: "03",
            title: "Desarrollo",
            description: "Codifico tu sitio con las últimas tecnologías. Código limpio, rápido, seguro y optimizado para motores de búsqueda para que tus clientes te encuentren.",
            highlight: "Tecnología de vanguardia"
        },
        {
            icon: (
                <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            step: "04",
            title: "Lanzamiento y Soporte",
            description: "Publico tu sitio al mundo y te acompaño en cada paso. Capacitación incluida y soporte continuo para que aproveches al máximo tu nueva web.",
            highlight: "Soporte post-lanzamiento"
        },
    ];

    return (
        <section
            ref={ref}
            className="min-h-screen bg-gray-950 py-24 px-6 relative overflow-hidden"
            id="proceso"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500/5 rounded-full blur-3xl" />

            <div
                className={`max-w-7xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="text-center mb-16">
                    <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase font-medium">
                        Proceso
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 max-w-3xl mx-auto">
                        Cómo trabajamos juntos
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mt-6 rounded-full" />
                    <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                        Un proceso claro y transparente de 4 pasos para que tu proyecto sea un éxito garantizado
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connector line for desktop */}
                    <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0" />

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="relative text-center group">
                                <div className="relative inline-flex mb-6">
                                    <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 relative z-10">
                                        {step.icon}
                                    </div>
                                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-gray-900 text-sm font-bold flex items-center justify-center shadow-lg shadow-cyan-500/50 z-20">
                                        {step.step}
                                    </span>
                                </div>

                                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-cyan-500/10">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {step.description}
                                    </p>
                                    <div className="inline-block px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/30">
                                        <span className="text-cyan-400 text-xs font-medium">
                                            {step.highlight}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}