"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AutomatizacionView() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const solutions = [
        {
            icon: '💬',
            title: 'Chatbots inteligentes',
            description: 'Asistentes virtuales que responden preguntas frecuentes, captan leads y derivan consultas complejas a tu equipo.',
            features: ['WhatsApp', 'Instagram', 'Facebook', 'Web']
        },
        {
            icon: '📧',
            title: 'Automatización de respuestas',
            description: 'Sistemas que responden correos, mensajes y formularios automáticamente, clasificando y organizando cada consulta.',
            features: ['Email', 'Formularios', 'SMS', 'Redes sociales']
        },
        {
            icon: '🔄',
            title: 'Flujos de trabajo automáticos',
            description: 'Conecta tus herramientas para que trabajen solas: desde el formulario hasta la base de datos, sin intervención manual.',
            features: ['CRM', 'Google Sheets', 'Calendarios', 'Notificaciones']
        },
        {
            icon: '📊',
            title: 'Análisis y reportes con IA',
            description: 'Obtené informes automáticos sobre tus ventas, consultas y métricas clave sin tener que procesar datos manualmente.',
            features: ['Dashboards', 'Reportes PDF', 'Alertas', 'Predicciones']
        }
    ];

    const benefits = [
        {
            icon: '⏰',
            title: 'Ahorra tiempo',
            description: 'Automatiza tareas repetitivas que hoy te consumen horas cada semana'
        },
        {
            icon: '💰',
            title: 'Reduce costos',
            description: 'Menos trabajo manual significa menos recursos dedicados a tareas operativas'
        },
        {
            icon: '🚀',
            title: 'Mejora la atención',
            description: 'Responde a tus clientes al instante, 24/7, incluso fuera del horario laboral'
        },
        {
            icon: '📈',
            title: 'Escala tu negocio',
            description: 'Atiende más consultas sin necesidad de aumentar tu equipo'
        },
        {
            icon: '🎯',
            title: 'Decisiones inteligentes',
            description: 'Obtené datos claros y organizados para tomar mejores decisiones'
        },
        {
            icon: '✨',
            title: 'Mejor experiencia',
            description: 'Tus clientes obtienen respuestas rápidas y precisas en todo momento'
        }
    ];

    const useCases = [
        {
            industry: 'E-commerce',
            automation: 'Bot que responde consultas de productos, procesa pedidos y envía confirmaciones automáticas'
        },
        {
            industry: 'Servicios profesionales',
            automation: 'Sistema que agenda citas, envía recordatorios y gestiona la disponibilidad del equipo'
        },
        {
            industry: 'Educación',
            automation: 'Asistente que responde dudas frecuentes, inscribe alumnos y envía material automáticamente'
        },
        {
            industry: 'Salud',
            automation: 'Plataforma que agenda turnos, confirma asistencia y envía indicaciones pre-consulta'
        },
        {
            industry: 'Inmobiliarias',
            automation: 'Bot que filtra consultas, envía catálogos y agenda visitas según disponibilidad'
        },
        {
            industry: 'Restaurantes',
            automation: 'Sistema de reservas automático con confirmación por WhatsApp y recordatorios'
        }
    ];

    const process = [
        'Analizamos tus procesos actuales',
        'Identificamos qué se puede automatizar',
        'Diseñamos la solución personalizada',
        'Desarrollamos e integramos con tus sistemas',
        'Probamos y ajustamos todo',
        'Capacitamos a tu equipo y lanzamos'
    ];

    return (
        <div className="min-h-screen bg-gray-950">
            {/* Header */}
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

            {/* Hero */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block mb-6">
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                            Automatización e IA
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                        Automatización e <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Inteligencia Artificial</span> para negocios
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                        La automatización y la inteligencia artificial permiten que tu negocio trabaje de forma más eficiente, responda más rápido a sus clientes y reduzca tareas repetitivas que hoy consumen tiempo y recursos.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        En MM Creación desarrollamos soluciones simples y prácticas que integran IA con herramientas digitales para optimizar la atención al cliente, organizar consultas y automatizar procesos clave.
                    </p>
                </div>
            </section>

            {/* Soluciones */}
            <section className="py-20 px-6 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        Soluciones que desarrollamos
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-16 rounded-full" />

                    <div className="grid md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                            >
                                <div className="text-6xl mb-4">{solution.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {solution.features.map((feature, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beneficios */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        ¿Por qué automatizar tu negocio?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-16 rounded-full" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-gray-400">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Casos de uso */}
            <section className="py-20 px-6 bg-gray-900/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        Casos de uso por industria
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-16 rounded-full" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((useCase, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                    <h3 className="text-lg font-bold text-cyan-400">{useCase.industry}</h3>
                                </div>
                                <p className="text-gray-300">{useCase.automation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nuestro objetivo */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-sm border-2 border-purple-500/30 rounded-3xl p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Nuestro objetivo
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Ayudarte a transformar procesos manuales en sistemas automáticos que funcionen las 24 horas, mejoren la experiencia de tus clientes y permitan que tu empresa se enfoque en lo más importante: <span className="text-cyan-400 font-bold">crecer</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Proceso */}
            <section className="py-20 px-6 bg-gray-900/30">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        ¿Cómo trabajamos?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mb-16 rounded-full" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {process.map((step, index) => (
                            <div key={index} className="relative bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/50">
                                    {index + 1}
                                </div>
                                <p className="text-gray-300 text-lg mt-2">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="relative bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 md:p-16 overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

                        <div className="relative z-10 text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Automatiza tu negocio hoy
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                                Deja que la tecnología trabaje por vos. Agendá una consulta y hacé que la automatización transforme tu empresa.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/#contacto" className="px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-400 hover:via-pink-400 hover:to-cyan-400 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 text-lg">
                                    Agendar consulta gratuita
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}