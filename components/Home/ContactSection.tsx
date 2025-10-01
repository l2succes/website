import React from "react"

export const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="py-16 md:py-24 px-4 mt-20" style={{ background: '#F2F2F2' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="font-demibold text-3xl md:text-4xl leading-normal mb-6 md:mb-8">Let&apos;s Connect</div>
        <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-10">
          I&apos;m always interested in connecting with fellow entrepreneurs, potential collaborators, and anyone
          passionate about building great products. Whether you&apos;re looking to start a new venture, need
          technical guidance, or just want to chat about the startup world, I&apos;d love to hear from you.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:hello@lucsucces.com"
            className="bg-black text-white px-8 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
