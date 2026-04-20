export default function WebsiteMockup() {
  const serviceCards = [
    { title: 'Website Sprint', subtitle: 'Landing + CMS', tone: 'from-blue-500/30 to-indigo-500/10' },
    { title: 'Paid Ads Set', subtitle: 'Meta + Google', tone: 'from-violet-500/30 to-fuchsia-500/10' },
    { title: 'Social Pack', subtitle: 'Posts + Stories', tone: 'from-cyan-500/30 to-sky-500/10' },
    { title: 'Invite Suite', subtitle: 'Events + RSVP', tone: 'from-pink-500/30 to-rose-500/10' },
  ]

  const metrics = [
    { label: '24h concept', value: 'Fast' },
    { label: '8 asset types', value: 'Multi' },
    { label: '100% brand-ready', value: 'Polish' },
  ]

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/20 bg-gradient-to-br from-[#111322]/95 via-[#101226]/90 to-[#0b0d17]/95 shadow-[0_40px_120px_-45px_rgba(91,84,255,0.75)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_80%_5%,rgba(192,132,252,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />

      <div className="relative flex h-12 items-center border-b border-white/10 bg-black/30 px-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[10px] text-white/60">
          justask.studio/dashboard
        </div>
      </div>

      <div className="relative space-y-4 p-4 sm:p-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/50 to-cyan-400/40 text-xs font-semibold text-white">
              JA
            </div>
            <div>
              <p className="text-xs font-semibold text-white">JustAsk</p>
              <p className="text-[10px] text-white/50">Launch-ready assets</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-white/55">
            <span>Work</span>
            <span>Services</span>
            <span>Process</span>
            <span className="rounded-full border border-cyan-300/40 bg-cyan-400/15 px-2 py-1 text-cyan-100">Start</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-200/70">Creative Operating Layer</p>
            <h4 className="mt-2 text-lg font-semibold leading-tight text-white">Launch-ready assets</h4>
            <p className="mt-1 max-w-xs text-[11px] text-white/60">
              Premium websites, ad creatives, flyers, invitations and social kits crafted for decisive brands.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {serviceCards.map((card) => (
                <div key={card.title} className={`rounded-xl border border-white/10 bg-gradient-to-br ${card.tone} p-2.5`}>
                  <p className="text-[10px] font-medium text-white">{card.title}</p>
                  <p className="text-[10px] text-white/60">{card.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-4 space-y-2.5">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-white/10 bg-black/30 p-2.5">
                <p className="text-[9px] uppercase tracking-wide text-white/50">{metric.label}</p>
                <p className="mt-1 text-xs font-medium text-white">{metric.value}</p>
              </div>
            ))}
            <div className="rounded-xl border border-violet-300/25 bg-violet-400/10 p-2.5">
              <p className="text-[10px] text-violet-100/90">Project preview</p>
              <div className="mt-2 h-10 rounded-lg border border-violet-200/25 bg-gradient-to-r from-violet-500/30 via-blue-500/25 to-cyan-400/25" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-wide text-white/50">Landing preview</p>
            <div className="flex gap-2">
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/60">Preview</span>
              <span className="rounded-md border border-cyan-300/40 bg-cyan-500/20 px-2 py-1 text-[10px] text-cyan-100">Publish</span>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            <div className="col-span-7 rounded-xl border border-white/10 bg-white/[0.03] p-2">
              <div className="h-2 w-2/3 rounded-full bg-white/60" />
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/20" />
              <div className="mt-1.5 h-1.5 w-5/6 rounded-full bg-white/20" />
              <div className="mt-3 h-6 w-24 rounded-lg bg-gradient-to-r from-violet-500/60 to-blue-400/60" />
            </div>
            <div className="col-span-5 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-2">
              <div className="h-full rounded-lg border border-white/15 bg-[radial-gradient(circle_at_30%_15%,rgba(196,181,253,0.45),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.35),transparent_45%)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
