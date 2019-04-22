import React from 'react'
import { WorkSectionItem } from './WorkSectionItem'
import styled from 'styled-components'

const Header = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  vertical-align: center;

  > h2 {
    display: inline-block;
    margin: 0 10px 0;
  }
`

const Icon = styled.div<{ active?: boolean; src: string }>`
  background: url(${p => p.src}) no-repeat center white;
  background-size: 100%;
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 10px;
  overflow: hidden;
  border-radius: 15px;
  vertical-align: center;
  border: 5px solid;
  border-color: ${p => (p.active ? 'white' : 'black')};
`

const IconContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`

export class WorkSection extends React.Component<any, any> {
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
    const { activeItem, children } = this.props

    const items = React.Children.map(children, (child: JSX.Element, i) => {
      return (
        <Icon
          active={i === activeItem}
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
          {this.renderIconBar()}
        </Header>
        {current}
      </div>
    )
  }
}
