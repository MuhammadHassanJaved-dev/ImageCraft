import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute top-0 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Logo + Description */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">
              Image<span className="text-cyan-400">Craft</span>
            </h2>

            <p className="mt-3 text-slate-400 max-w-sm">
              AI-powered image tools to compress, convert, and enhance images instantly.
            </p>
          </div>

          {/* Social Icons Only */}
          <div className="flex gap-4">

            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition hover:scale-110">
              <FaFacebookF />
            </a>

            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition hover:scale-110">
              <FaTwitter />
            </a>

            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition hover:scale-110">
              <FaInstagram />
            </a>

            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition hover:scale-110">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">

          <p>© 2026 ImageCraft. All rights reserved.</p>

          <p className="text-cyan-400">
            Built with Next.js + AI ⚡
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;