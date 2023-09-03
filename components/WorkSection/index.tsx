import React, { useState } from "react"
import { WorkSectionItem } from "./WorkSectionItem"
import tw from "tailwind-styled-components"
import styled from "styled-components"
import { useSpring, useTransition, animated } from "react-spring"
import { media, Media } from "../Layout/Responsive"

const Icon = styled.div<{ active?: boolean; src: string }>`
  background: url(${(p) => p.src}) no-repeat center white;
  background-size: cover;
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 10px;
  overflow: hidden;
  border-radius: 15px;
  vertical-align: center;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);

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

const IconContainer = tw.div`
  margin: 0 auto;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 5;
`

const Grid = tw.div`
  grid
`

const Header = styled(Grid)`
  vertical-align: center;

  > h2 {
    display: inline-block;
    margin: 20px 10px 10px;
  }
`

const SectionContainer = styled(Grid)`
  position: relative;
  height: 850px;

  ${media.sm`
    height: 980px;
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
      <Icon
        active={isActive}
        className={isActive ? "active" : ""}
        src={child.props.icon}
        onClick={() => updateActiveItem(i)}
      />
    )
  })

  return (
    <animated.div style={styles}>
      <Header>
        <h2>Work</h2>
      </Header>

      <SectionContainer>
        <Media at="xs">
          <div>{current}</div>
        </Media>
        <Media greaterThan="xs">{current}</Media>
      </SectionContainer>

      <IconContainer>{items}</IconContainer>
    </animated.div>
  )
}

WorkSection.Item = WorkSectionItem
