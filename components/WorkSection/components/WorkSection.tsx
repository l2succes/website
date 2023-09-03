import React, { useState } from "react"
import { WorkSectionItem } from "./WorkSectionItem"
import { useSpring, animated } from "react-spring"
import { Chevron } from "components/Icons/Chevron"

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
        <div className="flex justify-between align-middle mx-4">
          <div className="text-3xl">{child.props.title}</div>

          <Chevron rotate={isActive ? "up" : "right"} />
        </div>

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
