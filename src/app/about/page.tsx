import Image from "next/image";

export const metadata = {
  title: "About The ANTH",
  description:
    "Learn about the meaning of Ananse Ntentan, The ANTH's values, and our engineering philosophy rooted in Afro-futurist systems thinking.",
};

export default function AboutPage() {
  return (
    <div className="space-y-10 lg:space-y-12">
      <section className="section-card section-appear">
        <div className="section-inner">
          <div className="section-kicker">
            <span className="section-kicker-dot" />
            <span>About The ANTH</span>
          </div>
          <h1 className="section-title text-balance text-slate-50">
            Ananse Ntentan – a modern network spun from ancestral wisdom.
          </h1>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/70">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
              alt="Stylised web pattern inspired by Ananse folklore, representing resilient interconnected systems."
              width={1200}
              height={420}
              className="h-40 w-full object-cover opacity-95"
            />
          </div>
          <div className="mt-5 grid gap-8 text-sm text-slate-300/95 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <p>
                &ldquo;Ananse Ntentan&rdquo; translates to &ldquo;Ananse&rsquo;s web&rdquo; – a reference to the
                intricate, resilient webs woven by Ananse in Akan storytelling. These webs
                symbolise intelligence, creativity, and the ability to connect seemingly
                distant points into a coherent whole.
              </p>
              <p>
                The ANTH takes this metaphor into technology: we design networks, platforms,
                and delivery models that are deliberate, legible, and resilient under
                pressure. Each integration, each interface, each piece of governance is a
                strand in a purposeful web.
              </p>
            </div>
            <div className="card-ambient">
              <p className="card-kicker">At a glance</p>
              <h2 className="card-title">Technology hub, not just a vendor.</h2>
              <p className="card-body">
                We operate as an embedded engineering and governance partner—bridging
                strategy, architecture, and delivery for institutions that cannot afford to
                ship fragile systems.
              </p>
              <div className="chip-row">
                <span className="chip">Banking & payments</span>
                <span className="chip">Fintech & platforms</span>
                <span className="chip">Public sector rails</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="section-inner">
          <div className="section-kicker">
            <span className="section-kicker-dot" />
            <span>Values</span>
          </div>
          <h2 className="section-title text-slate-50">What anchors our engineering.</h2>
          <div className="section-grid section-grid-2">
            <div className="card-ambient">
              <p className="card-kicker">Craft</p>
              <h3 className="card-title">Systems as long-term artefacts.</h3>
              <p className="card-body">
                We treat platforms as living infrastructure. Code, APIs, and runbooks are
                designed for the next team to inherit—not just the next deadline.
              </p>
            </div>
            <div className="card-ambient">
              <p className="card-kicker">Resilience</p>
              <h3 className="card-title">Assume failure, prove recovery.</h3>
              <p className="card-body">
                We design for graceful degradation, clear incident response, and recovery
                playbooks that are tested, not theoretical.
              </p>
            </div>
            <div className="card-ambient">
              <p className="card-kicker">Precision</p>
              <h3 className="card-title">Every interface is a contract.</h3>
              <p className="card-body">
                From data models to SLAs, we are explicit. Precision reduces ambiguity,
                speeds audits, and protects customer trust.
              </p>
            </div>
            <div className="card-ambient">
              <p className="card-kicker">Partnership</p>
              <h3 className="card-title">Aligned incentives, shared outcomes.</h3>
              <p className="card-body">
                We embed governance and transparency so that success metrics are shared—and
                trade-offs are surfaced, not hidden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
