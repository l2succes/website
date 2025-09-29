import React from "react"
import { SocialLinks } from "./SocialLinks"

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <SocialLinks color="white" hoverColor="gray-300" size="medium" />
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Luc Succès. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}