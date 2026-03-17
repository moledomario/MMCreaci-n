"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ChatWidget() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const hasGreeted = useRef(false);

  useEffect(() => {
    if (!hasGreeted.current) {
      const greeting = {
        role: "assistant",
        content: "¡Hola! 👋 Soy M asistente. ¿En qué puedo ayudarte hoy?"
      };
      setMessages([greeting]);
      if (!isOpen) {
        setUnreadCount(1);
      }
      hasGreeted.current = true;
    }
  }, [isOpen]);

  const toggleChat = () => {
    if (!isOpen) {
      setUnreadCount(0);
    }
    setIsOpen(!isOpen);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      const assistantMessage = { role: "assistant", content: data.content };
      setMessages((prev) => [...prev, assistantMessage]);

      if (!isOpen) {
        setUnreadCount((prev) => prev + 1);
      }

      if (data.numberDetected) {
        console.log("¡Lead detectado! El usuario dejó su número.");

      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`fixed bottom-5 right-5 ${isOpen ? 'w-80 md:w-96 h-[500px] rounded-2xl' : 'w-16 h-16 rounded-full'
        } bg-white shadow-2xl border border-gray-200 flex flex-col overflow-hidden z-50`}
    >
      {!isOpen ? (
        <button
          onClick={toggleChat}
          className="w-full h-full flex items-center justify-center bg-slate-800 hover:bg-slate-700 transition-colors duration-300"
          aria-label="Abrir chat"
        >
          <div className="relative w-10 h-10">
            <Image
              src="/MMsolo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {unreadCount > 0 && (
            <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
              {unreadCount}
            </div>
          )}
        </button>
      ) : (
        <>
          {/* Header */}
          <div
            className="bg-slate-800 p-4 text-white font-bold cursor-pointer flex justify-between items-center"
            onClick={toggleChat}
          >
            <span>M asistente</span>
            <button className="hover:text-cyan-400 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Caja de mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 shadow-sm border'
                  }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-xs text-gray-500 animate-pulse">La IA está pensando...</div>}
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-4 border-t bg-white flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 text-sm outline-none border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
              disabled={isLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              Enviar
            </button>
          </form>
        </>
      )}
    </div>
  );
}
