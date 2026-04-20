import { motion } from 'framer-motion'

const assetPreviews = [
  {
    title: 'Instagram Post',
    meta: '1080 × 1080',
    shape: 'aspect-square',
    tone: 'from-violet-500/45 via-pink-400/25 to-slate-900/40',
  },
  {
    title: 'Flyer',
    meta: '1080 × 1350',
    shape: 'aspect-[3/4]',
    tone: 'from-cyan-500/45 via-blue-500/20 to-slate-900/40',
  },
  {
    title: 'Invitation',
    meta: 'Formal Edition',
    shape: 'aspect-[4/5]',
    tone: 'from-amber-300/30 via-rose-300/20 to-slate-900/50',
  },
  {
    title: 'Ad Banner',
    meta: '1200 × 628',
    shape: 'aspect-[16/7]',
    tone: 'from-indigo-500/45 via-fuchsia-400/20 to-slate-900/40',
  },
  {
    title: 'Story Creative',
    meta: '1080 × 1920',
    shape: 'aspect-[9/16]',
    tone: 'from-sky-400/45 via-violet-500/20 to-slate-900/35',
  },
]

export default function CreativeAssetsMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-[#101223]/95 via-[#13162b]/90 to-[#0c0f1b]/95 shadow-2xl backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.25),transparent_45%),radial-gradient(circle_at_90%_85%,rgba(192,132,252,0.28),transparent_45%)]" />
      <div className="relative flex h-10 items-center justify-between border-b border-white/10 bg-black/25 px-3">
        <p className="text-[10px] font-semibold tracking-[0.18em] text-white/70 uppercase">Creative Assets</p>
        <p className="text-[10px] text-white/45">5 deliverables</p>
      </div>

      <div className="relative grid h-[calc(100%-2.5rem)] grid-cols-12 gap-2 p-3">
        {assetPreviews.map((asset, index) => {
          const span =
            asset.title === 'Ad Banner'
              ? 'col-span-12'
              : asset.title === 'Story Creative'
                ? 'col-span-3'
                : asset.title === 'Flyer'
                  ? 'col-span-3'
                  : asset.title === 'Invitation'
                    ? 'col-span-3'
                    : 'col-span-3'

          return (
            <motion.article
              key={asset.title}
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className={`${span} ${asset.shape} rounded-xl border border-white/15 bg-gradient-to-br ${asset.tone} p-2 shadow-[0_18px_35px_-24px_rgba(0,0,0,0.8)]`}
            >
              <div className="flex h-full flex-col justify-between rounded-lg border border-white/10 bg-black/20 p-2">
                <div>
                  <p className="text-[9px] text-white/90">{asset.title}</p>
                  <p className="text-[8px] text-white/55">{asset.meta}</p>
                </div>

                <div className="space-y-1.5">
                  <div className="h-1.5 w-2/3 rounded-full bg-white/60" />
                  <div className="h-1.5 w-full rounded-full bg-white/20" />
                  <div className="h-1.5 w-4/5 rounded-full bg-white/20" />
                  <div className="mt-2 flex items-center justify-between">
                    <span className="rounded-md border border-white/20 bg-white/10 px-1.5 py-0.5 text-[8px] text-white/80">New</span>
                    <span className="text-[8px] text-white/60">APR 26</span>
                  </div>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}
