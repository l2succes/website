import type { NextPage } from "next"
import styled from "styled-components"
import { Layout } from "../components/Layout"
import { Hero } from "../components/Home/Hero"
import tw from "tailwind-styled-components"

const Section = styled.div`
  min-height: 700px;
  overflow: hidden;
`

const Container = tw.div`
  container
  mx-auto
`

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />

      <Section style={{ background: "white", color: "black" }}>
        <Container>
          <h2 className="text-2xl">Travel</h2>

          <div className="text-md">
            I spent the past few years traveling and working around the world. Here's a map of all the places I've been
            with my personal recommendations
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export default Home
