import React from 'react'
import Link from 'gatsby-link'
import image from '../images/background.jpg'
import { BackgroundImage } from 'rebass'
import styled from 'styled-components'

const Page = styled.div`
  margin-top: -40px;
`

const Section = styled.div`
  height: 700px;
  overflow: hidden;
`

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

const Background = styled(BackgroundImage)`
  padding-bottom: 50%;
`

const IndexPage = () => (
  <Page>
    <Section>
      <Background src={image}>
        <Container>
          <Content width={1/2}>
            <h1>Bonjour, I'm Luc</h1>
          </Content>
        </Container>
      </Background>
    </Section>
  </Page>
)

export default IndexPage
