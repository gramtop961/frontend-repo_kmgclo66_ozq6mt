import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

const projects = [
  {
    title: 'Pit Stop Booking UX',
    desc: 'A seamless scheduling flow for track-day enthusiasts with real-time pit availability.',
    tags: ['Product Design', 'Real-time UX', 'Mobile'],
    color: 'from-fuchsia-500/20 to-cyan-400/20',
  },
  {
    title: 'Telemetry Dashboard',
    desc: 'High-contrast data viz for drivers: lap time deltas, tire temps, and aero efficiency.',
    tags: ['Dashboard', 'Data Viz', 'Web'],
    color: 'from-amber-300/20 to-lime-300/20',
  },
  {
    title: 'EV Charging Finder',
    desc: 'Map-first UX to locate, reserve, and pay for fast chargers on long road trips.',
    tags: ['Maps', 'Payments', 'Mobile'],
    color: 'from-sky-400/20 to-violet-400/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#070b12] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(236,72,153,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-4xl font-black sm:text-5xl">Signature Projects</h2>
          <a href="#contact" className="text-sm text-white/70 hover:text-white">Request case study</a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.color} p-6 transition hover:scale-[1.01]`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-white/80">{p.desc}</p>
                </div>
                <button className="rounded-full border border-white/20 bg-white/10 p-2 text-white transition group-hover:bg-white/20">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-xs text-white/60">
                <Play className="h-3.5 w-3.5" />
                Tap to explore prototype
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
