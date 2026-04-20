import { motion } from 'framer-motion'

export default function CodeMockup() {
  const codeLines = [
    { text: 'export default function Hero() {', color: 'text-cyan-400' },
    { text: '  const [isLoading, setIsLoading] = useState(false)', color: 'text-emerald-400' },
    { text: '  const { scrollProgress } = useScroll()', color: 'text-emerald-400' },
    { text: '  ', color: '' },
    { text: '  return (', color: 'text-cyan-400' },
    { text: '    <motion.div animate={{...}} />', color: 'text-pink-400' },
    { text: '  )', color: 'text-cyan-400' },
    { text: '}', color: 'text-cyan-400' },
  ]

  return (
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Editor header */}
      <div className="h-12 bg-gradient-to-r from-white/5 to-white/[0.02] border-b border-white/10 px-4 flex items-center gap-2">
        <div className="text-xs text-white/60 font-mono">Hero.tsx</div>
        <div className="ml-auto text-xs text-white/40">Ln 42, Col 8</div>
      </div>

      {/* Code content */}
      <div className="h-full bg-gradient-to-b from-slate-950/40 via-slate-900/20 to-transparent p-6 overflow-hidden font-mono text-sm">
        <div className="space-y-1">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-3"
            >
              <span className="text-white/30 select-none w-6 text-right">{String(index + 1).padStart(2, ' ')}</span>
              <span className={`${line.color || 'text-white/60'}`}>{line.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Syntax highlighting accent */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            width: ['20%', '100%', '20%'],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        />
      </div>
    </div>
  )
}
