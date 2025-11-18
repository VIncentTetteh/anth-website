export const metadata = {
  title: "Our Team",
  description:
    "Meet the engineering leads, architects, and delivery specialists who shape The ANTH's bank-grade platforms and governance models.",
};

const groups = [
  {
    name: "Architecture & Platforms",
    description:
      "Designing the core payment fabrics, integration patterns, and security boundaries.",
    roles: [
      "Principal architects for payments, core banking, and switching",
      "Platform engineers focused on reliability and observability",
      "Data and reporting specialists for regulators and partners",
    ],
  },
  {
    name: "Delivery Squads",
    description:
      "Cross-functional squads handling feature delivery, integrations, and migration.",
    roles: [
      "Squad leads and product owners aligned to banking journeys",
      "Full-stack engineers across backend, frontend, and DevOps",
      "QA and UAT specialists embedded into each squad",
    ],
  },
  {
    name: "Security & Governance",
    description:
      "Guardians of compliance, risk, and operational discipline.",
    roles: [
      "Security engineers and compliance advisors",
      "Risk & control specialists for change, release, and incident",
      "Governance coordinators for steering committees and boards",
    ],
  },
];

export default function TeamPage() {
  return (
    <div className="space-y-10 lg:space-y-12">
      <section className="section-card section-appear">
        <div className="section-inner">
          <div className="section-kicker">
            <span className="section-kicker-dot" />
            <span>Our Team</span>
          </div>
          <h1 className="section-title text-balance text-slate-50">
            Small, senior squads with clear lines of accountability.
          </h1>
          <p className="section-body text-sm text-slate-300/95">
            The ANTH teams are intentionally compact, multi-disciplinary, and designed for
            regulated environments. We prioritise engineers and leaders who can work
            comfortably with both code and committees.
          </p>
        </div>
      </section>

      <section className="section-card">
        <div className="section-inner section-appear-delayed">
          <div className="section-grid section-grid-2">
            {groups.map((group) => (
              <article
                key={group.name}
                className="card-ambient transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="card-kicker">{group.name}</p>
                <h2 className="card-title">{group.description}</h2>
                <ul className="mt-3 space-y-2 text-xs text-slate-300/95">
                  {group.roles.map((role) => (
                    <li
                      key={role}
                      className="flex items-start gap-2 border-l border-amber-300/40 pl-3"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.9)]" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
