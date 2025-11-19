import { HomeHero } from "@/components/home-hero";

export default function Home() {
  return (
    <div className="space-y-16 lg:space-y-20">
      {/* Hero with parallax */}
      <HomeHero />

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

      {/* Capabilities & services */}
      <section className="section-card" id="capabilities">
        <div className="section-inner">
          <div className="section-kicker">
            <span className="section-kicker-dot" />
            <span>What we do</span>
          </div>
          <h2 className="section-title text-slate-50">
            Bank-grade engineering and consulting for modern institutions.
          </h2>
          <p className="section-body text-sm text-slate-300/95">
            The ANTH partners with banks, fintechs, public-sector programmes, and scale-ups to
            design, build, and operate critical platforms—with a broad bench of senior
            architects, engineers, and delivery leaders.
          </p>

          <div className="section-grid section-grid-2">
            <div className="card-ambient">
              <p className="card-kicker">Platform engineering</p>
              <h3 className="card-title">Payments, switching, and settlement rails.</h3>
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
              <p className="card-kicker">Cloud & DevOps</p>
              <h3 className="card-title">Production-ready delivery pipelines.</h3>
              <p className="card-body">
                From containerised workloads and infrastructure-as-code to observability and
                SRE practices, we ensure critical systems stay healthy and auditable.
              </p>
              <div className="chip-row">
                <span className="chip">CI/CD design</span>
                <span className="chip">SRE & observability</span>
                <span className="chip">Cloud & on‑prem</span>
                <span className="chip">Runbooks & playbooks</span>
              </div>
            </div>

            <div className="card-ambient">
              <p className="card-kicker">Advisory & architecture</p>
              <h3 className="card-title">Board-level technology guidance.</h3>
              <p className="card-body">
                We work with executive teams and boards to shape technology roadmaps, operating
                models, and governance that match regulatory expectations.
              </p>
              <div className="chip-row">
                <span className="chip">Architecture boards</span>
                <span className="chip">Technology strategy</span>
                <span className="chip">Risk & controls</span>
              </div>
            </div>

            <div className="card-ambient">
              <p className="card-kicker">Delivery & talent</p>
              <h3 className="card-title">Broad, embedded squads of experts.</h3>
              <p className="card-body">
                Cross-functional squads of engineers, designers, analysts, and delivery leads
                embed with your teams to ship meaningful change without chaos.
              </p>
              <div className="chip-row">
                <span className="chip">Embedded squads</span>
                <span className="chip">Delivery leadership</span>
                <span className="chip">Capability build-out</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talent & leadership */}
      <section className="section-card" id="talent">
        <div className="section-inner">
          <div className="section-kicker">
            <span className="section-kicker-dot" />
            <span>Talent network</span>
          </div>
          <h2 className="section-title text-slate-50">
            A broad bench of senior, board-facing talent.
          </h2>
          <div className="section-grid section-grid-2">
            <div className="card-ambient">
              <p className="card-kicker">Leadership & governance</p>
              <h3 className="card-title">People who speak both code and boardroom.</h3>
              <p className="card-body">
                Our partners and principals have led banking transformations, payments
                programmes, and regulatory engagements across Africa and beyond.
              </p>
              <div className="chip-row">
                <span className="chip">CTO & CIO advisors</span>
                <span className="chip">Regulator engagement</span>
                <span className="chip">Steering committees</span>
              </div>
            </div>

            <div className="card-ambient">
              <p className="card-kicker">Specialist guilds</p>
              <h3 className="card-title">Deep engineering and design capability.</h3>
              <p className="card-body">
                Guilds of backend, frontend, data, and UX specialists maintain standards and
                accelerate delivery across all ANTH engagements.
              </p>
              <div className="chip-row">
                <span className="chip">Backend & API engineers</span>
                <span className="chip">SRE & DevOps</span>
                <span className="chip">Product & UX</span>
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
