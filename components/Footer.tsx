
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-zinc-400 py-20 px-4 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 lg:col-span-1">
          <Link to="/" className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-display text-xl font-bold">H</span>
            </div>
            <span className="font-display text-2xl tracking-wider font-bold text-white">
              HAUPTCON <span className="text-blue-500">(PTY) LTD</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Established in 1982, Hauptcon (Pty) Ltd is a prominent South African construction company specializing in civil engineering, roadworks, and infrastructure development.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-8 text-sm">Our Focus</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Civil Engineering</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Bulk Earthworks</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Road Construction</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Water Treatment</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Contractor Development</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-8 text-sm">About Hauptcon</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-blue-500 transition-colors">B-BBEE Commitment</Link></li>
            <li><Link to="/portfolio" className="hover:text-blue-500 transition-colors">Recent Projects</Link></li>
            <li><Link to="/consultant" className="hover:text-blue-500 transition-colors">AI Consultant</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-8 text-sm">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span>191 Anleno Road, Montclair<br />Durban, South Africa</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>086 133 5547</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@hauptcon.co.za</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-900 text-center text-xs tracking-widest uppercase">
        <p>© {new Date().getFullYear()} Hauptcon (Pty) Ltd. Excellence Since 1982.</p>
      </div>
    </footer>
  );
};

export default Footer;
