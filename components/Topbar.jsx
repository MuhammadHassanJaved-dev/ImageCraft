'use client';

export default function Topbar() {
  return (
    <div className="h-16 w-full bg-white/5 border-b border-white/10 backdrop-blur-md flex items-center justify-between px-6">
      
      <h2 className="text-white font-medium">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">
        <button className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition">
          Upgrade
        </button>
      </div>

    </div>
  );
}