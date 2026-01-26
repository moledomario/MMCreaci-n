"use client";

import { useRef, useEffect, useState } from 'react';

export default function Contact() {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

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

    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent("Hola, me interesa uno de tus servicios para mi negocio.");
        window.open(`https://wa.me/2966350730?text=${message}`, "_blank");
    };

    return (
        <section
            ref={ref}
            className="min-h-screen bg-gray-900 py-24 px-6 relative overflow-hidden"
            id="contacto"
        >
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />

            <div
                className={`max-w-5xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="text-center mb-16">
                    <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase font-medium">
                        Contacto
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
                        ¿Listo para empezar tu proyecto?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mt-6 rounded-full" />
                    <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                        Cuéntame sobre tu proyecto y te responderé en menos de 24 horas con una propuesta personalizada
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full h-14 px-4 rounded-xl border-2 border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-cyan-500 focus:bg-gray-800 focus:outline-none transition-all duration-300"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Tu email o WhatsApp"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full h-14 px-4 rounded-xl border-2 border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-cyan-500 focus:bg-gray-800 focus:outline-none transition-all duration-300"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Cuéntame sobre tu proyecto..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows="6"
                                className="w-full px-4 py-4 rounded-xl border-2 border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-cyan-500 focus:bg-gray-800 focus:outline-none transition-all duration-300 resize-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className={`w-full h-14 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group
                                ${status === 'loading' ? 'bg-gray-600 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-400 text-gray-900 hover:shadow-cyan-500/50'}
                            `}
                        >
                            {status === 'loading' ? (
                                <span>Enviando...</span>
                            ) : (
                                <>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    Enviar mensaje
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center animate-fade-in">
                                ¡Mensaje enviado con éxito! Te responderé pronto.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center animate-fade-in">
                                Hubo un error al enviar el mensaje. Por favor intenta por WhatsApp.
                            </div>
                        )}
                    </form>

                    {/* Alternative contact */}
                    <div className="space-y-6">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-all duration-300">
                                    <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">WhatsApp</h3>
                                    <p className="text-sm text-gray-400">Respuesta inmediata</p>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-6">
                                ¿Prefieres hablar directamente? Escríbeme por WhatsApp y te respondo al instante.
                            </p>
                            <button
                                onClick={handleWhatsApp}
                                className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Hablar por WhatsApp
                            </button>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                                    <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">Email</h3>
                                    <p className="text-sm text-gray-400">Para proyectos detallados</p>
                                </div>
                            </div>
                            <a
                                href="mailto:mmcreacion.contacto@gmail.com"
                                className="text-cyan-400 hover:text-cyan-300 font-medium text-lg transition-colors duration-300 hover:underline"
                            >
                                mmcreacion.contacto@gmail.com
                            </a>
                            <p className="text-gray-400 mt-4 text-sm">
                                Te respondo en menos de 24 horas con una cotización personalizada
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
                            <div className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="text-white font-semibold mb-2">Tiempo de respuesta</h4>
                                    <p className="text-gray-400 text-sm">
                                        Respondo todos los mensajes en menos de 24 horas. Si es urgente, escríbeme por WhatsApp para una respuesta inmediata.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}