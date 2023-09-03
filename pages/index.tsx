import type { NextPage } from "next"
import styled from "styled-components"
import { Layout } from "../components/Layout"
import { Hero } from "../components/Home/Hero"
import tw from "tailwind-styled-components"
import { Work } from "components/WorkSection"

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
          <div className="text-4xl leading-normal my-20">
            I&apos;m a software engineer + product designer with a background in computer science focusing on building
            things people love
          </div>
          {/* <h2 className="text-2xl">Travel</h2>
          <div className="text-md">
            I spent the past few years traveling and working around the world. Here&apos;s a map of all the places
            I&apos;ve been with my personal recommendations
          </div> */}
          <div className="flex flex-1 border-y border-x-black my-10"></div>
          <div className="font-demibold text-4xl leading-normal my-20">Work</div>
          <Work />
        </Container>
      </Section>
    </Layout>
  )
}

export default Home
