import React, { useState, useEffect } from "react"

export const HeroText: React.FC = () => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const phrases = ["Hola!", "Bonjour!", "Hello!"]
    const timeout = setTimeout(
      () => {
        const current = phrases[currentPhrase]

        if (!isDeleting) {
          if (currentIndex < current.length) {
            setDisplayText(current.substring(0, currentIndex + 1))
            setCurrentIndex(currentIndex + 1)
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (currentIndex > 0) {
            setDisplayText(current.substring(0, currentIndex - 1))
            setCurrentIndex(currentIndex - 1)
          } else {
            setIsDeleting(false)
            setCurrentPhrase((currentPhrase + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, currentPhrase])

  return (
    <h1 className="text-white text-xl">
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  )
}
