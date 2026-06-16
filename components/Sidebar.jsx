'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Scissors, Image, RefreshCw } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Compressor', href: '/ImageCom', icon: Scissors },
    { name: 'Background', href: '/Background', icon: Image },
    { name: 'Converter', href: '/Convert', icon: RefreshCw },
  ];

  return (
    <div className="w-64 h-screen relative overflow-hidden border-r border-white/10 bg-slate-950 backdrop-blur-xl">

      {/* Glow Background */}
      <div className="absolute top-20 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 p-6">

        {/* LOGO */}
        <div className="flex items-center gap-3 mb-10">
          <img src="/logo.png" alt="logo" className="w-9 h-9 rounded-md" />

          <div className="text-lg font-bold text-white">
            Image<span className="text-cyan-400">Craft</span>
            <p className="text-xs text-slate-400 font-normal">
              AI Image Tools
            </p>
          </div>
        </div>

        {/* NAV */}
        <nav className="space-y-2">

          {links.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                  ${
                    active
                      ? 'bg-white/10 text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 hover:translate-x-1'
                  }
                `}
              >

                {/* ICON */}
                <Icon className="w-5 h-5 group-hover:scale-110 transition" />

                {/* TEXT */}
                <span className="font-medium">{link.name}</span>

                {/* ACTIVE DOT */}
                {active && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></span>
                )}

              </Link>
            );
          })}

        </nav>

      </div>
    </div>
  );
}