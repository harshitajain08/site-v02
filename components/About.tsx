'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Built for people who move fast and need to look premium.
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              JustAsk is designed for modern founders, creators, artists, and businesses who need high-quality digital assets without boring agency drama. Whether you are launching a startup, promoting an event, building a personal brand, or creating a campaign, we help you turn your idea into polished visuals that people actually notice.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: 'Fast Creative Execution',
                description: 'Get polished assets without weeks of confusion.',
              },
              {
                title: 'Premium Visual Quality',
                description: 'Every design is created to feel sharp, modern, and brand-ready.',
              },
              {
                title: 'Built for Growth',
                description: 'From first impression to final conversion, every asset supports your business goals.',
              },
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-pink-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
