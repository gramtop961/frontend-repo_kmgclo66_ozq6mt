import React from 'react';
import { Star } from 'lucide-react';

const quotes = [
  {
    name: 'Ava Rios',
    role: 'Head of Product, VoltDrive',
    text: 'The dashboard feels like a cockpit—everything is where you expect it, and it just flies.'
  },
  {
    name: 'Marcus Lee',
    role: 'CEO, Apex Motors',
    text: 'Our conversion rate jumped 38% after the redesign. It’s not just pretty—it performs.'
  },
  {
    name: 'Lena Park',
    role: 'Design Lead, TrackMate',
    text: 'Collaborating felt like a well-oiled pit stop. Fast, precise, and thoughtful.'
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative w-full bg-[#070b12] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(190,242,100,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="mb-10 text-4xl font-black sm:text-5xl">Testimonials</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-white/90">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/70">
                <span className="font-semibold text-white">{q.name}</span> — {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
