import React, { useState, useEffect } from "react"

type AnimationPhase =
  | "typing-hi"
  | "pause-hi"
  | "deleting-hi"
  | "typing-hello"
  | "pause-hello"
  | "deleting-hello"
  | "typing-bonjour"
  | "pause-bonjour"
  | "deleting-bonjour"
  | "typing-holdon"
  | "complete"

export const TypewriterHeader: React.FC = () => {
  const [phase, setPhase] = useState<AnimationPhase>("typing-hi")
  const [displayText, setDisplayText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const name = "Luc Succes"
    const typingSpeed = 100
    const deleteSpeed = 50
    const pauseDuration = 1000

    let timeout: NodeJS.Timeout

    const typeText = (text: string, nextPhase: AnimationPhase) => {
      let index = 0
      const type = () => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1))
          index++
          timeout = setTimeout(type, typingSpeed)
        } else {
          timeout = setTimeout(() => setPhase(nextPhase), pauseDuration)
        }
      }
      type()
    }

    const deleteText = (fromText: string, nextPhase: AnimationPhase) => {
      let currentText = fromText
      const del = () => {
        if (currentText.length > 0) {
          currentText = currentText.slice(0, -1)
          setDisplayText(currentText)
          timeout = setTimeout(del, deleteSpeed)
        } else {
          setPhase(nextPhase)
        }
      }
      del()
    }

    switch (phase) {
      case "typing-hi":
        typeText("Hi", "pause-hi")
        break
      case "pause-hi":
        timeout = setTimeout(() => setPhase("deleting-hi"), pauseDuration)
        break
      case "deleting-hi":
        deleteText("Hi", "typing-hello")
        break
      case "typing-hello":
        typeText("Hello", "pause-hello")
        break
      case "pause-hello":
        timeout = setTimeout(() => setPhase("deleting-hello"), pauseDuration)
        break
      case "deleting-hello":
        deleteText("Hello", "typing-bonjour")
        break
      case "typing-bonjour":
        typeText("Bonjour", "pause-bonjour")
        break
      case "pause-bonjour":
        timeout = setTimeout(() => setPhase("deleting-bonjour"), pauseDuration)
        break
      case "deleting-bonjour":
        deleteText("Bonjour", "typing-holdon")
        break
      case "typing-holdon":
        typeText("Hola", "complete")
        break
      case "complete":
        // Animation complete
        break
    }

    return () => clearTimeout(timeout)
  }, [phase])

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-2xl md:text-3xl  mx-4 font-light">
      <span>{displayText}</span>
      {phase !== "complete" && (
        <>
          <span>, my name is </span>
          <span className="text-gray-400">Luc Succes</span>
          <span className={`inline-block w-0.5 h-6 bg-black ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"}`} />
        </>
      )}
      {phase === "complete" && (
        <>
          <span>, my name is </span>
          <span className="text-gray-400">Luc Succes</span>
          <span>.</span>
        </>
      )}
    </div>
  )
}
