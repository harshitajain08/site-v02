'use client'

import { motion } from 'framer-motion'

export default function Portfolio() {
  const portfolioItems = [
    {
      title: 'Premium Startup Website',
      category: 'Website',
      tags: ['Web Design', 'Branding'],
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'Artist Event Invitation',
      category: 'Invitation',
      tags: ['Design', 'Event'],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Fashion Brand Flyer',
      category: 'Flyer',
      tags: ['Design', 'Branding'],
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      title: 'Instagram Ad Campaign',
      category: 'Advertisement',
      tags: ['Social Media', 'Campaign'],
      gradient: 'from-violet-600 to-indigo-600',
    },
    {
      title: 'Creator Media Kit',
      category: 'Brand Identity',
      tags: ['Branding', 'Design'],
      gradient: 'from-cyan-600 to-blue-600',
    },
    {
      title: 'Launch Campaign Kit',
      category: 'Campaign',
      tags: ['Campaign', 'Graphics'],
      gradient: 'from-purple-600 to-cyan-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Designed to make people stop scrolling.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here are the kinds of premium digital assets JustAsk can create for brands, creators, and businesses.
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              {/* Card wrapper */}
              <div className="relative h-full">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

                {/* Card */}
                <div className={`relative bg-gradient-to-br ${item.gradient} bg-opacity-5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-between hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl`}>
                  {/* Image placeholder */}
                  <div className="relative w-full aspect-video rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/5 mb-6 flex items-center justify-center group-hover:from-white/15 group-hover:to-white/10 transition-all duration-300 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                    <div className="relative text-center">
                      <div className={`text-5xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`}>
                        ◆
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Preview</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <p className={`text-xs font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent uppercase tracking-wider mb-2`}>
                      {item.category}
                    </p>
                    <h3 className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Hover CTA */}
                  <div className="mt-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-purple-300 flex items-center gap-2">
                      View project →
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
