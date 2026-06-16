"use client";

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background Glows */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="text-center">
          <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-sm text-cyan-300 text-sm font-medium mb-6">
            About ImageCraft
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Empowering Image
            <br />
            Creation With AI
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            Learn more about our mission, technology, and commitment to
            providing powerful image tools for everyone.
          </p>
        </div>

        {/* Glass Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">

            <p className="text-slate-300 text-lg leading-relaxed">
              ImageCraft is a modern AI-powered platform built to simplify
              image editing and optimization. Whether you're a designer,
              content creator, developer, or casual user, our tools help you
              transform images quickly and efficiently.
            </p>

            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              From image compression and format conversion to intelligent
              background removal, we leverage advanced technologies to deliver
              professional-quality results directly in your browser.
            </p>

            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              Privacy and performance are at the core of our platform. We aim
              to provide fast, secure, and reliable tools that help creators
              focus on their work instead of technical challenges.
            </p>

          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-cyan-400">AI</h3>
            <p className="mt-2 text-slate-300">Powered Processing</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-400">Fast</h3>
            <p className="mt-2 text-slate-300">Optimized Performance</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-emerald-400">Secure</h3>
            <p className="mt-2 text-slate-300">Privacy First</p>
          </div>

        </div>

      </main>

    </div>
  );
}