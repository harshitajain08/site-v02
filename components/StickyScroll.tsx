'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import WebsiteMockup from './mockups/WebsiteMockup'
import LayersMockup from './mockups/LayersMockup'
import CodeMockup from './mockups/CodeMockup'
import DesignSystemMockup from './mockups/DesignSystemMockup'
import CreativeAssetsMockup from './mockups/CreativeAssetsMockup'
import EcosystemMockup from './mockups/EcosystemMockup'

const steps = [
  {
    id: 1,
    title: 'Start with a Website',
    description: 'Every great brand presence begins with a solid digital foundation. A modern, responsive website that converts.',
    component: WebsiteMockup,
  },
  {
    id: 2,
    title: 'Uncover the Layers',
    description: 'Behind every asset is a strategic breakdown. Design system, brand guidelines, and creative direction all working together.',
    component: LayersMockup,
  },
  {
    id: 3,
    title: 'Build the Code',
    description: 'Clean implementation, interactive elements, and smooth interactions that make your website feel alive.',
    component: CodeMockup,
  },
  {
    id: 4,
    title: 'Design System',
    description: 'Colors, typography, spacing, and components that create consistency across all your brand touchpoints.',
    component: DesignSystemMockup,
  },
  {
    id: 5,
    title: 'Creative Assets',
    description: 'From ads to flyers to social content. Every asset flows from the same visual language and brand strategy.',
    component: CreativeAssetsMockup,
  },
  {
    id: 6,
    title: 'Complete Ecosystem',
    description: 'A fully integrated digital ecosystem where every element works together to amplify your brand message.',
    component: EcosystemMockup,
  },
]

export default function StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative bg-background py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 lg:mb-32"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            From one idea to a complete digital presence.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We turn your rough requirement into a polished set of digital assets — strategy, design, code, content, and final delivery working together.
          </p>
        </motion.div>

        {/* Sticky scroll content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Steps navigation */}
          <div className="relative">
            {/* Sticky steps container */}
            <div className="sticky top-32 space-y-6 h-fit">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  onViewportEnter={() => setActiveStep(index)}
                  initial={{ opacity: 0.4, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, margin: '-100px' }}
                  className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer group ${
                    activeStep === index
                      ? 'bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-indigo-500/50 shadow-lg shadow-indigo-600/20'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Step number */}
                  <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${
                    activeStep === index
                      ? 'from-indigo-400 to-purple-400'
                      : 'from-white/40 to-white/20'
                  } bg-clip-text text-transparent transition-all duration-300`}>
                    {String(step.id).padStart(2, '0')}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    activeStep === index ? 'text-white' : 'text-white/70'
                  }`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm transition-colors duration-300 ${
                    activeStep === index ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {step.description}
                  </p>

                  {/* Active indicator line */}
                  {activeStep === index && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-l-xl"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Animated mockups */}
          <motion.div
            style={{ opacity }}
            className="relative h-96 sm:h-[500px] lg:h-[600px] sticky top-32"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-pink-600/20 blur-3xl" />
            
            {steps.map((step, index) => {
              const Component = step.component
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={
                    activeStep === index
                      ? { opacity: 1, scale: 1, y: 0 }
                      : { opacity: 0, scale: 0.95, y: 20 }
                  }
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <Component />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
