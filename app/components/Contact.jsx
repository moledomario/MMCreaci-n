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

                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300">
                                    <svg className="w-7 h-7 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">Síguenos</h3>
                                    <p className="text-sm text-gray-400">Nuestras redes sociales</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61587257003860"
                                    className="w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/mm_programacion/"
                                    className="w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.484 2h.465zM12.35 4.315h-.475c-2.614 0-2.92.011-3.953.058-1.033.047-1.594.225-1.968.371-.494.192-.851.422-1.226.797-.375.375-.605.732-.797 1.226-.146.374-.324.935-.371 1.968-.047 1.033-.058 1.339-.058 4.07v.358c0 2.593.01 2.916.058 3.95.047 1.033.225 1.595.371 1.97.192.493.422.85.797 1.225.375.375.732.605 1.226.797.374.146.935.324 1.968.371 1.033.047 1.358.058 4.093.058h.334c2.594 0 2.917-.01 3.952-.058 1.033-.047 1.594-.225 1.968-.371.494-.192.851-.422 1.226-.797.375-.375.605-.732.797-1.226.11-1.226.146-.374.324-.935.371-1.968.047-1.033.058-1.359.058-4.093V9.61c0-2.594-.01-2.917-.058-3.952-.047-1.033-.225-1.594-.371-1.968-.192-.494-.422-.851-.797-1.226-.375-.375-.732-.605-1.226-.797-.374-.146-.935-.324-1.968-.371-1.033-.047-1.339-.058-4.07-.058zM12 7.187a4.813 4.813 0 110 9.626 4.813 4.813 0 010-9.626zm0 2.315a2.498 2.498 0 100 4.996 2.498 2.498 0 000-4.996zm5.37-3.69a1.14 1.14 0 110 2.28 1.14 1.14 0 010-2.28z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
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