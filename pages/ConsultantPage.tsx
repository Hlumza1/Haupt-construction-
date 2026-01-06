
import React, { useState, useRef, useEffect } from 'react';
import { GeminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const ConsultantPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const geminiRef = useRef<GeminiService | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Civil Engineering Capabilities",
    "B-BBEE Status & Rating",
    "Road Construction Projects",
    "Contractor Development Program"
  ];

  useEffect(() => {
    geminiRef.current = new GeminiService();
    // Initial greeting
    setMessages([{
      role: 'model',
      parts: "Welcome to the Hauptcon (Pty) Ltd Intelligence Hub. I am your specialized engineering consultant. Since 1982, we've built a legacy of precision and quality across South Africa. How can I assist your project planning or procurement process today?"
    }]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleSend = async (text: string = input) => {
    const messageToSend = text.trim();
    if (!messageToSend || !geminiRef.current || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', parts: messageToSend }]);
    setIsLoading(true);

    let fullResponse = "";
    try {
      setMessages(prev => [...prev, { role: 'model', parts: "" }]);
      
      const stream = geminiRef.current.sendMessageStream(messageToSend);
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'model', parts: fullResponse };
          return newMessages;
        });
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { role: 'model', parts: "I apologize, our engineering database is currently experiencing a synchronization delay. Please try again or call our Durban office." };
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#020202] text-zinc-100 flex flex-col relative overflow-hidden">
      {/* Aesthetic Background Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex-grow max-w-6xl mx-auto w-full px-4 py-8 flex flex-col lg:flex-row gap-8 relative z-10">
        
        {/* Sidebar - Context & Stats */}
        <aside className="hidden lg:flex flex-col w-72 space-y-6">
          <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-6 rounded-3xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-4">Engineering Node</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-400">Status</span>
                <span className="text-[10px] bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full font-bold animate-pulse">ONLINE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-400">CIDB Rating</span>
                <span className="text-[10px] text-zinc-200 font-bold">LEVEL 9 PE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-400">B-BBEE</span>
                <span className="text-[10px] text-zinc-200 font-bold">LEVEL 1</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-6 rounded-3xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-4">Core Capabilities</h3>
            <ul className="text-xs text-zinc-400 space-y-3">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full" /> Bulk Earthworks</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full" /> Road Construction</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full" /> Water Treatment</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-600 rounded-full" /> Industrial Build</li>
            </ul>
          </div>
        </aside>

        {/* Main Chat Interface */}
        <div className="flex-grow flex flex-col bg-zinc-900/20 backdrop-blur-2xl border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl relative">
          
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-zinc-900/40">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                <span className="font-display text-2xl text-white font-bold">H</span>
              </div>
              <div>
                <h1 className="font-display text-xl tracking-wide uppercase text-white">Hauptcon <span className="text-blue-500">IntelliHub</span></h1>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-tighter">Secure Engineering Consultant v4.1</p>
              </div>
            </div>
            <button 
              onClick={() => setMessages([{ role: 'model', parts: "System recalibrated. Ready for a new project inquiry." }])}
              className="p-2 hover:bg-white/5 rounded-full transition-colors group"
              title="Reset Chat"
            >
              <svg className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-6 space-y-8 custom-scrollbar"
          >
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex w-full animate-fade-in ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] md:max-w-[70%] group ${
                    msg.role === 'user' ? 'items-end' : 'items-start'
                  } flex flex-col`}
                >
                  <div className={`px-5 py-4 rounded-[1.5rem] shadow-xl ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-tr-none' 
                      : 'bg-zinc-800/40 backdrop-blur-md border border-white/5 text-zinc-200 rounded-tl-none'
                  }`}>
                    <div className="text-sm leading-relaxed prose prose-invert max-w-none">
                      {msg.parts || (isLoading && idx === messages.length - 1 ? (
                        <div className="flex space-x-1 py-2">
                          <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                          <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                          <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        </div>
                      ) : null)}
                      {msg.parts}
                    </div>
                  </div>
                  <span className="text-[10px] mt-2 font-bold uppercase tracking-widest text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {msg.role === 'user' ? 'Client' : 'Consultant'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input & Interaction Area */}
          <div className="p-6 bg-zinc-900/60 border-t border-white/5">
            {/* Suggested Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(s)}
                  className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-blue-600/20 hover:border-blue-500/30 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-400 transition-all"
                >
                  {s}
                </button>
              ))}
            </div>

            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="relative group"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Inquire about infrastructure, tenders, or mentorship..."
                className="w-full bg-zinc-950/50 border border-white/5 rounded-2xl px-6 py-5 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all pr-16 shadow-inner"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-zinc-500 text-white rounded-xl flex items-center justify-center transition-all shadow-lg shadow-blue-900/30 hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
            <div className="flex justify-between items-center mt-4">
              <span className="text-[9px] text-zinc-600 uppercase font-bold tracking-[0.2em]">Engineering Excellence Since 1982</span>
              <span className="text-[9px] text-zinc-600 uppercase font-bold tracking-[0.2em]">Durban, South Africa</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(37, 99, 235, 0.3);
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ConsultantPage;
