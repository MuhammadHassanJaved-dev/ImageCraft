'use client';

import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex-1 p-8 md:p-12 relative overflow-hidden">

        {/* BACKGROUND GLOWS */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* HEADER */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to <span className="text-cyan-400">ImageCraft</span>
          </h1>

          <p className="text-slate-400 mt-3 text-lg">
            Choose a tool below to start transforming your images with AI
          </p>
        </div>

        {/* TOOL CARDS */}
        <div className="relative z-10 grid md:grid-cols-3 gap-6 mt-12">

          {/* CARD 1 */}
          <Link
            href="/ImageCom"
            className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              ⚡
            </div>

            <h2 className="text-xl font-bold">Image Compressor</h2>
            <p className="text-slate-400 text-sm mt-2">
              Reduce image size without losing quality
            </p>
          </Link>

          {/* CARD 2 */}
          <Link
            href="/Background"
            className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              ✨
            </div>

            <h2 className="text-xl font-bold">Background Remover</h2>
            <p className="text-slate-400 text-sm mt-2">
              AI-powered background removal tool
            </p>
          </Link>

          {/* CARD 3 */}
          <Link
            href="/Convert"
            className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              🔄
            </div>

            <h2 className="text-xl font-bold">Format Converter</h2>
            <p className="text-slate-400 text-sm mt-2">
              Convert images between JPG, PNG, WebP
            </p>
          </Link>

        </div>

      </div>
    </div>
  );
}