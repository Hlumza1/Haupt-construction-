
import React from 'react';
import Hero from '../components/Hero';
import { SERVICES, PROJECTS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-[#050505]">
      <Hero />
      
      {/* About Us & Legacy Section */}
      <section id="about" className="py-24 px-4 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1541913056-10c2858fd6ec?auto=format&fit=crop&q=80&w=800" 
                alt="Engineering Legacy" 
                className="rounded-2xl shadow-2xl relative z-10 border border-zinc-800"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-2xl z-20 shadow-xl hidden md:block">
                <div className="text-4xl font-display text-white">1982</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-blue-100">Year Established</div>
              </div>
            </div>
            <div>
              <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Our Legacy</h2>
              <h3 className="text-4xl md:text-5xl font-display uppercase mb-6">40 Years of <span className="text-blue-600">Engineering Excellence</span></h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Hauptcon (Pty) Ltd is a prominent South African construction company, established in 1982. We have spent decades specializing in medium to large-scale civil engineering and building projects across the Western Cape and Northern Cape.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                  <div className="text-blue-500 font-bold mb-1">B-BBEE Level 1</div>
                  <p className="text-xs text-zinc-500">Committed to Broad-Based Black Economic Empowerment.</p>
                </div>
                <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                  <div className="text-blue-500 font-bold mb-1">CIDB Level 9</div>
                  <p className="text-xs text-zinc-500">Unlimited tender capacity for public sector projects.</p>
                </div>
              </div>
              <p className="text-zinc-500 text-sm italic">
                "Our mission is to deliver quality infrastructure that empowers communities and fuels the South African economy."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Core Business</h2>
            <h3 className="text-4xl md:text-5xl font-display uppercase">Our Specializations</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative p-8 bg-zinc-900 border border-zinc-800 hover:border-blue-600/50 transition-all rounded-xl overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="text-blue-500 scale-[4]">
                    {service.icon}
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform origin-left">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link to="/services" className="text-blue-500 text-xs font-bold uppercase tracking-widest hover:text-blue-400 flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contractor Development Program */}
      <section className="py-24 px-4 bg-blue-900/10">
        <div className="max-w-7xl mx-auto border border-blue-600/20 bg-zinc-900/40 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Empowerment</h2>
              <h3 className="text-4xl font-display uppercase mb-6">Contractor <span className="text-blue-600">Development</span></h3>
              <p className="text-zinc-300 text-lg mb-8">
                Hauptcon is widely recognized for our mentorship program, designed to grow emerging small businesses in the construction sector. We believe in building not just structures, but a sustainable industry ecosystem.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Hands-on Technical Mentorship",
                  "Financial Management Coaching",
                  "Compliance & Safety Training",
                  "Preferential Procurement Opportunities"
                ].map(item => (
                  <li key={item} className="flex items-center space-x-3 text-zinc-400">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold uppercase text-xs tracking-widest transition-all">
                Partner With Us
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800" alt="Mentorship" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Our Showcase</h2>
              <h3 className="text-4xl md:text-5xl font-display uppercase">Significant Landmarks</h3>
            </div>
            <Link to="/portfolio" className="bg-zinc-900 border border-zinc-700 px-6 py-3 text-sm font-bold uppercase tracking-widest hover:border-blue-600 transition-colors">
              View All Projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 2).map((project) => (
              <div key={project.id} className="group relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                      <h4 className="text-2xl font-bold mb-1">{project.title}</h4>
                      <p className="text-zinc-400 text-sm">{project.location}</p>
                    </div>
                    <div className="bg-blue-600 p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Sustainability */}
      <section className="py-24 px-4 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Commitment</h2>
            <h3 className="text-4xl md:text-5xl font-display uppercase">Safety & Sustainability</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-zinc-900 rounded-3xl border border-zinc-800 flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-7.618 3.04l-.542 7.105a11.952 11.952 0 005.482 9.499L12 23l2.678-1.412a11.952 11.952 0 005.482-9.499l-.542-7.105z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-wide">Zero Harm</h4>
              <p className="text-zinc-500 text-sm">Strict adherence to OHS (Occupational Health & Safety) standards on every site.</p>
            </div>
            <div className="p-10 bg-zinc-900 rounded-3xl border border-zinc-800 flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-wide">Environmental</h4>
              <p className="text-zinc-500 text-sm">Management systems designed to minimize impact and preserve South African ecosystems.</p>
            </div>
            <div className="p-10 bg-zinc-900 rounded-3xl border border-zinc-800 flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-wide">Timely Delivery</h4>
              <p className="text-zinc-500 text-sm">A 40-year track record of completing projects on schedule and within budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Consultation CTA */}
      <section className="py-24 px-4 bg-blue-600 overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 text-black/20 absolute -top-12 left-1/2 -translate-x-1/2 select-none pointer-events-none uppercase">
            Consultation
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Expert Technical Insights</h3>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Leverage our proprietary Hauptcon AI Consultant to explore structural solutions, CIDB requirements, and bulk earthworks scoping with the precision of 40 years of engineering legacy.
          </p>
          <Link to="/consultant" className="bg-black text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-2xl hover:scale-105">
            Talk to Hauptcon AI
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
