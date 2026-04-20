'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'

export default function RequirementsBuilder() {
  const [formData, setFormData] = useState({
    serviceType: '',
    clientName: '',
    email: '',
    phone: '',
    businessName: '',
    budgetRange: '',
    deadline: '',
    notes: '',
  })

  const services = [
    'Website Design & Development',
    'Advertisements',
    'Invitations',
    'Flyers & Posters',
    'Social Media Creatives',
    'Brand Identity Assets',
    'Campaign Graphics',
    'Custom Digital Assets',
  ]

  const budgetRanges = [
    'Under ₹5,000',
    '₹5,000 - ₹10,000',
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000+',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Prepare the data for email submission
    const emailData = {
      ...formData,
      timestamp: new Date().toISOString(),
    }

    console.log('Form submitted with data:', emailData)
    
    // TODO: Integrate with email service
    // Options:
    // 1. EmailJS - No backend required, client-side email sending
    //    - Install: npm install @emailjs/browser
    //    - Setup: Get service ID, template ID, public key from emailjs.com
    //    - Implementation: emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
    //
    // 2. Formspree - Simple form backend
    //    - Just submit to: https://formspree.io/f/{form_id}
    //    - Get form_id from formspree.io
    //
    // 3. Resend - Modern email API for developers
    //    - Install: npm install resend
    //    - Create API route: app/api/send-email/route.ts
    //    - Use ResendEmail client to send
    //
    // 4. Custom Node.js backend with nodemailer
    //    - Create API route: app/api/send-email/route.ts
    //    - Use nodemailer to send via SMTP
    //
    // For now, showing console log and alert
    alert('Requirements submitted! Our team will review and contact you soon.')
    setFormData({
      serviceType: '',
      clientName: '',
      email: '',
      phone: '',
      businessName: '',
      budgetRange: '',
      deadline: '',
      notes: '',
    })
  }

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-600/10 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Tell us what you need. We&apos;ll shape the rest.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Select your service, add your details, and send your requirements for further discussion.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-pink-600/10 rounded-2xl blur-3xl opacity-30" />

          {/* Form container */}
          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service Type */}
              <div className="md:col-span-2">
                <Label htmlFor="serviceType" className="text-white mb-2 block">
                  What service do you need?
                </Label>
                <Select value={formData.serviceType} onValueChange={handleSelectChange('serviceType')}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white hover:border-white/20 focus:border-indigo-500/50">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-white/10">
                    {services.map(service => (
                      <SelectItem key={service} value={service} className="text-white">
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Your Name */}
              <div>
                <Label htmlFor="clientName" className="text-white mb-2 block">
                  Your Name
                </Label>
                <Input
                  id="clientName"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-indigo-500/50 focus:ring-0"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-indigo-500/50 focus:ring-0"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-white mb-2 block">
                  Phone / WhatsApp
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-indigo-500/50 focus:ring-0"
                />
              </div>

              {/* Business Name */}
              <div>
                <Label htmlFor="businessName" className="text-white mb-2 block">
                  Business / Brand Name
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your Business Name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-indigo-500/50 focus:ring-0"
                  required
                />
              </div>

              {/* Budget Range */}
              <div>
                <Label htmlFor="budgetRange" className="text-white mb-2 block">
                  Budget Range
                </Label>
                <Select value={formData.budgetRange} onValueChange={handleSelectChange('budgetRange')}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white hover:border-white/20 focus:border-indigo-500/50">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-white/10">
                    {budgetRanges.map(range => (
                      <SelectItem key={range} value={range} className="text-white">
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Deadline */}
              <div>
                <Label htmlFor="deadline" className="text-white mb-2 block">
                  Project Deadline
                </Label>
                <Input
                  id="deadline"
                  name="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-indigo-500/50 focus:ring-0"
                />
              </div>

              {/* Project Notes */}
              <div className="md:col-span-2">
                <Label htmlFor="notes" className="text-white mb-2 block">
                  Project Details & Notes
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us more about your project, vision, and any specific requirements..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-indigo-500/50 focus:ring-0 min-h-32 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 font-semibold"
                >
                  Send Requirements for Further Discussion
                </Button>
              </div>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
