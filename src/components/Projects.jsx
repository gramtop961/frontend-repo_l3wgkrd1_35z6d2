export default function Projects() {
  const projects = [
    {
      title: 'AI Study Copilot',
      description:
        'Assistente AI per studenti con riassunti, flashcard e quiz generati automaticamente.',
      tags: ['Next.js', 'OpenAI', 'Pinecone'],
      link: '#',
    },
    {
      title: 'Founder CRM',
      description:
        'Mini CRM per early-stage founders: contatti, funnel, note e follow-up intelligenti.',
      tags: ['FastAPI', 'MongoDB', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Vision Demo',
      description:
        'Pipeline di computer vision per classificazione e detection con UI interattiva.',
      tags: ['PyTorch', 'React', 'Inference'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Progetti in evidenza</h2>
            <p className="mt-2 text-white/70">Una selezione di lavori recenti.</p>
          </div>
          <a href="#contact" className="hidden rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-white/90 sm:inline-block">
            Parliamo del tuo progetto
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:translate-y-[-2px] hover:bg-white/10">
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/30" />
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.link} className="mt-4 inline-block text-sm font-medium text-indigo-300 hover:text-white">
                Dettagli →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
