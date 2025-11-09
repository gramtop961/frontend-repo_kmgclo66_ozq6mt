import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Car, Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Love' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-[#0b0f1a]/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-[#0b0f1a]">
            <Car className="h-4 w-4" />
          </span>
          <span className="font-extrabold tracking-tight">UX Racing</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <button className="text-white md:hidden" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <nav className="mx-auto max-w-7xl px-6 pb-4 md:hidden">
          <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-4 text-white/80">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-lg px-3 py-2 hover:bg-white/10">
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="w-full bg-[#070b12] py-10 text-white">
    <div className="mx-auto max-w-7xl px-6 text-sm text-white/60 md:px-10">
      © {new Date().getFullYear()} UX Racing — Designed with pace and precision.
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
