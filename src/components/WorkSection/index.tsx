import React, { useState } from 'react'
import { WorkSectionItem } from './WorkSectionItem'
import styled from 'styled-components'
import { useSpring, useTransition, animated } from 'react-spring'

const Header = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  vertical-align: center;

  > h2 {
    display: inline-block;
    margin: 20px 10px 0;
    /* font-size: 32px; */
  }
`

const Icon = styled.div<{ active?: boolean; src: string }>`
  background: url(${p => p.src}) no-repeat center white;
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
`

const IconContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
`

const SectionContainer = styled.div`
  position: relative;
  height: 850px;
  max-width: 1024px;
  margin: 0 auto;
`
interface Props {
  children: WorkSectionItem[]
}

interface State {
  activeItem: number
}

export function WorkSection({ children }: Props) {
  const [activeItem, updateActiveItem] = useState(0)
  const transitions = useTransition(activeItem, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const current = children[activeItem]
  const { backgroundColor, color } = current.props
  const styles = useSpring({ backgroundColor, color })

  const items = React.Children.map(children, (child: JSX.Element, i) => {
    const isActive = i === activeItem

    return (
      <Icon
        active={isActive}
        className={isActive ? 'active' : ''}
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
        {transitions.map(({ item, props }) => {
          return <animated.div style={props}>{children[item]}</animated.div>
        })}
      </SectionContainer>

      <IconContainer>{items}</IconContainer>
    </animated.div>
  )
}

WorkSection.Item = WorkSectionItem
