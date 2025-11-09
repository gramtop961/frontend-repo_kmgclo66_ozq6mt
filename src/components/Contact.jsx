import React, { useState } from 'react';
import { Send, Mail, Phone, Car } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent! I’ll get back at full throttle.');
  };

  return (
    <section id="contact" className="relative w-full bg-[#0b0f1a] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_100%_0%,rgba(236,72,153,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-4xl font-black sm:text-5xl">Let’s build something fast</h2>
          <p className="max-w-xl text-white/80">
            Brief me on your product challenge. I’ll respond within a lap.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <form onSubmit={onSubmit} className="md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400/60"
                placeholder="Your name"
              />
              <input
                required
                type="email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400/60"
                placeholder="Email"
              />
            </div>
            <input
              className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400/60"
              placeholder="Subject"
            />
            <textarea
              required
              rows={5}
              className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-cyan-400/60"
              placeholder="Tell me about your project"
            />
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 font-semibold text-[#0b0f1a] shadow-lg shadow-fuchsia-500/30 transition hover:scale-[1.02]"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
            {status && (
              <p className="mt-3 text-sm text-lime-300">{status}</p>
            )}
          </form>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-2 flex items-center gap-2 text-cyan-300">
                <Mail className="h-5 w-5" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <a href="mailto:pit@uxracing.design" className="text-white/80 hover:text-white">pit@uxracing.design</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-2 flex items-center gap-2 text-fuchsia-300">
                <Phone className="h-5 w-5" />
                <h3 className="font-semibold">Phone</h3>
              </div>
              <a href="tel:+1234567890" className="text-white/80 hover:text-white">+1 (234) 567-890</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-2 flex items-center gap-2 text-lime-300">
                <Car className="h-5 w-5" />
                <h3 className="font-semibold">Location</h3>
              </div>
              <p className="text-white/80">Remote • Track-side friendly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
