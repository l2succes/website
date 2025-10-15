import React from "react"
import { HeroText } from "../HeroText"
import { Header } from "../Header"
import { Logo } from "./Logo"
import { SocialLinks } from "../SocialLinks"

export class Hero extends React.Component<any> {
  state = {
    isSticky: false,
    animationComplete: false,
  }

  componentDidMount() {
    // Animation sequence timing: border (0.8s) + L (2s at 1.1s delay) + S (2s at 2.1s delay) = ~4.1s total
    // Then trigger scale down
    setTimeout(() => {
      this.setState({ animationComplete: true })
    }, 4300)
  }

  render() {
    const { animationComplete } = this.state

    return (
      <div className="bg-black min-h-screen relative">
        <style jsx>{`
          @keyframes scaleDown {
            0% {
              transform: scale(2);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .logo-container {
            transform: scale(2);
            transition: none;
            ${animationComplete ? `
              animation: scaleDown 0.8s ease-out forwards;
            ` : ''}
          }
          .text-container {
            opacity: 0;
            ${animationComplete ? `
              animation: fadeIn 0.6s ease-out forwards;
              animation-delay: 0.4s;
            ` : ''}
          }
          .chevron-container {
            opacity: 0;
            ${animationComplete ? `
              animation: fadeIn 0.6s ease-out forwards;
              animation-delay: 0.8s;
            ` : ''}
          }
        `}</style>
        <div className="container mx-auto py-4">
          <Header />
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => {
                  const element = document.getElementById("about")
                  if (element) {
                    const offset = 120
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                    const offsetPosition = elementPosition - offset
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                  }
                }}
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                About Me
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("work")
                  if (element) {
                    const offset = 120
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                    const offsetPosition = elementPosition - offset
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                  }
                }}
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                Work
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) {
                    const offset = 120
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                    const offsetPosition = elementPosition - offset
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                  }
                }}
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                Contact
              </button>
            </nav>
          </div>
          <div className="absolute top-8 right-8 z-10">
            <SocialLinks color="white" hoverColor="gray-300" size="small" />
          </div>
          <div className="flex flex-col items-center justify-center text-center relative w-full px-4" style={{ minHeight: "calc(100vh - 2rem)" }}>
            <div className="text-white text-container">
              <div className="font-sans text-3xl md:text-4xl mb-1">Luc Succès</div>
              <div className="text-sm md:text-md text-neutral-500">Coder. Designer. Startup founder</div>
            </div>
            <div className={`${animationComplete ? 'mt-10' : ''} logo-container`}>
              <Logo size="xlarge" animated={!animationComplete} />
            </div>
            <button
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer animate-bounce chevron-container"
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
