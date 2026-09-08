"use client";

const showcaseRows = [
  {
    label: "Primary Build",
    title: "Phodu Ecosystem",
    body: "Three surfaces I ship: a serverless learning platform for 37k+ learners, the community site that feeds it, and BetterBooks, a used-textbook marketplace.",
    meta: "3 surfaces · SST · AWS · Drizzle",
  },
  {
    label: "Growth Engine",
    title: "CrackIT",
    body: "SEO-led engineering entrance platform with CMS content, resource funnels, and checkout.",
    meta: "Sanity · Prisma · Razorpay · SEO",
  },
  {
    label: "Backend Scale",
    title: "546k+ Profiles",
    body: "Redis queues, enrichment waterfalls, LLM parsing, retries, provider limits, and monitoring.",
    meta: "Mercor · Redis · LLM · BrightData",
  },
] as const;

export function Shapes() {
  return (
    <div className="row-span-1 row-start-1 -mt-9 md:col-span-1 md:col-start-2 md:mt-0">
      <div
        className="hero-showcase relative mx-auto flex min-h-[31rem] max-w-[34rem] items-center justify-center"
        aria-label="Featured portfolio work"
      >
        <div className="pointer-events-none absolute inset-10 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="pointer-events-none absolute right-5 top-6 h-24 w-24 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-sm" />
        <div className="pointer-events-none absolute bottom-8 left-8 h-20 w-20 rounded-full border border-yellow-300/20 bg-yellow-300/10 blur-sm" />

        <div className="hero-showcase-stage relative w-full rounded-[2rem] border border-slate-700/80 bg-slate-950/80 p-5 shadow-2xl shadow-slate-950/70 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-yellow-300">
                Portfolio Signal
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-100">
                Backend + Product
              </h2>
            </div>
            <div className="hidden rounded-full border border-yellow-300/20 bg-yellow-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-yellow-200 sm:block">
              Primary Work
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {showcaseRows.map((row) => (
              <article
                key={row.title}
                className="hero-showcase-row rounded-2xl border border-white/10 bg-slate-900/75 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-yellow-300">
                      {row.label}
                    </p>
                    <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-100">
                      {row.title}
                    </h3>
                  </div>
                  <p className="rounded-full bg-slate-800/90 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                    {row.meta}
                  </p>
                </div>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-300">
                  {row.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {["Queues", "Payments", "SEO"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-3 text-center text-xs font-black uppercase tracking-[0.18em] text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
