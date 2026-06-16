'use client';

import { useState, useEffect } from 'react';

export default function BackgroundRemover() {
  const [originalFile, setOriginalFile] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [customName, setCustomName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (originalImage) URL.revokeObjectURL(originalImage);
      if (processedImage) URL.revokeObjectURL(processedImage);
    };
  }, [originalImage, processedImage]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const baseName = file.name.replace(/\.[^/.]+$/, "");
    setCustomName(baseName);

    setOriginalFile(file);
    setOriginalImage(URL.createObjectURL(file));
    setProcessedImage(null);
    setError(null);
  };

  const removeBg = async () => {
    if (!originalFile) return;

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', originalFile);

      const response = await fetch('/api/remove-bg', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('AI failed');

      const blob = await response.blob();
      setProcessedImage(URL.createObjectURL(blob));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!processedImage) return;

    const link = document.createElement('a');
    link.href = processedImage;
    link.download = `${customName || 'removed-bg'}.png`;
    link.click();
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#070A12] text-white relative overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] bg-indigo-500/20 blur-[180px]" />
        <div className="absolute bottom-[-180px] right-[-180px] w-[500px] h-[500px] bg-cyan-500/20 blur-[180px]" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold">
            Magic <span className="text-indigo-400">Background Remover</span>
          </h1>
          <p className="text-slate-400 mt-3">
            AI removes background in seconds
          </p>
        </div>

        {!originalImage && (
          <label className="flex flex-col items-center justify-center h-72 border border-indigo-500/20 rounded-2xl bg-white/5 backdrop-blur-xl cursor-pointer hover:bg-white/10 transition">
            <p className="text-lg font-semibold">Upload Image</p>
            <p className="text-slate-400 text-sm mt-1">PNG / JPG supported</p>
            <input type="file" hidden onChange={handleFileChange} />
          </label>
        )}

        {originalImage && (
          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div className="space-y-6">

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-slate-400 text-sm mb-2">Original</p>
                <img src={originalImage} className="rounded-xl max-h-[350px] mx-auto" />
              </div>

              <button
                onClick={removeBg}
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 font-bold"
              >
                {loading ? 'Processing AI...' : 'Remove Background'}
              </button>

            </div>

            <div>
              {!processedImage ? (
                <div className="p-10 rounded-2xl bg-white/5 border border-white/10 text-slate-400 text-center">
                  Result will appear here
                </div>
              ) : (
                <>
                  <div className="p-5 rounded-2xl bg-white/5 border border-emerald-500/20">
                    <p className="text-emerald-400 mb-3">AI Result</p>
                    <img src={processedImage} className="rounded-xl max-h-[350px] mx-auto" />
                  </div>

                  <button
                    onClick={downloadImage}
                    className="w-full mt-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 font-bold"
                  >
                    Download PNG
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