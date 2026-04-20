import { motion } from 'framer-motion'

export default function DesignSystemMockup() {
  const colors = [
    { name: 'Primary', bg: 'bg-indigo-600', label: '#6366f1' },
    { name: 'Secondary', bg: 'bg-purple-600', label: '#a78bfa' },
    { name: 'Accent', bg: 'bg-pink-600', label: '#ec4899' },
    { name: 'Neutral', bg: 'bg-gray-400', label: '#999999' },
  ]

  const typography = [
    { label: 'Heading', size: 'text-lg', weight: 'font-bold' },
    { label: 'Body', size: 'text-sm', weight: 'font-normal' },
    { label: 'Small', size: 'text-xs', weight: 'font-light' },
  ]

  return (
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="h-12 bg-gradient-to-r from-white/5 to-white/[0.02] border-b border-white/10 px-4 flex items-center">
        <div className="text-xs text-white/60 font-medium">Design System</div>
      </div>

      {/* Content - Two columns */}
      <div className="h-full bg-gradient-to-br from-indigo-950/20 via-purple-950/10 to-transparent p-6 grid grid-cols-2 gap-6 overflow-hidden">
        {/* Colors */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-white/80 uppercase tracking-widest">Colors</div>
          {colors.map((color, index) => (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className={`w-6 h-6 rounded ${color.bg} border border-white/10`} />
              <div>
                <div className="text-xs text-white/80 font-medium">{color.name}</div>
                <div className="text-xs text-white/40 font-mono">{color.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Typography */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-white/80 uppercase tracking-widest">Typography</div>
          {typography.map((typo, index) => (
            <motion.div
              key={typo.label}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-2 rounded bg-white/5 border border-white/10"
            >
              <div className={`${typo.size} ${typo.weight} text-white/80`}>{typo.label}</div>
              <div className="text-xs text-white/40 mt-1">AaBbCc 123</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
