import React from 'react';
import { PenTool, Layout, Cog, Palette } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Product Strategy',
    desc: 'Research, flows, and measurable goals aligned to business outcomes.'
  },
  {
    icon: Layout,
    title: 'Interface Design',
    desc: 'Systematic, scalable UI kits and polished visual design.'
  },
  {
    icon: Cog,
    title: 'Prototyping',
    desc: 'Micro-interactions and motion that communicate intent and delight.'
  },
  {
    icon: Palette,
    title: 'Design Systems',
    desc: 'Tokens, components, and documentation that speed up teams.'
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-[#0b0f1a] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.12),transparent_40%),radial-gradient(circle_at_20%_90%,rgba(56,189,248,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="mb-10 text-4xl font-black sm:text-5xl">Services</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 p-3">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
