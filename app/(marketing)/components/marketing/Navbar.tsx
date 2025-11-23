// components/marketing/Navbar.tsx
'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';

const navLinks = [
  { label: 'Acasă', href: '/' },
  { label: 'Formații', href: '/p/formatii' },
  { label: 'DJ', href: '/p/dj' },
  { label: 'Foto/Video', href: '/p/foto-video' },
  { label: 'Locații', href: '/p/locatii' },
  { label: 'Servicii', href: '/p/servicii' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-500 shadow-[0_0_30px_rgba(56,189,248,0.6)]">
            <span className="text-lg font-semibold text-white">B</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium text-slate-200">BookEvent.ro</span>
            <span className="text-[11px] text-sky-300/80">
              MVP în dezvoltare
            </span>
          </div>
        </div>

        {/* Links desktop */}
        <div className="hidden items-center gap-6 text-sm text-slate-200/80 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-sky-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1.5 text-sm font-medium text-slate-200 shadow-lg shadow-slate-900/50 transition hover:border-sky-400/70 hover:text-sky-200">
            Autentificare
          </button>
          <button className="rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500 px-5 py-1.5 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(56,189,248,0.8)] transition hover:brightness-110">
            Înregistrare
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200 lg:hidden"
          onClick={() => setOpen((x) => !x)}
        >
          <Menu className="h-4 w-4" />
          Meniu
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-slate-800/60 bg-slate-950/95 px-4 pb-4 pt-2 text-sm text-slate-200/80 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-1.5 transition hover:bg-slate-800/80 hover:text-sky-300"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <button className="flex-1 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs font-medium">
                Autentificare
              </button>
              <button className="flex-1 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500 px-3 py-1.5 text-xs font-semibold text-slate-950">
                Înregistrare
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
