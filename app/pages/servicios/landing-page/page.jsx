"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPageView() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const benefits = [
        'Conseguir más consultas',
        'Presentar un servicio específico',
        'Lanzar una promoción',
        'Validar un nuevo negocio',
        'Tener presencia online rápida y efectiva'
    ];

    const idealFor = [
        { icon: '🚀', text: 'Negocios que recién comienzan' },
        { icon: '🌐', text: 'Empresas sin página web' },
        { icon: '🎯', text: 'Servicios que quieren vender un producto puntual' },
        { icon: '👤', text: 'Profesionales independientes' },
        { icon: '📱', text: 'Campañas de publicidad en redes' }
    ];

    const includes = [
        { title: 'Diseño profesional y moderno', icon: '✨' },
        { title: 'Adaptada a celulares', icon: '📱' },
        { title: 'Optimizada para contacto', icon: '📞' },
        { title: 'Integración con WhatsApp', icon: '💬' },
        { title: 'Formulario de consultas', icon: '📝' },
        { title: 'Hosting y dominio (opcional)', icon: '🌍' },
        { title: 'Puesta online', icon: '🚀' }
    ];

    const process = [
        'Analizamos tu negocio',
        'Definimos objetivo de la landing',
        'Diseñamos la estructura',
        'Desarrollamos',
        'Publicamos',
        'Te entregamos lista para recibir clientes'
    ];

    const examples = [
        { title: 'Landing Construcción', image: '/landing-page.png', link: 'https://empresa-de-construcci-n.vercel.app/' },
        { title: 'Landing Guia Turistico', image: '/guia-turistico.png', link: 'https://v0-chalten-tour-landing.vercel.app/' },
    ];

    return (
        <div className="min-h-screen bg-gray-950">
            {/* Header con botón volver */}
            <div className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Volver al inicio
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl" />

                <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        ¿Qué es una <span className="text-cyan-400">Landing Page?</span>
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-8 rounded-full" />
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                        Una landing page es una página web diseñada con un único objetivo: lograr que el visitante realice una acción, como pedir un presupuesto, dejar sus datos o contactarte por WhatsApp.
                    </p>
                </div>
            </section>

            {/* Diferencias */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-white mb-6">A diferencia de una web tradicional, una landing:</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: '🚫', text: 'No distrae con menús innecesarios' },
                                { icon: '🎯', text: 'Va directo al mensaje' },
                                { icon: '⚡', text: 'Está optimizada para generar consultas' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                                    <span className="text-4xl">{item.icon}</span>
                                    <p className="text-gray-300 text-lg mt-2">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Para qué sirve */}
            <section className="py-16 px-6 bg-gray-900/30">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                        ¿Para qué sirve una landing page en tu negocio?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-12 rounded-full" />

                    <div className="grid md:grid-cols-2 gap-4 mb-12">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3 bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                                <svg className="w-6 h-6 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-300 text-lg">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border-l-4 border-cyan-500 rounded-xl p-8">
                        <p className="text-2xl md:text-3xl font-bold text-white">
                            Si tu negocio no tiene web, una landing es el mejor primer paso.
                        </p>
                    </div>
                </div>
            </section>

            {/* Para quién es ideal */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                        ¿Para quién es ideal?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-12 rounded-full" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {idealFor.map((item, index) => (
                            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1">
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <p className="text-gray-300 text-lg">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Qué incluye */}
            <section className="py-16 px-6 bg-gray-900/30">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                        ¿Qué incluye una landing creada por MM Creación?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-12 rounded-full" />

                    <div className="grid md:grid-cols-2 gap-6">
                        {includes.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                                <div className="text-4xl">{item.icon}</div>
                                <span className="text-gray-300 text-lg font-medium">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ejemplos de Landing Pages */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                        Ejemplos de Landing Pages
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-12 rounded-full" />

                    <div className="flex flex-wrap justify-center gap-8">
                        {examples.map((example, index) => (
                            <Link
                                href={example.link}
                                key={index}
                                target="_blank"
                                className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={example.image}
                                        alt={example.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        {example.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proceso */}
            <section className="py-16 px-6 bg-gray-900/30">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                        Proceso de trabajo
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-12 rounded-full" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {process.map((step, index) => (
                            <div key={index} className="relative bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                                <div className="absolute -top-3 -left-3 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-gray-900 font-bold shadow-lg shadow-cyan-500/50">
                                    {index + 1}
                                </div>
                                <p className="text-gray-300 text-lg mt-2">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            ¿Listo para tener tu Landing Page?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Contáctanos hoy y empieza a recibir más consultas para tu negocio
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#contacto" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
                                Solicitar cotización
                            </Link>
                            <Link href="/#proyectos" className="px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                                Ver más ejemplos
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
