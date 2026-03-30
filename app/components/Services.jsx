"use client";

import { useRef, useEffect, useState } from 'react';
import Link from "next/link";

export default function Services() {
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



    const services = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Landing Pages profesionales',
            description: 'Ideales para captar clientes rápidamente. Diseño claro, llamado a acción y enfoque en ventas.',
            link: '/pages/servicios/landing-page'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            title: 'Sitios web completos',
            description: 'Para negocios que buscan presencia sólida con varias secciones (Inicio, Servicios, Contacto, etc.)',

            link: '/pages/servicios/sitios-web'

        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            title: 'Rediseño web',
            description: 'Actualizo páginas antiguas para que luzcan modernas, rápidas y preparadas para competir.',
            link: '/pages/servicios/optimizacion-web'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Aplicaciones móviles',
            description: 'Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android con la mejor experiencia de usuario.',
            link: '/pages/servicios/app-movil'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            title: 'Automatización e IA para negocios',
            description: 'Implementamos soluciones con inteligencia artificial y automatización para optimizar la atención al cliente, ahorrar tiempo y mejorar los procesos de tu negocio.',
            link: '/pages/servicios/automatizacion-ia'
        }
    ];

    return (
        <section
            ref={ref}
            className="min-h-screen bg-gray-950 py-24 px-6 relative overflow-hidden"
            id="servicios"
        >
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />

            <div
                className={`max-w-7xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="text-center mb-16">
                    <span className="text-3xl colorblue tracking-[0.3em] uppercase">
                        Servicios
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 max-w-4xl mx-auto">
                        Lo que puedo hacer por tu negocio
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-[#050a30] rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>

                                <Link href={service.link || "#"} className="mt-6 flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="text-sm font-medium">Conocer más</span>
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>

                            <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="px-8 py-4 bg-[#ffff] text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105">
                        <a
                            href="#contacto"
                        >
                            Consultar otros servicios
                        </a>

                    </button>
                </div>
            </div>
        </section>
    );
}