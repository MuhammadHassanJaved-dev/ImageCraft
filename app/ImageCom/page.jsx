'use client';

import { useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';

export default function Compressor() {
  const [originalFile, setOriginalFile] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [customName, setCustomName] = useState('');
  const [quality, setQuality] = useState(0.8);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (originalImage) URL.revokeObjectURL(originalImage);
      if (compressedImage) URL.revokeObjectURL(compressedImage);
    };
  }, [originalImage, compressedImage]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const baseName = file.name.replace(/\.[^/.]+$/, "");
    setCustomName(baseName);

    if (originalImage) URL.revokeObjectURL(originalImage);

    setOriginalFile(file);
    setOriginalImage(URL.createObjectURL(file));
    setOriginalSize(file.size);
    setCompressedImage(null);
    setCompressedSize(0);
  };

  const compressImage = async () => {
    if (!originalFile) return;

    setLoading(true);
    try {
      const compressedFile = await imageCompression(originalFile, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        initialQuality: quality,
      });

      if (compressedImage) URL.revokeObjectURL(compressedImage);

      setCompressedImage(URL.createObjectURL(compressedFile));
      setCompressedSize(compressedFile.size);
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!compressedImage) return;

    const link = document.createElement('a');
    link.href = compressedImage;

    const ext = originalFile?.name.split('.').pop();
    const fileName = customName.trim() || 'compressed-image';

    link.download = `${fileName}.${ext}`;
    link.click();
  };

  if (!mounted) return null;

  const savedPercent =
    originalSize && compressedSize
      ? Math.max(0, Math.round(((originalSize - compressedSize) / originalSize) * 100))
      : 0;

  return (
    <div className="min-h-screen bg-[#070A12] text-white relative overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] bg-cyan-500/20 blur-[180px]" />
        <div className="absolute bottom-[-180px] right-[-180px] w-[500px] h-[500px] bg-blue-500/20 blur-[180px]" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold">
            Smart <span className="text-cyan-400">Image Compressor</span>
          </h1>
          <p className="text-slate-400 mt-3">
            Upload → Optimize → Download in seconds
          </p>
        </div>

        {!originalImage && (
          <label className="flex flex-col items-center justify-center h-72 border border-cyan-500/20 rounded-2xl bg-white/5 backdrop-blur-xl cursor-pointer hover:bg-white/10 transition">
            <p className="text-lg font-semibold">Drop or Upload Image</p>
            <p className="text-slate-400 text-sm mt-1">PNG, JPG, WEBP supported</p>
            <input type="file" hidden onChange={handleFileChange} />
          </label>
        )}

        {originalImage && (
          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div className="space-y-6">

              <div className="p-5 rounded-2xl bg-white/5 border border-cyan-500/10">
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>Quality</span>
                  <span className="text-cyan-400">{Math.round(quality * 100)}%</span>
                </div>

                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.1"
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>

              <button
                onClick={compressImage}
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:scale-[1.02] transition"
              >
                {loading ? 'Processing...' : 'Compress Image'}
              </button>

              {compressedImage && (
                <button
                  onClick={downloadImage}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 font-bold hover:scale-[1.02] transition"
                >
                  Download Image
                </button>
              )}

            </div>

            <div className="space-y-6">

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-sm text-slate-400 mb-2">Original</p>
                <img src={originalImage} className="rounded-xl max-h-72 mx-auto" />
              </div>

              {compressedImage && (
                <div className="p-4 rounded-2xl bg-white/5 border border-emerald-500/20">
                  <p className="text-emerald-400 text-sm mb-2">Compressed</p>
                  <img src={compressedImage} className="rounded-xl max-h-72 mx-auto" />
                </div>
              )}

            </div>
          </div>
        )}
      </main>
    </div>
  );
}