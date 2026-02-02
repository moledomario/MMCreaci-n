"use client";

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function Projects() {
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

    const projects = [
        {
            title: 'Landing Page - Construcción',
            category: 'Landing Page',
            description: 'Diseño moderno y profesional para empresa constructora con enfoque en conversión y captación de clientes.',
            image: '/landing-page.png',

            link: 'https://empresa-de-construcci-n.vercel.app/'
        },
        {
            title: 'Sitio Web - Inmobiliaria',
            category: 'Sitio Web Completo',
            description: 'Plataforma completa para inmobiliaria con sistema de búsqueda de propiedades y filtros avanzados.',
            image: '/inmobiliaria.png',

            link: 'https://inmobiliara-seven.vercel.app/'
        },
        {
            title: 'E-commerce - Ropa',
            category: 'Tienda Online',
            description: 'Tienda online elegante para ropa con carrito de compras, pasarela de pago y gestión de inventario.',
            image: '/ropa-e.png',

            link: 'https://v0-e-commerce-website-alpha-orcin.vercel.app/'
        },
        {
            title: 'Pagina para guia turistico',
            category: 'Landing Page',
            description: 'Pagina para guia turistico, ofreciendo sus servicios de tours y actividades.',
            image: '/guia-turistico.png',

            link: 'https://v0-chalten-tour-landing.vercel.app/'
        }
    ];

    return (
        <section
            ref={ref}
            className="min-h-screen bg-gray-900 py-24 px-6 relative overflow-hidden"
            id="proyectos"
        >
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />

            <div
                className={`max-w-7xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="text-center mb-16">
                    <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase font-medium">
                        Portafolio
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
                        Proyectos Destacados
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mt-6 rounded-full" />
                    <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                        Algunos ejemplos de proyectos que he realizado
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-cyan-500/90 text-gray-900 text-xs font-semibold rounded-full">
                                        {project.category}
                                    </span>
                                </div>

                                <a
                                    href={project.link}
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <div className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                </a>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>


                                <a
                                    href={project.link}
                                    className="mt-6 flex items-center text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all duration-300"
                                >
                                    <span>Ver proyecto</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}