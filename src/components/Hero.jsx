import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-[#0b0f1a] via-[#0b1024] to-[#0b0f1a] text-white">
      {/* Interactive 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Vibrant gradient glow overlays (non-blocking) */}
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[60vh] w-[60vh] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-[-10%] h-[60vh] w-[60vh] rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 pt-28 pb-16 md:px-10 lg:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
          <Rocket className="h-4 w-4 text-fuchsia-400" />
          UI/UX Designer — Automotive Aesthetics
        </span>
        <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
            Racing-grade
          </span>{' '}
          interfaces for bold brands
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          I craft immersive, high-performance product experiences inspired by motorsport—fast,
          precise, and unforgettable.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-[#0b0f1a] shadow-lg shadow-fuchsia-500/30 transition hover:scale-[1.02] hover:shadow-cyan-400/30"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
