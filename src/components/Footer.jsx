export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/70">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Il Mio Portfolio — Tutti i diritti riservati</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#projects" className="hover:text-white">Progetti</a>
            <a href="#contact" className="hover:text-white">Contatti</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
