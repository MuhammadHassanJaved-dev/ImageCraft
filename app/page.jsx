'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center">

      {/* Background Glows */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>

      <main className="relative z-10 px-6 text-center max-w-5xl">

        <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-sm text-cyan-300 text-sm font-medium mb-6">
          🚀 AI-Powered Image Tools
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight">
          Transform Images
          <br />
          With AI Precision
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
          Compress, remove backgrounds, convert image formats, and enhance
          images instantly with powerful AI-driven tools.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/dashboard"
            className="
              px-8 py-4
              rounded-xl
              text-white
              font-semibold
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
            "
          >
            Start Creating
          </Link>

          <Link
            href="/Features"
            className="
              px-8 py-4
              rounded-xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-sm
              text-white
              hover:bg-white/10
              transition-all
            "
          >
            Explore Features
          </Link>

        </div>

      </main>
    </div>
  );
}