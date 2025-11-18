import Image from "next/image";

export const metadata = {
  title: "Capabilities & Services",
  description:
    "Explore The ANTH's capabilities across bank-grade payments, full-stack engineering, and enterprise security and compliance.",
};

const capabilities = [
  {
    label: "Bank-grade engineering",
    title: "National payment rails and critical transaction flows.",
    body: "We architect and build core payment and settlement platforms that meet central bank expectations and withstand national peaks.",
    chips: ["GIP & ACH", "Ghana.gov integrations", "Switch & scheme adapters", "Settlement & reconciliation"],
  },
  {
    label: "Full-stack delivery",
    title: "From backend protocols to customer experiences.",
    body: "Our squads span backend, frontend, DevOps, and SRE—so the same team that writes APIs also owns their deployment, monitoring, and change path.",
    chips: ["Event-driven architectures", "API-first platforms", "Design systems", "Cloud & on-prem pipelines"],
  },
  {
    label: "Security & compliance",
    title: "Controls, evidence, and continuous assurance.",
    body: "We embed security into design reviews, pipelines, and operations, aligning to regulatory expectations and global best practice.",
    chips: ["Access & identity", "Data protection", "Change & release controls", "Audit-ready logging"],
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
            Bank-grade engineering, full-stack execution, and governed delivery.
          </h1>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/70">
            <Image
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
              alt="Diagram of payment rails, APIs, and cloud infrastructure representing The ANTH's capabilities."
              width={1200}
              height={420}
              className="h-40 w-full object-cover opacity-95"
            />
          </div>
          <p className="section-body mt-5 text-sm text-slate-300/95">
            The ANTH focuses on a small set of capabilities executed deeply. Our work spans
            national payment schemes, enterprise platforms, and the governance required to
            run them safely.
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
