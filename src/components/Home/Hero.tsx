import React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import { HeroText } from '../HeroText'
import { Logo } from './Logo'
import { Header } from '../Header'

export class Hero extends React.Component<any> {
  render() {
    return (
      <>
        <Header hideLogo />
        <Container>
          <Flex>
            <Box width={1 / 2}>
              <Logo />
            </Box>
            <Box width={1 / 2}>
              <HeroText />
              <h2>My name is Luc Succès</h2>
              <h3>
                I'm a Software engineer & entrepreneur from Paris, based in New
                York.
              </h3>
            </Box>
          </Flex>
        </Container>
      </>
    )
  }
}

const Container = styled.div`
  max-width: 1024px;
  margin: 40px auto;
`

const Content = styled.div`
  margin-left: 50%;
  color: white;
  height: 500px;
  width: 500px;
  margin-top: 100px;
`
