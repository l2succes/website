import React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import { HeroText } from '../HeroText'
import { Logo } from './Logo'

export class Hero extends React.Component<any> {
  render() {
    return (
      <Container>
        <Flex>
          <Box width={1 / 2}>
            <Logo />
          </Box>
          <Box width={1 / 2}>
            <HeroText />
            <h2>my name is Luc</h2>
            <h2>Software engineer from Paris, based in New York.</h2>
          </Box>
        </Flex>
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
