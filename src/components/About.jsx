import React from 'react';
import { User, Gauge } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0a0f18] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.15),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(34,211,238,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
          <User className="h-4 w-4 text-cyan-300" />
          About the Designer
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black sm:text-5xl">
              Designing at the speed of a race car
            </h2>
            <p className="mt-4 text-white/80">
              I merge aesthetics with performance. Every pixel has a purpose, every interaction is tuned
              for flow. With a background in automotive design, I bring the precision of a pit crew to
              digital products.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-3xl font-extrabold text-fuchsia-400">8+</p>
                <p className="text-xs text-white/70">Years Experience</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-3xl font-extrabold text-cyan-300">120+</p>
                <p className="text-xs text-white/70">Projects Shipped</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-3xl font-extrabold text-lime-300">20</p>
                <p className="text-xs text-white/70">Awards</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Gauge className="h-5 w-5 text-fuchsia-400" />
              <h3 className="text-lg font-semibold">Design Stack</h3>
            </div>
            <ul className="grid grid-cols-2 gap-3 text-sm text-white/80 sm:grid-cols-3">
              <li className="rounded-lg bg-white/5 px-3 py-2">User Research</li>
              <li className="rounded-lg bg-white/5 px-3 py-2">Wireframing</li>
              <li className="rounded-lg bg-white/5 px-3 py-2">Prototyping</li>
              <li className="rounded-lg bg-white/5 px-3 py-2">Design Systems</li>
              <li className="rounded-lg bg-white/5 px-3 py-2">Motion Design</li>
              <li className="rounded-lg bg-white/5 px-3 py-2">3D/AR</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
