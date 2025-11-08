import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-fuchsia-500/10 to-cyan-500/20" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Rocket size={14} />
              <span>AI Student • Entrepreneur</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ciao, sono <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">un creator di soluzioni AI</span>
            </h1>
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              Costruisco progetti che uniscono ricerca, prodotto e impatto reale. Qui trovi i miei lavori, competenze e come contattarmi.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                Esplora i progetti
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white">
                  <Github />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white">
                  <Linkedin />
                </a>
                <a href="#contact" aria-label="Email" className="hover:text-white">
                  <Mail />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 -z-0 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/30 blur-3xl" aria-hidden />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid grid-cols-2 gap-4 text-white/90">
                <Stat label="Anni di studio" value="3+" />
                <Stat label="Progetti AI" value="8" />
                <Stat label="Startup" value="1" />
                <Stat label="Hackathon" value="4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-white/70">{label}</div>
    </div>
  );
}
