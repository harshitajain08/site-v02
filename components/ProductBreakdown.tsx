'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function ProductBreakdown() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Create staggered animations for each layer
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, -160])
  const layer4Y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const layer5Y = useTransform(scrollYProgress, [0, 1], [0, -240])
  const layer6Y = useTransform(scrollYProgress, [0, 1], [0, -280])

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.8])

  const layers = [
    {
      label: 'Strategy Brief',
      description: 'We understand your brand, audience, goals, and required asset type.',
      color: 'from-indigo-600 to-purple-600',
      delay: 0,
    },
    {
      label: 'Design System',
      description: 'Colors, typography, layout direction, and visual identity.',
      color: 'from-purple-600 to-pink-600',
      delay: 0.1,
    },
    {
      label: 'Website / Landing Page',
      description: 'Responsive, clean, conversion-focused web experiences.',
      color: 'from-pink-600 to-rose-600',
      delay: 0.2,
    },
    {
      label: 'Creative Assets',
      description: 'Ads, flyers, invitations, carousels, posters, and campaign graphics.',
      color: 'from-indigo-500 to-cyan-500',
      delay: 0.3,
    },
    {
      label: 'Code & Automation',
      description: 'Clean implementation, forms, interactions, and requirement collection.',
      color: 'from-violet-600 to-purple-600',
      delay: 0.4,
    },
    {
      label: 'Final Delivery',
      description: 'Ready-to-use assets delivered for launch, promotion, or brand growth.',
      color: 'from-purple-500 to-pink-500',
      delay: 0.5,
    },
  ]

  const transforms = [layer1Y, layer2Y, layer3Y, layer4Y, layer5Y, layer6Y]

  return (
    <section ref={containerRef} className="relative py-24 sm:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            From one idea to a complete digital presence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We turn your rough requirement into a polished set of digital assets — strategy, design, code, content, and final delivery working together.
          </motion.p>
        </div>

        {/* Layers container with 3D effect */}
        <div className="relative h-96 sm:h-[500px] md:h-[600px] flex items-center justify-center perspective">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.label}
              style={{
                y: transforms[index],
                opacity: opacity,
              }}
              className="absolute w-full max-w-xs sm:max-w-md md:max-w-lg"
            >
              <div className="relative mx-auto">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} rounded-2xl blur-2xl opacity-20`} />

                {/* Card */}
                <div className={`relative bg-gradient-to-br ${layer.color} bg-opacity-5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl hover:border-white/20 transition-all duration-300`}>
                  <div className="aspect-video bg-white/5 rounded-lg flex flex-col items-center justify-center border border-white/5 mb-4">
                    <div className="text-4xl font-bold text-white/10 mb-2">◆</div>
                    <p className="text-xs sm:text-sm text-gray-400">{layer.label}</p>
                  </div>
                  <p className="text-xs text-gray-500 text-center">Premium creative layer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Layer labels with connecting lines */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`p-6 rounded-xl bg-gradient-to-br ${layer.color} bg-opacity-5 border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer h-full`}>
                <div className={`text-3xl font-bold bg-gradient-to-r ${layer.color} bg-clip-text text-transparent mb-2`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{layer.label}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{layer.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
