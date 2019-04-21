import React from 'react'
import styled from 'styled-components'
import { HeroText } from '../HeroText'

export class Hero extends React.Component<any> {
  render() {
    return (
      <Container>
        <Content>
          <HeroText />
          <h2>my name is Luc</h2>
          <h2>Software engineer from Paris, based in New York.</h2>
        </Content>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  max-width: 1024px;
  margin: 0 auto;
`

const Content = styled.div`
  margin-left: 50%;
  color: white;
  height: 500px;
  width: 500px;
  margin-top: 100px;
`
