'use client'

import { motion } from 'framer-motion'
import { Globe, Zap, Mail, FileText, Share2, Palette, Sparkles, Lightbulb } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Modern, responsive websites and landing pages built to make your brand look credible.',
      gradient: 'from-indigo-600 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Advertisements',
      description: 'High-impact digital ads for launches, campaigns, offers, events, and promotions.',
      gradient: 'from-purple-600 to-indigo-600',
    },
    {
      icon: Mail,
      title: 'Invitations',
      description: 'Premium digital invitations for events, launches, parties, shows, and announcements.',
      gradient: 'from-pink-600 to-purple-600',
    },
    {
      icon: FileText,
      title: 'Flyers',
      description: 'Clean, eye-catching flyers designed for online and offline promotions.',
      gradient: 'from-rose-600 to-pink-600',
    },
    {
      icon: Share2,
      title: 'Social Media Creatives',
      description: 'Posts, stories, carousels, banners, and content visuals that stop the scroll.',
      gradient: 'from-cyan-600 to-blue-600',
    },
    {
      icon: Palette,
      title: 'Brand Identity Assets',
      description: 'Logo direction, colors, typography, visual style, and brand presentation assets.',
      gradient: 'from-violet-600 to-purple-600',
    },
    {
      icon: Sparkles,
      title: 'Campaign Graphics',
      description: 'Complete creative sets for product launches, events, sales, and brand campaigns.',
      gradient: 'from-amber-600 to-orange-600',
    },
    {
      icon: Lightbulb,
      title: 'Custom Digital Assets',
      description: 'Need something specific? Tell us what you need and we&apos;ll shape it into a polished asset.',
      gradient: 'from-emerald-600 to-teal-600',
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
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-full blur-3xl transform translate-x-1/2" />
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
            Everything your brand needs to show up better online.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Pick one asset or build a complete digital presence. JustAsk helps you create what your business needs to look professional, memorable, and ready to grow.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group"
              >
                {/* Glow background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8 h-full flex flex-col hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} bg-opacity-20 flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition-all duration-300`}>
                    <Icon className={`w-6 h-6 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-grow group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* CTA indicator */}
                  <div className="mt-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-purple-400 flex items-center gap-2">
                      Learn more →
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
