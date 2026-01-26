"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SitiosWebView() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const benefits = [
        'Mostrar quien sos y que haces',
        'Generar confianza en nuevos clientes',
        'Recibir consultas las 24 horas',
        'Posicionar tu negocio en internet',
        'Dar una imagen profesional frente a la competencia'
    ];

    const idealFor = [
        { icon: '🌐', text: 'Empresas sin presencia online' },
        { icon: '⭐', text: 'Negocios que quieren verse mas profesionales' },
        { icon: '🎯', text: 'Emprendimientos que ofrecen varios servicios' },
        { icon: '📈', text: 'Empresas que quieren crecer y posicionar su marca' },
        { icon: '🏆', text: 'Negocios que buscan diferenciarse de la competencia' }
    ];

    const includes = [
        { title: 'Diseno personalizado segun tu marca', icon: '🎨' },
        { title: 'Secciones: Inicio, Servicios, Nosotros, Contacto, etc.', icon: '📄' },
        { title: 'Diseno adaptable a celulares y tablets', icon: '📱' },
        { title: 'Integracion con WhatsApp', icon: '💬' },
        { title: 'Formulario de contacto', icon: '📝' },
        { title: 'Optimizacion basica de velocidad', icon: '⚡' },
        { title: 'Puesta online y configuracion inicial', icon: '🚀' }
    ];

    const process = [
        'Conocemos tu empresa y objetivos',
        'Definimos estructura y secciones',
        'Disenamos la interfaz',
        'Desarrollamos el sitio',
        'Revisamos contigo',
        'Publicamos y entregamos'
    ];

    const examples = [
        {
            title: 'Sitio Web Inmobiliaria',
            image: '/inmobiliaria.png',
            rubro: 'Inmobiliaria',
            objetivo: 'Mostrar propiedades disponibles y generar consultas de clientes interesados',
            link: 'https://inmobiliara-seven.vercel.app/'
        },
        {
            title: 'Sitio Web E-commerce',
            image: '/ropa-e.png',
            rubro: 'Ropa Online',
            objetivo: 'Vender productos online con carrito de compras y pasarela de pagos',
            link: 'https://v0-e-commerce-website-alpha-orcin.vercel.app/'
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
                        Que es un <span className="text-cyan-400">Sitio Web Completo?</span>
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-8 rounded-full" />
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                        Un sitio web completo es una pagina que cuenta con varias secciones o paginas internas, como por ejemplo: Inicio, Servicios, Nosotros, Proyectos y Contacto.
                    </p>
                    <p className="text-lg text-gray-400 mt-6 leading-relaxed">
                        Es ideal para empresas que quieren presentar su marca de forma profesional, generar confianza y ofrecer toda la informacion necesaria a sus clientes en un solo lugar.
                    </p>
                </div>
            </section>

            {/* Para qué sirve */}
            <section className="py-16 px-6 bg-gray-900/30">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                        Para que le sirve a tu empresa un sitio web?
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
                            Tu sitio web es la carta de presentacion digital de tu empresa.
                        </p>
                    </div>
                </div>
            </section>

            {/* Para quién es ideal */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                        Es un sitio web completo lo que tu negocio necesita?
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
                        Que incluye un sitio web desarrollado por MM Creacion?
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
                        Como desarrollamos tu sitio web?
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

            {/* Ejemplos de sitios web */}
            <section className="py-16 px-6 bg-gray-900/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                        Ejemplos de Sitios Web
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-12 rounded-full" />

                    <div className="grid md:grid-cols-2 gap-8">
                        {examples.map((example, index) => (
                            <div key={index} className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={example.image}
                                        alt={example.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-cyan-500/90 text-gray-900 text-xs font-semibold rounded-full">
                                            {example.rubro}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        {example.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6">
                                        <span className="font-semibold text-cyan-400">Objetivo:</span> {example.objetivo}
                                    </p>

                                    <Link
                                        href={example.link}
                                        target="_blank"
                                        className="w-full px-6 py-3 bg-gray-700 hover:bg-cyan-500 text-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300"
                                    >Ver demo</Link>

                                </div>
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
                            Tu empresa necesita un sitio web profesional
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            En MM Creacion te ayudamos a crear una presencia digital solida para que tus clientes te encuentren y confien en tu marca
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#contacto" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
                                Solicitar presupuesto
                            </Link>
                            <Link href="/#proyectos" className="px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                                Ver mas ejemplos
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}