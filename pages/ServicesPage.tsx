
import React from 'react';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-display uppercase font-bold text-zinc-900 absolute -top-10 left-0 select-none opacity-50">Expertise</h1>
          <div className="relative z-10">
            <h2 className="text-5xl font-display uppercase mb-6">Our <span className="text-blue-600">Specializations</span></h2>
            <p className="text-zinc-400 max-w-2xl text-lg">
              We provide comprehensive construction and engineering solutions. Our integrated approach ensures that quality is maintained at every stage of the lifecycle.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl group">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="text-blue-500 mb-6 p-3 bg-zinc-900 rounded-lg inline-block">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['Site Analysis', 'Zoning Support', 'Structural Integrity', 'Energy Efficiency'].map(item => (
                    <div key={item} className="flex items-center space-x-2 text-zinc-300">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
