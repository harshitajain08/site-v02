import { motion } from 'framer-motion'

export default function EcosystemMockup() {
  const elements = [
    { 
      id: 1, 
      label: 'Website',
      color: 'from-indigo-500/30',
      position: 'top-4 left-4 w-32 h-20',
    },
    { 
      id: 2, 
      label: 'Brand',
      color: 'from-purple-500/30',
      position: 'top-4 right-4 w-28 h-20',
    },
    { 
      id: 3, 
      label: 'Ads',
      color: 'from-pink-500/30',
      position: 'bottom-4 left-4 w-20 h-24',
    },
    { 
      id: 4, 
      label: 'Design',
      color: 'from-cyan-500/30',
      position: 'bottom-4 right-4 w-24 h-24',
    },
    { 
      id: 5, 
      label: 'Code',
      color: 'from-emerald-500/30',
      position: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20',
    },
  ]

  return (
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden p-4">
      {/* Center core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-40 h-40 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Ecosystem elements */}
      {elements.map((element, index) => (
        <motion.div
          key={element.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.12 }}
          className={`absolute ${element.position} rounded-lg bg-gradient-to-br ${element.color} to-transparent border border-white/10 flex items-center justify-center group cursor-pointer hover:border-white/30 transition-all duration-300`}
        >
          <div className="relative z-10 text-center">
            <div className="text-sm font-bold text-white/60 group-hover:text-white/90 transition-colors">{element.label}</div>
          </div>

          {/* Connecting lines to center */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id={`gradient-${element.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
              </linearGradient>
            </defs>
            <motion.line
              x1="50%"
              y1="50%"
              x2="50%"
              y2="50%"
              stroke={`url(#gradient-${element.id})`}
              strokeWidth="1"
              opacity="0.5"
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Center label */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="text-xs font-semibold text-white/70 uppercase tracking-widest">Complete</div>
          <div className="text-xs font-semibold text-white/70 uppercase tracking-widest">Ecosystem</div>
        </motion.div>
      </div>
    </div>
  )
}
