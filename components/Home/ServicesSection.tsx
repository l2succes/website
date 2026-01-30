import React from "react"
import Link from "next/link"

export const ServicesSection = () => {
  return (
    <div id="services" className="my-10 mx-4">
      <div className="bg-gray-50 p-12 rounded-2xl max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Building with AI?</h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
          I help AI coders and solo founders take their prototypes to production. From deployment to monitoring,
          security to scaling—get expert guidance from someone who builds with AI tools daily and has shipped
          production systems at scale.
        </p>
        <Link href="/services">
          <div className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            View Services →
          </div>
        </Link>
      </div>
    </div>
  )
}
