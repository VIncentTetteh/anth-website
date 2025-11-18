export const metadata = {
  title: "Delivery & Governance",
  description:
    "Understand The ANTH's joint governance model, including steering committees, agile squads, sprint demos, and transparent reporting.",
};

const lanes = [
  {
    label: "Steering Committee",
    description:
      "Meets on a regular cadence to set priorities, unblock decisions, and align on risk and regulatory posture.",
    bullets: [
      "Membership from business, technology, and risk",
      "Reviews roadmap, risk register, and major design decisions",
      "Owns escalation paths and trade-offs",
    ],
  },
  {
    label: "Agile Squads",
    description:
      "Cross-functional teams that deliver increments mapped to journeys or platforms.",
    bullets: [
      "Work in sprints with clear definitions of done",
      "Demo working software to stakeholders regularly",
      "Own quality, reliability, and documentation",
    ],
  },
  {
    label: "Transparent Reporting",
    description:
      "Operational dashboards, release notes, and compliance evidence shared with partners.",
    bullets: [
      "Delivery, risk, and incident reporting streams",
      "Change logs aligned to CAB expectations",
      "Compliance packs generated from source systems",
    ],
  },
];

export default function DeliveryGovernancePage() {
  return (
    <div className="space-y-10 lg:space-y-12">
      <section className="section-card section-appear">
        <div className="section-inner">
          <div className="section-kicker">
            <span className="section-kicker-dot" />
            <span>Delivery & Governance</span>
          </div>
          <h1 className="section-title text-balance text-slate-50">
            Joint governance that connects steering decisions to squad delivery.
          </h1>
          <p className="section-body text-sm text-slate-300/95">
            The ANTH operates as a transparent partner. Governance is not paperwork at the
            end—it is woven into how we plan, deliver, and operate every platform.
          </p>
        </div>
      </section>

      <section className="section-card section-appear-delayed">
        <div className="section-inner">
          <div className="section-grid section-grid-2">
            {lanes.map((lane) => (
              <article key={lane.label} className="card-ambient">
                <p className="card-kicker">{lane.label}</p>
                <h2 className="card-title">{lane.description}</h2>
                <ul className="mt-3 space-y-2 text-xs text-slate-300/95">
                  {lane.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 border-l border-amber-300/40 pl-3"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.9)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-700/70 bg-slate-900/80 p-4 text-xs text-slate-200/90">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Delivery loop
            </p>
            <p className="mt-2">
              Visually, we represent the governance loop as a web: steering committee at the
              centre, connected to squads, environments, and reporting streams. Arcs show how
              decisions propagate into code, and how telemetry flows back into governance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
