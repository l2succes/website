import React from "react"
import { HeroText } from "../HeroText"
import { Header } from "../Header"
import { Logo } from "./Logo"
import { SocialLinks } from "../SocialLinks"

export class Hero extends React.Component<any> {
  state = {
    isSticky: false,
  }

  render() {
    return (
      <div className="bg-black min-h-screen relative">
        <div className="container mx-auto py-4">
          <Header />
          <div className="absolute top-8 right-8 z-10">
            <SocialLinks color="white" hoverColor="gray-300" size="small" />
          </div>
          <div className="flex flex-col items-center justify-center text-center relative" style={{ minHeight: "calc(100vh - 2rem)" }}>
            <div className="text-white mx-10">
              <div className="font-sans text-4xl mb-1">Luc Succès</div>
              <div className="text-md text-neutral-500">Coder. Designer. Startup founder</div>
            </div>
            <div className="mt-10 flex justify-center">
              <Logo size="xlarge" />
            </div>
            <button
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer animate-bounce"
              aria-label="Scroll down"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
