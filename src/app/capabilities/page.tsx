import Image from "next/image";

export const metadata = {
  title: "Note: The user approved the implementation plan to update the capabilities page.",
  description:
    "Explore The ANTH's capabilities across mission-critical platforms, full-stack engineering, and high-assurance enterprise security.",
};

const capabilities = [
  {
    label: "Mission-critical engineering",
    title: "High-performance rails for health, finance, and logistics.",
    body: "We architect and build core platforms that must not fail—whether that's national payment rails, real-time logistics tracking, or secure health record systems.",
    chips: ["Payment schemes", "Health data exchanges", "Logistics networks", "High-volume processing"],
  },
  {
    label: "Full-stack delivery",
    title: "End-to-end ownership, from protocol to pixel.",
    body: "Our cross-functional squads span backend, frontend, data, and SRE. We don't just write code; we own the deployment, quality, and operational lifecycle of the product.",
    chips: ["Event-driven architectures", "API-first ecosystems", "Design systems", "Cloud & edge infrastructure"],
  },
  {
    label: "Security & compliance",
    title: "Regulatory rigour and continuous assurance.",
    body: "We embed security and compliance into every stage of the lifecycle, ensuring systems meet ISO, PCI-DSS, HIPAA, and GDPR standards by design.",
    chips: ["Identity & access (IAM)", "Data sovereignty", "Audit trails", "Automated compliance"],
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="space-y-10 lg:space-y-12">
      <section className="section-card section-appear">
        <div className="section-inner">
          <div className="section-kicker">
            <span className="section-kicker-dot" />
            <span>Capabilities</span>
          </div>
          <h1 className="section-title text-balance text-slate-50">
            Engineering for high-assurance, mission-critical environments.
          </h1>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/70">
            <Image
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
              alt="Diagram of interconnected high-assurance systems representing The ANTH's technical capabilities."
              width={1200}
              height={420}
              className="h-40 w-full object-cover opacity-95"
            />
          </div>
          <p className="section-body mt-5 text-sm text-slate-300/95">
            The ANTH focuses on a small set of high-impact capabilities. Our work spans
            national infrastructure, complex enterprise datasets, and the governance required to
            run them safely at scale.
          </p>
        </div>
      </section>

      <section className="section-card section-appear-delayed">
        <div className="section-inner">
          <div className="section-grid section-grid-2">
            {capabilities.map((capability) => (
              <article key={capability.label} className="card-ambient">
                <p className="card-kicker">{capability.label}</p>
                <h2 className="card-title">{capability.title}</h2>
                <p className="card-body text-xs sm:text-sm">{capability.body}</p>
                <div className="chip-row">
                  {capability.chips.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
