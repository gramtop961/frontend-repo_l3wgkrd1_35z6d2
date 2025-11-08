import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Contattami</h2>
          <p className="mt-2 text-white/70">Parliamo di idee, progetti o collaborazioni.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center gap-3 text-white/90">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-900">
                <Mail />
              </div>
              <div>
                <div className="font-medium">Email</div>
                <a href="mailto:hello@example.com" className="text-sm text-white/70 hover:text-white">
                  hello@example.com
                </a>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Preferisci i social? Mi trovi su LinkedIn e GitHub. Rispondo entro 24-48h.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Grazie! Ti risponderò presto.');
              e.currentTarget.reset();
            }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-white/80">Nome</label>
                <input required type="text" className="mt-1 w-full rounded-md border border-white/10 bg-slate-900/50 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="Il tuo nome" />
              </div>
              <div>
                <label className="block text-sm text-white/80">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-white/10 bg-slate-900/50 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="tu@email.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/80">Messaggio</label>
              <textarea required rows={4} className="mt-1 w-full rounded-md border border-white/10 bg-slate-900/50 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="Scrivimi su cosa stai lavorando" />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 font-medium text-slate-900 hover:bg-white/90">
              <Send size={16} /> Invia
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
