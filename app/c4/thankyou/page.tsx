"use client"

import React from "react"
import Link from "next/link"
import Script from "next/script" // Import the Next.js Script component
import { Button } from "@/components/ui/button" // Assuming this path is correct
import { ArrowLeft } from "lucide-react" // Using an icon for the button

export default function ThankYouPage() {
  return (
    <>
      {/* Event snippet for Request quote conversion page [cite: 2]
        This uses next/script to safely inject the script after
        the page is interactive.
      */}
      <Script id="gtm-conversion-event" strategy="afterInteractive">
        {`
          console.log("Firing GTM conversion event...");
          if (typeof gtag === 'function') {
            gtag('event', 'conversion', {'send_to': 'AW-11451380206/2ZfiCPrMmbUbEO7juNQq'});
          } else {
            console.warn("gtag not defined, conversion event skipped.");
          }
        `}
      </Script>

      <section className="flex items-center justify-center min-h-screen bg-light-gold">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-2xl p-8">
            <h1 className="text-3xl font-bold text-black mb-4 font-playfair">
              Thank You!
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Thank you, we’ll contact you soon.
            </p>
            <Link href="/" passHref>
              <Button className="bg-gold-500 hover:bg-gold-600 text-black">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}