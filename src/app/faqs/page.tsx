"use client"

import { useState } from "react"
import { ChevronDown, Zap } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and cryptocurrency payments including Bitcoin and Ethereum. All transactions are secure and encrypted.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Domestic shipping typically takes 2-4 business days. International shipping can take 7-14 business days depending on the destination. Express shipping options are available at checkout.",
    },
    {
      question: "Do you offer warranty on products?",
      answer:
        "Yes, all our gaming accessories come with a standard 1-year manufacturer warranty. Extended warranty options are available for select products.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unopened items in their original packaging. Defective items can be returned within 90 days of purchase.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Please check the shipping calculator at checkout for specific details.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can also track your order through your account dashboard on our website.",
    },
  ]

  return (
    <main className="min-h-screen bg-black/95 text-white pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0j0OGMy5hudufVYVyi3ERcObg3P1PN.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-transparent" />
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-400">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, reach out to
              our support team.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-3xl mx-auto grid gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 
                         border border-gray-800 hover:border-green-500/50 transition-all duration-300
                         flex items-center justify-between group-hover:shadow-[0_0_20px_rgba(0,255,0,0.1)]"
              >
                <span className="text-lg font-semibold flex items-center gap-3">
                  <Zap className="w-5 h-5 text-green-500" />
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-green-500 transition-transform duration-300
                           ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                />
              </button>
              {openIndex === index && (
                <div className="overflow-hidden">
                  <div className="p-6 text-gray-400 bg-gray-900/25 rounded-b-lg border-x border-b border-gray-800">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
          <p className="text-gray-400 mb-8">
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </p>
         <Link href="/contact">
            <button
            className="px-8 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-black font-semibold
                         transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]"
          >
            Contact Support
          </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

