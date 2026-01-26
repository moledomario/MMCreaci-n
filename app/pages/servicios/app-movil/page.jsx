"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AppMovilView() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const appTypes = [
        {
            icon: '📱',
            title: 'Apps informativas',
            description: 'Para mostrar servicios, catálogos, noticias, ubicación, contacto.',
            color: 'from-blue-500/20 to-cyan-500/20',
            border: 'border-blue-500/30'
        },
        {
            icon: '🛒',
            title: 'Apps comerciales',
            description: 'Catálogo de productos, pedidos, reservas, pagos, seguimiento de compras.',
            color: 'from-green-500/20 to-emerald-500/20',
            border: 'border-green-500/30'
        },
        {
            icon: '👥',
            title: 'Apps internas',
            description: 'Para gestión de turnos, clientes, stock, empleados, reportes.',
            color: 'from-purple-500/20 to-pink-500/20',
            border: 'border-purple-500/30'
        },
        {
            icon: '🌐',
            title: 'Apps conectadas a sistemas web',
            description: 'Integradas con tu página, base de datos o panel administrativo.',
            color: 'from-orange-500/20 to-yellow-500/20',
            border: 'border-orange-500/30'
        },
        {
            icon: '🚀',
            title: 'MVP / Prototipos',
            description: 'Versiones iniciales para validar una idea de negocio o startup.',
            color: 'from-cyan-500/20 to-teal-500/20',
            border: 'border-cyan-500/30'
        }
    ];

    const process = [
        {
            number: '01',
            title: 'Análisis de la idea o necesidad',
            description: 'Entendemos qué problema debe resolver la app.'
        },
        {
            number: '02',
            title: 'Definición de funcionalidades',
            description: 'Qué hará la app, qué pantallas tendrá, qué podrá hacer el usuario.'
        },
        {
            number: '03',
            title: 'Diseño de experiencia (UI/UX)',
            description: 'Diseñamos una interfaz clara, simple y moderna.'
        },
        {
            number: '04',
            title: 'Desarrollo',
            description: 'Programamos la aplicación para Android, iOS o ambas.'
        },
        {
            number: '05',
            title: 'Pruebas',
            description: 'Verificamos que todo funcione correctamente.'
        },
        {
            number: '06',
            title: 'Publicación y entrega',
            description: 'Preparamos la app para ser instalada o publicada en tiendas.'
        }
    ];

    const whoNeeds = [
        'Empresas que quieren digitalizar procesos',
        'Negocios con clientes frecuentes',
        'Emprendimientos que quieren lanzar un producto digital',
        'Startups',
        'Pymes que buscan automatizar y crecer'
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

            {/* Hero conceptual */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block mb-6">
                        <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
                            Desarrollo Móvil
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                        Desarrollo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">aplicaciones móviles</span> a medida
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        Creamos apps pensadas para resolver necesidades reales de tu negocio, desde la idea hasta su publicación.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700">
                            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-300">Android</span>
                        </div>
                        <div className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700">
                            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-300">iOS</span>
                        </div>
                        <div className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700">
                            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="text-gray-300">Multiplataforma</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ¿Qué es una app móvil? */}
            <section className="py-20 px-6 bg-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        ¿Qué entendemos por una <span className="text-cyan-400">app móvil?</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-12 rounded-full" />

                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12">
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Una aplicación móvil es una herramienta diseñada para funcionar en teléfonos y tablets, que permite a los usuarios interactuar con tu empresa de forma directa, rápida y personalizada. Puede servir para <span className="text-cyan-400 font-semibold">vender, gestionar clientes, mostrar información, automatizar procesos</span> o crear una experiencia exclusiva para tus usuarios.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tipos de aplicaciones */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        ¿Qué tipo de apps se pueden crear?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-16 rounded-full" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {appTypes.map((type, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${type.color} backdrop-blur-sm border ${type.border} rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="text-6xl mb-4">{type.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proceso de desarrollo */}
            <section className="py-20 px-6 bg-gray-900/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        ¿Cómo desarrollamos una aplicación móvil?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-16 rounded-full" />

                    <div className="space-y-6">
                        {process.map((step, index) => (
                            <div
                                key={index}
                                className="flex gap-6 items-start bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/30">
                                    {step.number}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tecnologías */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Tecnologías que utilizamos
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-12 rounded-full" />

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12">
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Utilizamos tecnologías modernas que permiten crear aplicaciones rápidas, seguras y escalables, compatibles con <span className="text-cyan-400 font-semibold">Android y iOS</span> desde una misma base de código, optimizando tiempos y costos.
                        </p>


                    </div>
                </div>
            </section>

            {/* ¿Quién necesita una app? */}
            <section className="py-20 px-6 bg-gray-900/30">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        ¿Quién necesita una app?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-12 rounded-full" />

                    <div className="grid md:grid-cols-2 gap-4">
                        {whoNeeds.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                                <svg className="w-8 h-8 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-300 text-lg">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="relative bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-12 md:p-16 overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

                        <div className="relative z-10 text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                ¿Tenés una idea de app o un proceso que querés digitalizar?
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                                En MM Creación te ayudamos a transformar tu idea en una aplicación real, funcional y lista para crecer.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/#contacto" className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 text-lg">
                                    Contanos tu proyecto
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}