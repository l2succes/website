import React from 'react'
import { WorkSectionItem } from './WorkSectionItem'
import styled from 'styled-components'

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

interface Props {
  children: WorkSectionItem[]
}

interface State {
  activeItem: number
}

export class WorkSection extends React.Component<Props, State> {
  static Item = WorkSectionItem

  state = {
    activeItem: 0,
    count: React.Children.count(this.props.children),
  }

  onPressIcon = (index: number) => {
    this.setState({
      activeItem: index,
    })
  }

  renderIconBar() {
    const { children } = this.props
    const { activeItem } = this.state

    const items = React.Children.map(children, (child: JSX.Element, i) => {
      const isActive = i === activeItem

      return (
        <Icon
          active={isActive}
          className={isActive ? 'active' : ''}
          src={child.props.icon}
          onClick={() => this.onPressIcon(i)}
        />
      )
    })

    return <IconContainer>{items}</IconContainer>
  }

  get current() {
    const { children } = this.props
    return children[this.state.activeItem]
  }

  render() {
    const current = this.current
    const { backgroundColor, color } = this.current.props

    return (
      <div style={{ backgroundColor, color }}>
        <Header>
          <h2>Work</h2>
        </Header>
        {current}
        {this.renderIconBar()}
      </div>
    )
  }
}
