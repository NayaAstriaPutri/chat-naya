'use client';

import Image from 'next/image';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 border-b border-sky-200/80 dark:border-slate-700/80 bg-white/85 dark:bg-[#141f34]/90 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl shadow-sm ring-2 ring-white dark:ring-slate-700">
            <Image
              src="/icon.svg"
              alt="Maskot Naya"
              fill
              sizes="44px"
              priority
            />
          </div>
          <div>
            <h1 className="font-bold text-base sm:text-lg leading-tight text-[#263b5a] dark:text-white">
              Naya Ai Asisten
            </h1>
            <p className="text-xs text-sky-700 dark:text-sky-200">
              Teman ceria untuk bertanya
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-3 py-2 rounded-full border border-amber-200 dark:border-slate-600 bg-amber-50 dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-slate-700 transition-colors text-amber-700 dark:text-amber-200 flex items-center justify-center"
            title={theme === 'dark' ? 'Gunakan tema terang' : 'Gunakan tema gelap'}
            aria-label={theme === 'dark' ? 'Gunakan tema terang' : 'Gunakan tema gelap'}
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} sm:mr-1.5`} />
            <span className="hidden sm:inline text-xs font-medium">{theme === 'dark' ? 'Terang' : 'Gelap'}</span>
          </button>
          <button
            type="button"
            className="px-3 py-2 rounded-full border border-sky-200 dark:border-slate-600 bg-sky-50 dark:bg-slate-800 text-sky-800 dark:text-sky-200 flex items-center justify-center"
            title="Status layanan"
            aria-label="Layanan aktif"
          >
            <i className="fas fa-circle text-emerald-500 sm:mr-1.5" style={{ fontSize: '0.65rem' }}></i>
            <span className="hidden sm:inline text-xs font-medium">Aktif</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
