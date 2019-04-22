import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'rebass'
import { Layout } from '../components/Layout'
import { Hero } from '../components/Home/hero'

import { IPhone } from '../components/Home/iPhone'
import { WorkSection } from '../components/WorkSection'

const Page = styled.div`
  margin-top: -40px;
`

const Section = styled.div`
  min-height: 700px;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

class IndexPage extends React.Component<any> {
  render() {
    return (
      <Layout>
        <Page>
          <Hero />
          <WorkSection>
            <WorkSection.Item
              backgroundColor="black"
              color="white"
              deviceColor="white"
              title="Spotify"
              description="I designed and developed an app named Drizzy. This was one of the
          first successful keyboard apps in the app store."
              icon={require('../images/spotify/icon.png')}
              images={[require('../images/spotify/spotify-1.png')]}
            />
            <WorkSection.Item
              backgroundColor="#FFC538"
              color="#FFF"
              title="Drizzy"
              description="I designed and developed an app named Drizzy. This was one of the
            first successful keyboard apps in the app store."
              icon={require('../images/drizzy/icon.png')}
              images={[require('../images/drizzy/screenshots/drizzy-4.png')]}
            />
            <WorkSection.Item
              backgroundColor="black"
              color="#FFF"
              title="October"
              description="I designed and developed an app named Drizzy. This was one of the
          first successful keyboard apps in the app store."
              icon={require('../images/october/icon.png')}
              images={[require('../images/october/october-2.png')]}
            />
            <WorkSection.Item
              backgroundColor="#F7F7F7"
              color="#000"
              title="Often"
              description=""
              icon={require('../images/often/icon.png')}
              images={[require('../images/often/often-1.png')]}
            />
            <WorkSection.Item
              backgroundColor="#FFF"
              color="#000"
              title="Sundial"
              description="I designed and developed an app named Drizzy. This was one of the
      first successful keyboard apps in the app store."
              icon={require('../images/sundial/icon.png')}
              images={[require('../images/sundial/sundial-1.png')]}
            />
            <WorkSection.Item
              backgroundColor="#F7F7F7"
              color="#000"
              title="Artsy"
              description="Artsy is the best way to buy and discover art."
              body={
                <div>
                  During my time at Artsy, I've worked on many projects
                  including the main website and the iOS app. Features like
                  Messaging, various UI fixes and the latest projects I've had
                  the chance to work on is City Guide. <br />
                  In the iOS app, we used various libraries including Mapbox GL
                  to complete this feature. There was also a lot of work done on
                  the data side.
                </div>
              }
              icon={require('../images/artsy/icon.jpg')}
              images={[require('../images/artsy/artsy-1.png')]}
            />
          </WorkSection>
          <Section style={{ background: 'white', color: 'black' }}>
            <Container>
              <h2>Travel</h2>
              <h3>
                I spent the past few years traveling and working around the
                world. Here's a map of all the places I've been with my personal
                recommendations
              </h3>
            </Container>
          </Section>
        </Page>
      </Layout>
    )
  }
}

export default IndexPage
