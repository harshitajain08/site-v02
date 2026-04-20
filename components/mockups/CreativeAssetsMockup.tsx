import { motion } from 'framer-motion'

export default function CreativeAssetsMockup() {
  const assets = [
    { title: 'Ad', gradient: 'from-indigo-500/30', aspect: 'aspect-video' },
    { title: 'Flyer', gradient: 'from-purple-500/30', aspect: 'aspect-[3/4]' },
    { title: 'Post', gradient: 'from-pink-500/30', aspect: 'aspect-square' },
    { title: 'Banner', gradient: 'from-cyan-500/30', aspect: 'aspect-[4/1]' },
  ]

  return (
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="h-12 bg-gradient-to-r from-white/5 to-white/[0.02] border-b border-white/10 px-4 flex items-center gap-4">
        <div className="text-xs text-white/60 font-medium">Creative Assets</div>
        <div className="text-xs text-white/40">4 variations</div>
      </div>

      {/* Grid of assets */}
      <div className="h-full bg-gradient-to-br from-indigo-950/20 via-purple-950/10 to-transparent p-5 grid grid-cols-2 gap-3 overflow-hidden content-center">
        {assets.map((asset, index) => (
          <motion.div
            key={asset.title}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className={`${asset.aspect} rounded-lg bg-gradient-to-br ${asset.gradient} to-transparent border border-white/10 flex items-center justify-center group cursor-pointer hover:border-white/30 transition-all duration-300`}
          >
            <div className="text-center">
              <div className="text-xl font-bold text-white/40 group-hover:text-white/70 transition-colors">{asset.title}</div>
              <div className="text-xs text-white/30 group-hover:text-white/50 transition-colors mt-1">1920×1080</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom action bar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/40 to-transparent border-t border-white/5 flex items-center justify-end gap-2 px-4">
        <div className="text-xs text-white/50 font-mono">4/4</div>
      </div>
    </div>
  )
}
