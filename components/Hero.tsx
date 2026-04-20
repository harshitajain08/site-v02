'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Palette, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-600/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-600/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-purple-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-160px)]">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur">
                <p className="text-xs sm:text-sm text-indigo-300 font-medium tracking-widest uppercase">
                  Creative digital assets for modern brands
                </p>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Digital assets that make your brand <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">impossible to ignore</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-400 leading-relaxed">
              JustAsk creates premium websites, ads, invitations, flyers, and brand creatives for founders, creators, artists, and businesses who want to look serious online.
            </motion.p>

            {/* Tagline */}
            <motion.p variants={itemVariants} className="text-lg text-purple-300 font-light">
              Let&apos;s Grow Your Business Together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 text-base font-semibold group px-8 py-6"
              >
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/30 text-white hover:bg-purple-500/10 hover:border-purple-400 text-base font-semibold px-8 py-6"
              >
                Explore Services
              </Button>
            </motion.div>

            {/* Feature badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: Globe, label: 'Websites' },
                { icon: Code2, label: 'Code' },
                { icon: Palette, label: 'Design' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur text-xs sm:text-sm">
                  <item.icon className="w-4 h-4 text-indigo-400" />
                  <span className="text-white/80">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Website Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative h-96 sm:h-[500px] lg:h-[550px] hidden lg:block"
          >
            {/* Outer glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-600/30 via-purple-600/30 to-pink-600/30 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Main mockup card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Browser chrome */}
              <div className="h-14 bg-gradient-to-r from-white/5 to-white/[0.02] border-b border-white/10 flex items-center px-4 gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="text-xs text-white/40 font-mono ml-4">https://justask.studio</div>
              </div>

              {/* Content area with realistic mockup */}
              <div className="h-full bg-gradient-to-br from-indigo-950/30 via-purple-950/10 to-transparent p-6 space-y-4 overflow-hidden">
                {/* Header section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/40 to-purple-500/40 border border-indigo-400/30" />
                    <div className="h-3 w-24 bg-gradient-to-r from-indigo-500/50 to-transparent rounded-full" />
                  </div>
                  <div className="h-2.5 w-40 bg-gradient-to-r from-purple-400/40 to-transparent rounded-full" />
                </div>

                {/* Content blocks */}
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-lg border border-indigo-400/20 flex items-center justify-center">
                      <div className="text-xs text-indigo-300/60">Asset 1</div>
                    </div>
                    <div className="h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-lg border border-purple-400/20 flex items-center justify-center">
                      <div className="text-xs text-purple-300/60">Asset 2</div>
                    </div>
                  </div>
                  <div className="h-12 bg-gradient-to-r from-pink-500/20 to-transparent rounded-lg border border-pink-400/20 flex items-center px-3">
                    <div className="h-2 w-3/4 bg-pink-400/30 rounded-full" />
                  </div>
                </div>

                {/* Bottom action area */}
                <div className="pt-4 space-y-2 border-t border-white/5">
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 bg-gradient-to-r from-indigo-600/30 to-transparent rounded border border-indigo-400/20" />
                    <div className="h-8 w-20 bg-gradient-to-r from-purple-600/30 to-transparent rounded border border-purple-400/20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating product labels */}
            <motion.div
              className="absolute -top-4 -right-8 px-4 py-2 bg-indigo-600/80 backdrop-blur border border-indigo-400/50 rounded-lg text-white text-sm font-medium whitespace-nowrap shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            >
              Website
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-8 px-4 py-2 bg-purple-600/80 backdrop-blur border border-purple-400/50 rounded-lg text-white text-sm font-medium whitespace-nowrap shadow-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              Design System
            </motion.div>

            {/* Floating animation */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-500 uppercase tracking-widest">Scroll to explore</p>
          <div className="w-[2px] h-8 bg-gradient-to-b from-indigo-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}