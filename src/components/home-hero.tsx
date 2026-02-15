"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function useParallax(multiplier: number) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setOffset(y * multiplier);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [multiplier]);

  return offset;
}

export function HomeHero() {
  const webOffset = useParallax(0.12);
  const cardOffset = useParallax(0.06);

  return (
    <section className="section-card section-appear overflow-hidden relative">
      {/* Parallax web layer inside hero */}
      <div
        className="web-orbit"
        style={{
          transform: `translate3d(0, ${-webOffset}px, 0)`
        }}
      >
        <div className="web-node-ring" />
        <div className="web-node-ring" />
        <div className="web-node-ring" />
        <div className="web-node-ring" />
      </div>

      <div className="section-inner relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center">
        <div>
          <div className="section-kicker animate-fade-in-up">
            <span className="section-kicker-dot" />
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              Delivering engineering innovation across a connected world
            </span>
          </div>
          <h1 className="section-title mt-2 text-balance animate-fade-in-up delay-100">
            <span className="text-gradient-gold-shimmer">Afro-futurist engineering</span>{" "}
            <span className="text-slate-100">for mission-critical, always-on systems.</span>
          </h1>
          <p className="section-body text-lg leading-relaxed text-slate-300/95 animate-fade-in-up delay-200">
            The <span className="text-amber-100 font-medium">ANTH</span> (Ananse Ntentan Technology Hub) is a specialist engineering partner
            crafting resilient payment networks, secure platforms, and governed delivery
            models for finance, healthcare, logistics, and enterprises across Africa and beyond.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm animate-fade-in-up delay-300">
            <Link
              href="/#engage"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 px-5 py-2.5 font-medium text-slate-950 shadow-[0_0_40px_rgba(251,191,36,0.5)] transition hover:shadow-[0_0_60px_rgba(251,191,36,0.7)] hover:scale-105 duration-300"
            >
              Engage the ANTH
              <span aria-hidden>↗</span>
            </Link>
            <Link
              href="/#capabilities"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600/60 bg-slate-900/80 px-4 py-2 text-slate-100 transition hover:border-amber-300/70 hover:text-amber-100 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]"
            >
              Explore capabilities
            </Link>
            <span className="text-[13px] text-slate-400/95">
              High-assurance platforms · Full-stack delivery · Enterprise governance
            </span>
          </div>
        </div>

        <div
          className="relative flex flex-col gap-3 rounded-3xl border border-slate-700/60 bg-slate-900/80 p-4 text-xs shadow-[0_0_80px_rgba(15,23,42,1)]"
          style={{ transform: `translate3d(0, ${-cardOffset}px, 0)` }}
        >
          <div className="relative mb-2 overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
              alt="Abstract control room visual with interconnected banking systems and observability dashboards."
              width={640}
              height={360}
              className="h-40 w-full object-cover opacity-90"
              priority
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300/80">
              Engineering control room
            </p>
            <span className="rounded-full border border-amber-300/40 bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-100">
              Always observing
            </span>
          </div>
          <dl className="mt-3 grid grid-cols-2 gap-3 text-[11px] text-slate-300/90">
            <div className="space-y-1">
              <dt className="text-slate-400/80">Core focus</dt>
              <dd className="font-medium text-slate-100">Bank-grade platforms</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-slate-400/80">Coverage</dt>
              <dd className="font-medium text-slate-100">Ghana · Pan-African</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-slate-400/80">Interfaces</dt>
              <dd>GIP · ACH · Ghana.gov · Mobile money · Switches</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-slate-400/80">Assurance</dt>
              <dd>Security, observability, and joint governance built-in.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
