"use client"

import React from "react"
import tw from "tailwind-styled-components"

interface Props {
  rotate?: "down" | "up" | "left" | "right"
  height?: string
  width?: string
}

export const Chevron = (props: Props) => {
  const rotate = () => {
    switch (props.rotate) {
      case "up":
        return "rotate-180"
      case "left":
        return "rotate-90"
      case "right":
        return "rotate-270"
      case "down":
      default:
        return "rotate-0"
    }
  }

  return (
    <Wrapper rotate={rotate()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 stroke-neutral-500"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        scale="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </Wrapper>
  )
}

const Wrapper = tw.div<{ rotate: string }>`
${(p) => p.rotate}
flex
justify-center
align-middle
`
