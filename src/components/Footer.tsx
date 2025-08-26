'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Twitter, Linkedin, Instagram, ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Footer() {
  const footerLinks = {
    company: [
      { name: 'About CultrCode', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Resources', href: '/resources' },
      { name: 'FAQs', href: '/faqs' }
    ],
    product: [
      { name: 'AI Segmentation', href: '/solutions/segmentation' },
      { name: 'Trend Intelligence', href: '/solutions/trends' },
      { name: 'Micro-Communities', href: '/solutions/communities' },
      { name: 'Generated Personas', href: '/solutions/personas' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Data Protection', href: '/data-protection' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/cultrcode', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/cultrcode', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/cultrcode', icon: Instagram }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 border-t border-white/5">
      {/* Floating background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-orb w-64 h-64 bg-accent-500/10 -top-20 -left-20" style={{ animationDelay: '0s' }} />
        <div className="floating-orb w-48 h-48 bg-brand-500/10 top-1/2 -right-10" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-50 mb-4">
              Stay Ahead of Cultural Trends
            </h3>
            <p className="text-primary-300 mb-8 leading-relaxed">
              Get weekly insights on emerging micro-communities, viral trends, and cultural intelligence directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-primary-800/50 border border-primary-600 rounded-lg text-primary-200 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
              />
              <Button className="px-6 shadow-xl hover:shadow-accent-500/30">
                <span className="hidden sm:inline">Subscribe</span>
                <ArrowRight className="w-4 h-4 sm:ml-2" />
              </Button>
            </div>
            
            <p className="text-xs text-primary-500 mt-3">
              Join 5,000+ creators and brands. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-6">
              <div className="text-2xl font-bold gradient-text">CultrCode™</div>
              <div className="text-sm text-primary-400 tracking-wide">Cultural Intelligence Platform</div>
            </Link>
            
            <p className="text-primary-300 leading-relaxed mb-6 max-w-md">
              AI-powered cultural intelligence that helps creator brands and challenger startups identify their perfect micro-audiences before competitors.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-800/50 border border-primary-600 rounded-lg flex items-center justify-center text-primary-400 hover:text-accent-400 hover:border-accent-500/50 transition-colors group"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-primary-50 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-300 hover:text-accent-400 transition-colors text-sm flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-primary-50 mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-300 hover:text-accent-400 transition-colors text-sm flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-primary-50 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-300 hover:text-accent-400 transition-colors text-sm flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-primary-400 text-sm">
                © 2024 CultrCode™. All rights reserved.
              </p>
              <p className="text-primary-500 text-xs mt-1">
                Empowering creators and challenger brands with cultural intelligence.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-xs text-primary-500">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
                <span>All systems operational</span>
              </span>
              <Link href="/status" className="hover:text-accent-400 transition-colors">
                System Status
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}