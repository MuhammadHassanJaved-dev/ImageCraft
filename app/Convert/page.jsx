'use client';

import { useState, useEffect } from 'react';

export default function ImageConverter() {
  const [originalImage, setOriginalImage] = useState(null);
  const [convertedImage, setConvertedImage] = useState(null);
  const [format, setFormat] = useState('png');
  const [customName, setCustomName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (originalImage) URL.revokeObjectURL(originalImage);
      if (convertedImage) URL.revokeObjectURL(convertedImage);
    };
  }, [originalImage, convertedImage]);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);

    const baseName = file.name.replace(/\.[^/.]+$/, "");
    setCustomName(baseName);

    try {
      if (originalImage) URL.revokeObjectURL(originalImage);

      setOriginalImage(URL.createObjectURL(file));
      setConvertedImage(null);
    } catch {
      setError('Failed to load image');
    } finally {
      setLoading(false);
    }
  };

  const convertImage = async () => {
    if (!originalImage) return;

    setLoading(true);
    setError(null);

    try {
      const img = new window.Image();
      img.src = originalImage;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        if (format === 'jpg') {
          ctx.fillStyle = '#0b1020';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);

        const mimeType =
          format === 'jpg'
            ? 'image/jpeg'
            : format === 'png'
            ? 'image/png'
            : 'image/webp';

        canvas.toBlob((blob) => {
          if (convertedImage) URL.revokeObjectURL(convertedImage);

          setConvertedImage(URL.createObjectURL(blob));
          setLoading(false);
        }, mimeType, 0.92);
      };
    } catch {
      setError('Conversion failed');
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!convertedImage) return;

    const link = document.createElement('a');
    link.href = convertedImage;

    const fileName = customName.trim() || 'converted-image';
    link.download = `${fileName}.${format}`;

    link.click();
  };

  if (!mounted) return null;

  const formats = [
    { id: 'png', label: 'PNG', desc: 'Lossless quality' },
    { id: 'jpg', label: 'JPG', desc: 'Smaller size' },
    { id: 'webp', label: 'WEBP', desc: 'Modern format' },
  ];

  return (
    <div className="min-h-screen bg-[#070A12] text-white relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] bg-indigo-500/20 blur-[180px]" />
        <div className="absolute bottom-[-180px] right-[-180px] w-[500px] h-[500px] bg-cyan-500/20 blur-[180px]" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-purple-500/10 blur-[150px]" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold">
            Format <span className="text-cyan-400">Converter</span>
          </h1>
          <p className="text-slate-400 mt-3">
            Convert images instantly with high quality
          </p>
        </div>

        {/* UPLOAD */}
        {!originalImage && (
          <label className="flex flex-col items-center justify-center h-72 border border-cyan-500/20 rounded-2xl bg-white/5 backdrop-blur-xl cursor-pointer hover:bg-white/10 transition">
            <p className="text-lg font-semibold">Upload Image</p>
            <p className="text-slate-400 text-sm mt-1">PNG / JPG / WEBP</p>
            <input type="file" hidden onChange={handleFileChange} />
          </label>
        )}

        {/* TOOL AREA */}
        {originalImage && (
          <div className="grid md:grid-cols-2 gap-8 mt-10">

            {/* LEFT */}
            <div className="space-y-6">

              <div className="p-5 rounded-2xl bg-white/5 border border-cyan-500/10">
                <p className="text-sm text-slate-400 mb-3">Format</p>

                <div className="space-y-3">
                  {formats.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFormat(f.id)}
                      className={`w-full text-left p-3 rounded-xl border transition ${
                        format === f.id
                          ? 'bg-cyan-500/20 border-cyan-400'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <p className="font-semibold">{f.label}</p>
                      <p className="text-xs text-slate-400">{f.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={convertImage}
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:scale-[1.02] transition"
              >
                {loading ? 'Converting...' : 'Convert Image'}
              </button>

            </div>

            {/* RIGHT */}
            <div className="space-y-6">

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-sm text-slate-400 mb-3">Original</p>
                <img src={originalImage} className="rounded-xl max-h-72 mx-auto" />
              </div>

              {!convertedImage && (
                <div className="p-8 text-center text-slate-400 border border-white/10 rounded-2xl">
                  Converted image will appear here
                </div>
              )}

              {convertedImage && (
                <>
                  <div className="p-5 rounded-2xl bg-white/5 border border-emerald-500/20">
                    <p className="text-emerald-400 text-sm mb-3">Converted</p>
                    <img src={convertedImage} className="rounded-xl max-h-72 mx-auto" />
                  </div>

                  <input
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="File name..."
                    className="w-full p-3 rounded-xl bg-white/5 border border-cyan-500/10 outline-none focus:border-cyan-400"
                  />

                  <button
                    onClick={downloadImage}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 font-bold hover:scale-[1.02] transition"
                  >
                    Download {format.toUpperCase()}
                  </button>
                </>
              )}

            </div>
          </div>
        )}

      </main>
    </div>
  );
}