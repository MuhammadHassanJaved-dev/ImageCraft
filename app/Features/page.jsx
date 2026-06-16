export default function Features({ showHeading = true }) {
  const features = [
    {
      title: "Image Compressor",
      desc: "Reduce image size up to 90% without losing quality. Perfect for web and performance optimization.",
      icon: "⚡",
    },
    {
      title: "Background Remover",
      desc: "AI-powered background removal with clean edges and transparent PNG output in seconds.",
      icon: "✨",
    },
    {
      title: "Format Converter",
      desc: "Convert between JPG, PNG, WebP, GIF, TIFF with optimized quality and fast processing.",
      icon: "🔄",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        {showHeading && (
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              Our{" "}
              <span className="text-cyan-400">
                Powerful Features
              </span>
            </h2>

            <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to process images like a pro — fast, simple, and AI-powered.
            </p>
          </div>
        )}

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition duration-300 hover:scale-105"
            >

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 mb-5 text-2xl">
                {f.icon}
              </div>

              {/* Title */}
              <h4 className="text-xl font-semibold">
                {f.title}
              </h4>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {f.desc}
              </p>

              {/* Info only (NO LINKS) */}
              <div className="mt-6 text-sm text-cyan-400">
                Available in Dashboard
              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
}