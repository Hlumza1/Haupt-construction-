
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920')` }} 
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-[1px] w-12 bg-blue-500"></div>
            <span className="text-blue-400 font-semibold tracking-widest uppercase text-sm">Engineering Excellence Since 1982</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-6">
            BUILDING THE <br />
            <span className="text-blue-600">INFRASTRUCTURE</span> OF <br />
            SOUTHERN AFRICA
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Delivering large-scale civil engineering and building solutions with a legacy of quality, safety, and community development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/portfolio" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded font-bold uppercase tracking-widest transition-all flex items-center justify-center group"
            >
              Our Portfolio
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              to="/consultant" 
              className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 hover:border-blue-500 text-white px-8 py-4 rounded font-bold uppercase tracking-widest transition-all flex items-center justify-center"
            >
              Hauptcon AI
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 z-20 hidden lg:flex space-x-12 bg-black/40 backdrop-blur-md p-8 border border-white/10 rounded-lg">
        <div>
          <div className="text-4xl font-display text-blue-500">40+</div>
          <div className="text-xs uppercase tracking-tighter text-zinc-500">Years of Success</div>
        </div>
        <div>
          <div className="text-4xl font-display text-blue-500">B-BBEE</div>
          <div className="text-xs uppercase tracking-tighter text-zinc-500">Level Contributor</div>
        </div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;
