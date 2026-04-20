'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const footerLinks = [
    { title: 'Home', href: '#' },
    { title: 'Services', href: '#' },
    { title: 'Portfolio', href: '#' },
    { title: 'Process', href: '#' },
    { title: 'About', href: '#' },
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-3">
              JustAsk
            </h3>
            <p className="text-gray-400 text-sm mb-4 font-light">
              Let&apos;s Grow Your Business Together.
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Premium websites, ads, invitations, flyers, and brand creatives for modern businesses and creators.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Web Design',
                'Ads & Graphics',
                'Brand Identity',
                'Social Media',
                'Custom Assets',
              ].map(service => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <a
                  href="mailto:hello@justask.studio"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  hello@justask.studio
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="text-gray-500 text-sm">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Instagram className="w-4 h-4 text-pink-400 group-hover:text-pink-300 transition-colors" />
                <a
                  href="https://instagram.com/justask.studio"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  @justask.studio
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/5 py-8 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6"
            >
              {socialLinks.map(social => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </motion.div>

            {/* Copyright */}
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-xs text-center sm:text-right"
            >
              &copy; 2024 JustAsk. All rights reserved. Crafted with precision and care.
            </motion.p>
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          variants={itemVariants}
          className="text-center border-t border-white/5 pt-8"
        >
          <p className="text-gray-600 text-xs">
            Made for founders, creators, and businesses ready to look premium online.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
