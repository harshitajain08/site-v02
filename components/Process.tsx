'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Lightbulb, Pencil, RefreshCw, CheckCircle2 } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Share Your Requirement',
      description: 'Tell us what you need, your brand details, timeline, and goal.',
      icon: MessageCircle,
      gradient: 'from-indigo-600 to-blue-600',
    },
    {
      number: '02',
      title: 'Brand Understanding',
      description: 'We understand your audience, style, and business purpose.',
      icon: Lightbulb,
      gradient: 'from-purple-600 to-indigo-600',
    },
    {
      number: '03',
      title: 'Creative Direction',
      description: 'We plan the layout, content, colors, and design direction.',
      icon: Pencil,
      gradient: 'from-pink-600 to-purple-600',
    },
    {
      number: '04',
      title: 'Design & Build',
      description: 'We create the website, ad, flyer, invitation, or required asset.',
      icon: RefreshCw,
      gradient: 'from-rose-600 to-pink-600',
    },
    {
      number: '05',
      title: 'Polish & Deliver',
      description: 'We refine the final output and prepare it for use.',
      icon: CheckCircle2,
      gradient: 'from-emerald-600 to-teal-600',
    },
  ]

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-full blur-3xl" />
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
            A simple process with a premium result.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From initial consultation to final delivery, we ensure every step creates premium digital assets.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-600/20 via-purple-600/20 to-pink-600/20" />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Desktop: alternate sides */}
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:items-end' : 'lg:items-start'}`}>
                    {/* Content */}
                    <div className="w-full lg:w-5/6">
                      {/* Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                      {/* Card */}
                      <div className={`relative bg-gradient-to-br ${step.gradient} bg-opacity-5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl`}>
                        {/* Icon */}
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.gradient} bg-opacity-30 flex items-center justify-center mb-4`}>
                          <Icon className={`w-5 h-5 bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`} />
                        </div>

                        {/* Number */}
                        <div className={`text-2xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent mb-2`}>
                          {step.number}
                        </div>

                        {/* Text */}
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Connector circle - desktop only */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 mt-6 lg:mt-0">
                      <div className={`w-4 h-4 rounded-full border-2 border-background bg-gradient-to-br ${step.gradient} ring-2 ring-white/10`} />
                    </div>
                  </div>

                  {/* Mobile connector */}
                  <div className="lg:hidden absolute -bottom-12 left-0 w-0.5 h-12 bg-gradient-to-b from-current to-transparent opacity-20" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
