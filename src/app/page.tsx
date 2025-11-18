export default function Home() {
  return (
    <div className="space-y-10 lg:space-y-14">
      {/* Hero */}
      <section className="section-card section-appear overflow-hidden">
        <div className="web-orbit">
          <div className="web-node-ring" />
          <div className="web-node-ring" />
          <div className="web-node-ring" />
          <div className="web-node-ring" />
        </div>
        <div className="section-inner relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <div className="section-kicker">
              <span className="section-kicker-dot" />
              <span>Delivering engineering innovation across a connected world</span>
            </div>
            <h1 className="section-title mt-2 text-balance text-slate-50">
              Afro-futurist engineering for bank-grade, always-on systems.
            </h1>
            <p className="section-body text-sm leading-relaxed text-slate-300/95 sm:text-base">
              The ANTH (Ananse Ntentan Technology Hub) is a specialist engineering partner
              crafting resilient payment networks, secure platforms, and governed delivery
              models for banks, fintechs, and enterprises across Africa and beyond.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 font-medium text-slate-950 shadow-[0_0_40px_rgba(251,191,36,0.7)] transition hover:bg-amber-300"
              >
                Engage the ANTH
                <span aria-hidden>↗</span>
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/60 bg-slate-900/80 px-4 py-2 text-slate-100 transition hover:border-amber-300/70 hover:text-amber-100"
              >
                Explore capabilities
              </a>
              <span className="text-[11px] text-slate-400/95">
                Bank-grade payments · Full-stack delivery · Enterprise governance
              </span>
            </div>
          </div>

          <div className="relative flex flex-col gap-3 rounded-3xl border border-slate-700/60 bg-slate-900/80 p-4 text-xs shadow-[0_0_80px_rgba(15,23,42,1)]">
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

      {/* Mission & philosophy */}
      <section className="section-card section-appear-delayed" id="about">
        <div className="section-inner">
          <div className="section-kicker">
            <span className="section-kicker-dot" />
            <span>Mission & philosophy</span>
          </div>
          <h2 className="section-title text-balance text-slate-50">
            Ananse Ntentan – a web of craft, resilience, and precision.
          </h2>
          <div className="mt-4 grid gap-6 text-sm text-slate-300/95 lg:grid-cols-2">
            <p>
              In Akan folklore, Ananse weaves intricate webs that are both beautiful and
              resilient. The ANTH takes this motif into modern engineering—designing
              interconnected systems that anticipate failure, self-heal where possible, and
              remain observable end-to-end.
            </p>
            <p>
              Our philosophy: small, expert squads, accountable governance, and disciplined
              operations. We bring together architecture, engineering, and delivery to ship
              platforms that banking regulators trust and customers enjoy using.
            </p>
          </div>
          <div className="section-grid section-grid-2 mt-6">
            <div className="card-ambient">
              <p className="card-kicker">What we optimise for</p>
              <h3 className="card-title">Availability, integrity, and clarity.</h3>
              <p className="card-body">
                We build for uptime, auditability, and operational clarity—so when incidents
                happen, teams can respond with speed, context, and confidence.
              </p>
              <div className="chip-row">
                <span className="chip">Bank-grade SLAs</span>
                <span className="chip">First-class observability</span>
                <span className="chip">Regulator-ready reporting</span>
              </div>
            </div>
            <div className="card-ambient">
              <p className="card-kicker">How we work</p>
              <h3 className="card-title">Joint governance, transparent delivery.</h3>
              <p className="card-body">
                Steering committees set direction, agile squads deliver increments, and
                transparent reporting keeps every partner aligned on risk, scope, and value.
              </p>
              <div className="chip-row">
                <span className="chip">Steering & architecture boards</span>
                <span className="chip">Squad-aligned roadmaps</span>
                <span className="chip">Evidence-based decisions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities preview */}
      <section className="section-card" id="capabilities">
        <div className="section-inner">
          <div className="section-kicker">
            <span className="section-kicker-dot" />
            <span>Core capabilities</span>
          </div>
          <h2 className="section-title text-slate-50">
            Bank-grade engineering across the full stack.
          </h2>
          <div className="section-grid section-grid-2">
            <div className="card-ambient">
              <p className="card-kicker">Bank-grade platforms</p>
              <h3 className="card-title">Payments, switching, and settlement.</h3>
              <p className="card-body">
                Architected for national-scale load and regulatory resilience—GIP, ACH,
                Ghana.gov, mobile money, and custom switch integrations.
              </p>
              <div className="chip-row">
                <span className="chip">GIP & ACH</span>
                <span className="chip">Ghana.gov rails</span>
                <span className="chip">Mobile money networks</span>
                <span className="chip">Card & account rails</span>
              </div>
            </div>
            <div className="card-ambient">
              <p className="card-kicker">Full-stack execution</p>
              <h3 className="card-title">Backend, frontend, and DevOps as one fabric.</h3>
              <p className="card-body">
                From protocol adapters and APIs to responsive experiences and pipelines—we
                deliver the full surface area required for modern digital banking.
              </p>
              <div className="chip-row">
                <span className="chip">Cloud & on-prem</span>
                <span className="chip">API platforms</span>
                <span className="chip">CI/CD & SRE</span>
                <span className="chip">Design systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="section-card" id="contact">
        <div className="section-inner flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="section-kicker">
              <span className="section-kicker-dot" />
              <span>Partner with The ANTH</span>
            </div>
            <h2 className="section-title text-slate-50">
              Ready to modernise your banking or fintech stack?
            </h2>
            <p className="section-body text-sm text-slate-300/95">
              Share your context—regulatory environment, existing platforms, and desired
              outcomes—and we’ll propose a calibrated engineering and governance model.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-3 text-xs text-slate-300/95">
            <p className="font-medium text-slate-100">Ghana office</p>
            <p>Accra, Ghana · Operating across African and global partner markets.</p>
            <p className="font-medium text-slate-100">Contact routes</p>
            <p>
              For partnership and banking solutions, reach out via the contact page or your
              relationship channel.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
