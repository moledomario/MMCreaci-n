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
        window.open(`https://wa.me/+542966350730?text=${message}`, "_blank");
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
                                    <svg className="w-7 h-7 fill-[#25D366]" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
                                <svg className="w-7 h-7 fill-[#25D366]" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                                    </svg>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}