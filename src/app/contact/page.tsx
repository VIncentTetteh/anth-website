export const metadata = {
  title: "Contact Us",
  description:
    "Contact The ANTH to discuss banking, fintech, and enterprise engineering partnerships from Ghana to the wider continent.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10 lg:space-y-12">
      <section className="section-card section-appear">
        <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <div className="section-kicker">
              <span className="section-kicker-dot" />
              <span>Contact</span>
            </div>
            <h1 className="section-title text-balance text-slate-50">Let’s map your next platform.</h1>
            <p className="section-body text-sm text-slate-300/95">
              Share enough detail for us to understand your current rails, constraints, and
              ambitions. We’ll follow up with clarifying questions and a proposal for how The
              ANTH can help.
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-300/95">
            <div>
              <p className="font-medium text-slate-100">Ghana office</p>
              <p>Accra, Ghana · Operating across African and global partner markets.</p>
            </div>
            <div>
              <p className="font-medium text-slate-100">Channels</p>
              <p>Email, secure collaboration spaces, and structured steering forums agreed
                with each partner.</p>
            </div>
            <div>
              <p className="font-medium text-slate-100">Social</p>
              <ul className="mt-1 space-y-1">
                <li>LinkedIn · The ANTH (Ananse Ntentan Technology Hub)</li>
                <li>Technical writing, case studies, and architecture notes (coming soon).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card section-appear-delayed">
        <div className="section-inner">
          <form className="grid gap-4 text-xs text-slate-200 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Name
              </label>
              <input
                type="text"
                className="h-9 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                placeholder="Your full name"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Organisation
              </label>
              <input
                type="text"
                className="h-9 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                placeholder="Bank, fintech, or enterprise"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Email
              </label>
              <input
                type="email"
                className="h-9 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                placeholder="work.email@example.com"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Region / Market
              </label>
              <input
                type="text"
                className="h-9 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                placeholder="e.g. Ghana, West Africa"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Context & objectives
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                placeholder="Briefly describe your current platforms, constraints, and what success would look like."
              />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-3 pt-1">
              <p className="text-[11px] text-slate-400">
                This form is illustrative. In production, submissions would be routed to a
                secure inbox or partner portal.
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-medium text-slate-950 shadow-[0_0_30px_rgba(251,191,36,0.6)] transition hover:bg-amber-300"
              >
                Preview engagement
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
