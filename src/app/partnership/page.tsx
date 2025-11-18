export const metadata = {
  title: "Partnership & Banking Solutions",
  description:
    "Discover how The ANTH partners with banks, fintechs, and enterprises to deliver integrated payment and platform solutions.",
};

const tracks = [
  {
    label: "Banking partnerships",
    body: "We partner with banks to modernise core rails, expose APIs securely, and launch new propositions without compromising control.",
    chips: ["Core & channel integration", "API gateways", "Digital banking journeys"],
  },
  {
    label: "Fintech enablement",
    body: "Fintechs rely on The ANTH for stable integrations into bank and national schemes, with clear SLAs and shared observability.",
    chips: ["Scheme connectivity", "Sandbox & certification", "Joint incident response"],
  },
  {
    label: "Enterprise & public sector",
    body: "We help enterprises and public institutions stitch together payment, identity, and service platforms into coherent ecosystems.",
    chips: ["Ghana.gov", "Revenue & collections", "Citizen and customer portals"],
  },
];

export default function PartnershipPage() {
  return (
    <div className="space-y-10 lg:space-y-12">
      <section className="section-card section-appear">
        <div className="section-inner">
          <div className="section-kicker">
            <span className="section-kicker-dot" />
            <span>Partnership</span>
          </div>
          <h1 className="section-title text-balance text-slate-50">
            Banking, fintech, and enterprise solutions built in partnership.
          </h1>
          <p className="section-body text-sm text-slate-300/95">
            The ANTH works best as a long-term partner—not a one-off vendor. We design
            integration patterns, operating models, and governance that keep joint delivery
            on track.
          </p>
        </div>
      </section>

      <section className="section-card section-appear-delayed">
        <div className="section-inner">
          <div className="section-grid section-grid-2">
            {tracks.map((track) => (
              <article key={track.label} className="card-ambient">
                <p className="card-kicker">{track.label}</p>
                <p className="card-body text-xs sm:text-sm">{track.body}</p>
                <div className="chip-row">
                  {track.chips.map((chip) => (
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
