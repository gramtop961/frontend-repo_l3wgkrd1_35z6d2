import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Progetti' },
    { href: '#contact', label: 'Contatti' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-slate-950/80 to-slate-950/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-900">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight">Il Mio Portfolio</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-white px-3 py-1.5 font-medium text-slate-900 hover:bg-white/90"
          >
            Collaboriamo
          </a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/90 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-white/90">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-md bg-white px-3 py-2 text-center font-medium text-slate-900"
              onClick={() => setOpen(false)}
            >
              Collaboriamo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
