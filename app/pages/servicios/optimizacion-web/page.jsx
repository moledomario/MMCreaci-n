"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RedisenoWebView() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const whenRedesign = [
        'Se ve antigua o poco profesional',
        'No se adapta bien a celulares',
        'Es confusa o difícil de navegar',
        'No genera consultas',
        'No representa la imagen real de tu empresa'
    ];

    const idealFor = [
        { icon: '🔄', text: 'Negocios con páginas web desactualizadas' },
        { icon: '⭐', text: 'Empresas que quieren verse más profesionales' },
        { icon: '📱', text: 'Sitios que no funcionan bien en mobile' },
        { icon: '🎨', text: 'Marcas que cambiaron su identidad y necesitan actualizar su imagen' },
        { icon: '📈', text: 'Empresas que quieren mejorar sus resultados online' }
    ];

    const includes = [
        { title: 'Análisis de tu sitio actual', icon: '🔍' },
        { title: 'Nueva estructura y organización de contenidos', icon: '📊' },
        { title: 'Diseño moderno y adaptado a tu marca', icon: '🎨' },
        { title: 'Versión responsive (celular, tablet, desktop)', icon: '📱' },
        { title: 'Optimización de velocidad básica', icon: '⚡' },
        { title: 'Integración con WhatsApp y formularios', icon: '💬' },
        { title: 'Publicación de la nueva versión', icon: '🚀' }
    ];

    const process = [
        'Revisamos tu web actual',
        'Detectamos mejoras y problemas',
        'Proponemos una nueva estructura',
        'Disenamos la nueva interfaz',
        'Desarrollamos la versión renovada',
        'La publicamos y la dejamos lista para usar'
    ];

    const beforeAfter = [
        {
            title: 'Antes',
            features: ['Diseño anticuado', 'No responsive', 'Navegación confusa', 'Lenta'],
            color: 'red'
        },
        {
            title: 'Después',
            features: ['Diseño moderno', 'Adaptado a celulares', 'Navegación clara', 'Rápida'],
            color: 'cyan'
        }
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
                        ¿Qué es un <span className="text-cyan-400">Rediseño Web?</span>
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-8 rounded-full" />
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                        Un rediseño web consiste en renovar total o parcialmente un sitio existente para mejorar su imagen, estructura y funcionamiento. No se trata solo de cambiar colores, sino de adaptar tu web a los estándares actuales, hacerla más clara, más rápida y más efectiva para tus clientes.
                    </p>
                </div>
            </section>

            {/* Antes vs Después */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {beforeAfter.map((item, index) => (
                            <div key={index} className={`bg-gray-900/50 backdrop-blur-sm border-2 ${item.color === 'red' ? 'border-red-500/30' : 'border-cyan-500/50'} rounded-2xl p-8`}>
                                <div className={`inline-block px-4 py-2 rounded-full mb-6 ${item.color === 'red' ? 'bg-red-500/20 text-red-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            {item.color === 'red' ? (
                                                <svg className="w-6 h-6 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            ) : (
                                                <svg className="w-6 h-6 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                            <span className="text-gray-300 text-lg">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cuándo conviene rediseñar */}
            <section className="py-16 px-6 bg-gray-900/30">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                        ¿Tu web necesita un rediseño?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-12 rounded-full" />

                    <div className="grid md:grid-cols-2 gap-4 mb-12">
                        {whenRedesign.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                                <svg className="w-6 h-6 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span className="text-gray-300 text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-l-4 border-red-500 rounded-xl p-8">
                        <p className="text-2xl md:text-3xl font-bold text-white">
                            Si tu web no transmite confianza, estás perdiendo oportunidades.
                        </p>
                    </div>
                </div>
            </section>

            {/* Para quién es ideal */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                        ¿Este servicio es para tu empresa?
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
                        ¿Qué incluye el rediseño de MM Creación?
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

            {/* Proceso */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                        ¿Cómo realizamos el rediseño?
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

            {/* Comparación visual */}
            <section className="py-16 px-6 bg-gray-900/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                        La diferencia es notable
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-12 rounded-full" />

                    <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-5xl font-bold text-cyan-400 mb-2">+150%</div>
                                <p className="text-gray-400">Aumento en consultas</p>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-cyan-400 mb-2">3x</div>
                                <p className="text-gray-400">Más rápido</p>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-cyan-400 mb-2">100%</div>
                                <p className="text-gray-400">Adaptado a móviles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Renueva tu web y recupera la confianza de tus clientes
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            En MM Creación transformamos sitios obsoletos en plataformas modernas que realmente generan resultados
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#contacto" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
                                Solicitar análisis gratuito
                            </Link>
                            <Link href="/#proyectos" className="px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                                Ver ejemplos
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}