import type { NextPage } from "next"
import styled from "styled-components"
import { Layout } from "../components/Layout"
import { Hero } from "../components/Home/Hero"
import { AboutSection } from "../components/Home/AboutSection"
import { WorkSectionWrapper } from "../components/Home/WorkSectionWrapper"
import { SkillsSection } from "../components/Home/SkillsSection"
import { ContactSection } from "../components/Home/ContactSection"
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
          <div className="mt-20"></div>
          <AboutSection />
          <WorkSectionWrapper />
          <SkillsSection />
        </Container>
        <ContactSection />
      </Section>
    </Layout>
  )
}

export default Home
