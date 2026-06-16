'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import logo from "../public/image.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/Features', label: 'Features' },
    { href: '/About', label: 'About' },
    { href: '/Contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-violet-500/20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between h-16">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <Image
                  src={logo}
                  alt="ImageCraft Logo"
                  width={42}
                  height={42}
                  className="rounded-lg transition duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-violet-500 blur-xl opacity-30 group-hover:opacity-60 transition" />
              </div>

              <span className="text-xl font-bold text-white">
                Image
                <span className="text-violet-400">
                  Craft
                </span>
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-sm font-medium transition-all duration-300
                      ${
                        active
                          ? 'text-violet-400'
                          : 'text-slate-300 hover:text-white'
                      }
                    `}
                  >
                    {item.label}

                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] bg-violet-500 transition-all duration-300
                        ${
                          active
                            ? 'w-full'
                            : 'w-0 group-hover:w-full'
                        }
                      `}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? (
                <X size={26} />
              ) : (
                <Menu size={26} />
              )}
            </button>

          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden
          ${
            isOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-slate-950/95 backdrop-blur-xl border-l border-violet-500/20 z-50
        transform transition-transform duration-500 ease-out md:hidden
        ${
          isOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col px-6 gap-2 mt-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-xl transition-all duration-300
              ${
                pathname === item.href
                  ? 'bg-violet-600 text-white'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavBar;