"use client";

import { useState } from "react";

const navLinks = [
    { href: "#quienes-somos", label: "Quiénes somos" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#proceso", label: "Proceso" },

];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    return (
        <header className="fixed top-4 z-50 w-full flex justify-center px-4">
            <div className="w-full max-w-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg rounded-full relative transition-all duration-300">
                <nav className="flex items-center justify-between md:justify-center px-6 py-2.5">

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium relative group py-1"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            className="ml-2 px-6 py-2 bg-white hover:bg-cyan-400 text-gray-900 text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                        >
                            Hablemos
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center justify-between w-full">
                        <span className="text-gray-200 font-medium text-sm tracking-wide">MENÚ</span>
                        <button
                            className="p-1.5 text-gray-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-white/5"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-3 bg-[rgba(15,23,42,0.95)] backdrop-blur-xl border border-white/10 rounded-2xl md:hidden overflow-hidden shadow-2xl">
                        <div className="py-3 flex flex-col">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium py-3 px-6 hover:bg-white/5"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="px-6 pt-3 pb-2">
                                <a
                                    href="#contacto"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex justify-center w-full px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-gray-900 text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25"
                                >
                                    Hablemos
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}