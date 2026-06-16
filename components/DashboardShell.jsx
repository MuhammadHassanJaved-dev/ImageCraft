'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardShell({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#0b1020] text-white">

      {/* LEFT SIDEBAR */}
      <div className="w-64 bg-white/5 border-r border-white/10 p-6">

        <h1 className="text-xl font-bold mb-8">
          ImageCraft AI
        </h1>

        <div className="space-y-3">

          <Link href="/dashboard" className="block text-gray-300 hover:text-white">
            Home
          </Link>

          <Link href="/dashboard/compressor" className="block text-gray-300 hover:text-white">
            Compressor
          </Link>

          <Link href="/dashboard/background" className="block text-gray-300 hover:text-white">
            Background Remover
          </Link>

          <Link href="/dashboard/converter" className="block text-gray-300 hover:text-white">
            Converter
          </Link>

        </div>

      </div>

      {/* RIGHT SIDE (YOUR PAGE CONTENT) */}
      <div className="flex-1 p-8">
        {children}
      </div>

    </div>
  );
}