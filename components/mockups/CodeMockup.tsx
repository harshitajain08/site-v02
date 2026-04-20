import { motion } from 'framer-motion'

const codeLines = [
  { token: 'export const brand = {', tone: 'text-cyan-300' },
  { token: "  name: 'JustAsk',", tone: 'text-emerald-300' },
  { token: "  mode: 'premium-dark',", tone: 'text-fuchsia-300' },
  { token: "  assets: ['web', 'ads', 'flyers', 'invites'],", tone: 'text-sky-300' },
  { token: '}', tone: 'text-cyan-300' },
  { token: 'pipeline.deploy({ speed: `24h` })', tone: 'text-violet-200' },
]

export default function CodeMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/15 bg-[#0a0e1b]/95 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.95)]">
      <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-[#10162b] px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
        <div className="ml-2 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/70">justask.config.ts</div>
        <div className="ml-auto rounded-full border border-emerald-300/35 bg-emerald-500/15 px-2 py-0.5 text-[9px] uppercase tracking-wide text-emerald-200">
          live
        </div>
      </div>

      <div className="relative space-y-1 p-3 font-mono text-[10px] sm:text-[11px]">
        {codeLines.map((line, index) => (
          <motion.div
            key={`${line.token}-${index}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: index * 0.07 }}
            className="flex items-center gap-3"
          >
            <span className="w-4 text-right text-white/35">{index + 1}</span>
            <span className={line.tone}>{line.token}</span>
          </motion.div>
        ))}

        <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/10 pt-2 text-[9px] text-white/60">
          <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-1">build: clean</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-1">preview: synced</span>
          <span className="rounded-md border border-cyan-400/30 bg-cyan-500/10 px-1.5 py-1 text-cyan-100">deploy: ready</span>
        </div>
      </div>

      <motion.div
        animate={{ opacity: [0.35, 0.8, 0.35], x: ['-20%', '110%'] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-200/10 to-transparent"
      />
    </div>
  )
}
