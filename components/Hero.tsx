'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mouse, Sparkles } from 'lucide-react'

import CreativeAssetsMockup from '@/components/mockups/CreativeAssetsMockup'
import CodeMockup from '@/components/mockups/CodeMockup'
import WebsiteMockup from '@/components/mockups/WebsiteMockup'
import { Button } from '@/components/ui/button'

const serviceChips = ['Website', 'Ads', 'Flyers', 'Invites', 'Brand Kit', 'Social Creatives']

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen w-full overflow-x-clip bg-background pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[110px]" />
        <div className="absolute right-0 top-10 h-[360px] w-[360px] rounded-full bg-fuchsia-500/15 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 h-[340px] w-[340px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-xl space-y-7">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-gradient-to-r from-indigo-500/15 to-fuchsia-500/10 px-4 py-2 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-indigo-200" />
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-indigo-100/90">
                  Creative Digital Assets for Modern Brands
                </p>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="max-w-[16ch] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Digital assets that make your brand{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                impossible to ignore.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              JustAsk creates premium websites, ads, invitations, flyers, and brand creatives for founders, creators,
              artists, and businesses who want to look serious online.
            </motion.p>

            <motion.p variants={itemVariants} className="text-base font-light text-violet-200 sm:text-lg">
              Let&apos;s Grow Your Business Together.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-6 text-base font-semibold text-white hover:from-indigo-400 hover:to-violet-400"
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-violet-300/35 bg-white/5 px-8 py-6 text-base font-semibold text-white hover:bg-violet-400/10"
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-[660px] lg:mx-0"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-[420px] sm:h-[510px] lg:h-[560px]"
            >
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-indigo-500/25 via-violet-500/15 to-cyan-400/20 blur-3xl" />

              <div className="absolute inset-x-6 top-10 bottom-0 sm:inset-x-8">
                <WebsiteMockup />
              </div>

              <motion.div
                animate={{ y: [0, 9, 0], x: [0, -4, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-1 bottom-8 hidden h-[170px] w-[300px] sm:block"
              >
                <CodeMockup />
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0], x: [0, 4, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-1 top-4 hidden h-[235px] w-[250px] sm:block"
              >
                <CreativeAssetsMockup />
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-6 bottom-3 hidden rounded-2xl border border-white/20 bg-[#121521]/90 p-3 shadow-xl backdrop-blur-md sm:block"
              >
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Brand Kit</p>
                  <span className="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 text-[9px] text-white/70">v2.1</span>
                </div>
                <div className="mb-2 flex gap-1.5">
                  {['#8B5CF6', '#22D3EE', '#F472B6', '#F8FAFC'].map((color) => (
                    <span key={color} className="h-5 w-5 rounded-md border border-white/20" style={{ backgroundColor: color }} />
                  ))}
                </div>
                <p className="text-[10px] text-white/80">Inter SemiBold · 16/24</p>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="rounded-md bg-violet-500/80 px-2 py-1 text-[9px] text-white">Primary</span>
                  <span className="rounded-md border border-white/25 px-2 py-1 text-[9px] text-white/70">Secondary</span>
                </div>
                <p className="mt-2 text-[9px] text-white/55">Spacing: 8 / 16 / 24 / 32</p>
              </motion.div>

              <div className="absolute -bottom-8 left-3 right-3 hidden flex-wrap justify-center gap-2 sm:flex">
                {serviceChips.map((chip, index) => (
                  <motion.span
                    key={chip}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.3 + index * 0.06 }}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] text-white/85 backdrop-blur-md"
                  >
                    {chip}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="text-[10px] uppercase tracking-[0.2em]">Scroll to explore</p>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1">
          <Mouse className="h-4 w-4" />
        </div>
      </motion.div>
    </section>
  )
}
