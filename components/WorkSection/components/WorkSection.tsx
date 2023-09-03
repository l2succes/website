import React, { useState } from "react"
import { WorkSectionItem } from "./WorkSectionItem"
import Image from "next/image"
import tw from "tailwind-styled-components"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { media } from "components/Layout/Responsive"

const Icon = styled.div<{ active?: boolean; src: string }>`
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 10px;
  overflow: hidden;
  border-radius: 15px;
  vertical-align: center;

  &::after {
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    margin: 10px auto;
    background-color: blue;
  }

  ${media.sm`
    width: 32px;
    height: 32px;
    border-radius: 7.5px;
  `};
`

interface Props {
  children: JSX.Element[]
}

interface State {
  activeItem: number
}

export function WorkSection({ children }: Props) {
  const [activeItem, updateActiveItem] = useState(0)
  const current = children[activeItem]
  const { backgroundColor, color } = current.props
  const styles = useSpring({ backgroundColor, color })

  const items = React.Children.map(children, (child: JSX.Element, i) => {
    const isActive = i === activeItem

    return (
      <div className="border-t-2 py-5 flex flex-col" onClick={() => updateActiveItem(i)}>
        <div className="ml-4 text-3xl">{child.props.title}</div>

        <div className="flex w-full">
          <>{isActive && child}</>
        </div>
      </div>
    )
  })

  return (
    <div style={styles}>
      <div>{items}</div>
    </div>
  )
}

WorkSection.Item = WorkSectionItem
