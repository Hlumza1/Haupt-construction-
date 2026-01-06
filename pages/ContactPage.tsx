
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Get in touch</h1>
            <h2 className="text-6xl font-display uppercase mb-8">Ready to <span className="text-blue-600">Collaborate?</span></h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-lg">
              Whether you are looking for a CIDB-rated partner for public works or a private industrial build, our team in Durban is ready to assist.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-blue-500 shrink-0 border border-zinc-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Durban Head Office</h4>
                  <p className="text-zinc-500">191 Anleno Road, Montclair, Durban, South Africa</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-blue-500 shrink-0 border border-zinc-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Inquiry Line</h4>
                  <p className="text-zinc-500">086 133 5547</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-blue-500 shrink-0 border border-zinc-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Support</h4>
                  <p className="text-zinc-500">info@hauptcon.co.za</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Representative Name</label>
                  <input type="text" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-blue-500 transition-colors" placeholder="e.g. Sipho Mthembu" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Company / Organization</label>
                  <input type="text" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-blue-500 transition-colors" placeholder="e.g. Municipality of Durban" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Project Sector</label>
                <select className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-blue-500 transition-colors">
                  <option>Civil Engineering / Roads</option>
                  <option>Water Infrastructure</option>
                  <option>Building (Institutional/Commercial)</option>
                  <option>Industrial / Mining</option>
                  <option>Contractor Mentorship</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Tender / Project Details</label>
                <textarea rows={5} className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Outline your project requirements or tender reference..."></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold uppercase tracking-widest transition-all hover:scale-[1.02] shadow-xl shadow-blue-900/20">
                Submit Tender Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
