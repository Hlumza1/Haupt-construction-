
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Civil Engineering', 'Institutional', 'Industrial', 'Commercial'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-20 relative">
          <h1 className="text-8xl md:text-[10rem] font-display uppercase font-bold text-zinc-900 absolute -top-12 md:-top-24 left-1/2 -translate-x-1/2 select-none opacity-30 whitespace-nowrap">
            Our Legacy
          </h1>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-display uppercase mb-4">ENGINEERING <span className="text-blue-600">IMPACT</span></h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-lg">
              Showcasing over four decades of structural excellence across South Africa's evolving landscape.
            </p>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full border text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                filter === cat 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
                  : 'border-zinc-800 text-zinc-500 hover:border-blue-500 hover:text-blue-400 bg-zinc-900/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group flex flex-col h-full bg-zinc-900/30 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10">
              {/* Project Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Overlay Year Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-blue-500 font-display text-xl border border-white/10">
                  {project.completionYear}
                </div>
                
                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 bg-blue-600 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest text-white">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2 leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-2 text-zinc-500 mb-6">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
                
                <div className="mt-auto pt-6 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-600">Project Verified</span>
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <h3 className="text-zinc-500 text-xl">No projects found in this category.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
