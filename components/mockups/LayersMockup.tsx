import { motion } from 'framer-motion'

export default function LayersMockup() {
  const layers = [
    { label: 'Design', color: 'from-indigo-500/30', offset: 0 },
    { label: 'Brand', color: 'from-purple-500/30', offset: 8 },
    { label: 'Code', color: 'from-pink-500/30', offset: 16 },
  ]

  return (
    <div className="absolute inset-0 rounded-2xl overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl" />

      {/* Layered cards with staggered positions */}
      <div className="absolute inset-0 flex items-center justify-center perspective">
        {layers.map((layer, index) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: 20, rotateX: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: -10,
              z: index * 20,
            }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            style={{
              transform: `translateY(${layer.offset}px) rotateZ(${index * 5}deg)`,
            }}
            className="absolute w-48 h-32 rounded-xl border border-white/20 backdrop-blur-md flex items-center justify-center"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} to-transparent rounded-xl`} />
            <div className="relative text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-white/80 to-white/60 bg-clip-text text-transparent">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-xs text-white/60 mt-2 font-medium">{layer.label} Layer</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-2xl" />
      </div>
    </div>
  )
}
