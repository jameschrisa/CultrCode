'use client'

import { motion } from 'framer-motion'
import { XCircle, ArrowLeft, RefreshCw, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Header } from '@/components/Header'
import Link from 'next/link'

export default function PaymentCancelled() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Cancelled Animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <div className="w-24 h-24 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-12 h-12 text-orange-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="border-0 backdrop-blur-xl bg-primary-900/90">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-primary-50 mb-2">
                  Payment Cancelled
                </CardTitle>
                <p className="text-primary-300">
                  No worries! Your subscription wasn&apos;t processed. You can try again anytime.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* What Happened */}
                <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-orange-300 mb-2">What happened?</h3>
                  <p className="text-sm text-primary-300">
                    You cancelled the checkout process before completing your payment. 
                    No charges were made to your account.
                  </p>
                </div>

                {/* Next Steps */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary-100">
                    What would you like to do?
                  </h3>
                  
                  <div className="grid gap-3">
                    <Link href="/pricing">
                      <Button className="w-full shadow-xl hover:shadow-accent-500/30">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Try Again
                      </Button>
                    </Link>
                    
                    <Link href="/dashboard">
                      <Button variant="outline" className="w-full">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Continue with Free Plan
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Support Info */}
                <div className="p-4 bg-brand-500/10 rounded-lg border border-brand-500/20">
                  <h4 className="font-semibold text-brand-300 mb-2">Have Questions?</h4>
                  <p className="text-sm text-primary-300 mb-3">
                    Our team is here to help with any billing questions or technical issues.
                  </p>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => window.location.href = 'mailto:support@cultrcode.com?subject=Payment Question'}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact Support
                    </Button>
                    <Link href="/faqs">
                      <Button variant="ghost" size="sm">
                        View FAQs
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Free Features Reminder */}
                <div className="p-4 bg-accent-500/10 rounded-lg border border-accent-500/20">
                  <h4 className="font-semibold text-accent-300 mb-2">Remember: Free Features Available!</h4>
                  <p className="text-sm text-primary-300">
                    You can still access basic audience discovery, top 3 customer segments, 
                    and high-level demographic insights with your free account.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}