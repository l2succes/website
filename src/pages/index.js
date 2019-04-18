import React from 'react'
import { BackgroundImage } from 'rebass'
import styled from 'styled-components'
import { HeroText } from '../components/HeroText'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'

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

class IndexPage extends React.Component {
  render() {
    console.log(this.props.data)
    const projects = this.props.data.allProjectsJson.edges
    return (
      <Layout>
        <Page>
          <Section>
            <Container>
              <Content width={1 / 2}>
                <HeroText />
                <h2>my name is Luc</h2>
                <h2>Software engineer from Paris, based in New York.</h2>
              </Content>
            </Container>
          </Section>
          <Section style={{ background: 'white', color: 'black' }}>
            <Container>
              <h2>Travel</h2>
              <div>
                I spent the past few years traveling and working around the
                world. Here's a map of all the places I've been with my personal
                recommendations
              </div>
            </Container>
          </Section>
          <Section>
            <Container>
              <h2>Work</h2>
              {projects.map(({ node }) => (
                <div>
                  <h3>{node.name}</h3>
                </div>
              ))}
            </Container>
          </Section>
        </Page>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

export default IndexPage
