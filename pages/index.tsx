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
          <div className="text-4xl leading-normal my-20 mx-4">
            I&apos;m a serial entrepreneur, software engineer, and product designer. Currently building Blaze, my latest
            startup venture, while helping other founders bring their ideas to life through technology and design.
          </div>

          {/* About Section */}
          <div className="flex flex-1 border-y border-x-black my-10"></div>
          <div className="font-demibold text-4xl leading-normal my-20 mx-4">About me</div>
          <div className="flex flex-col md:flex-row gap-8 my-10 mx-4 max-w-6xl items-start">
            <div className="flex-shrink-0 w-full md:w-80">
              <img src="/images/profile-photo.jpg" alt="Luc Succes" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="text-lg leading-relaxed flex-1">
              <p className="mb-6">
                With a background in computer science and years of experience building products from the ground up, I
                specialize in turning ambitious ideas into successful businesses. My journey spans multiple startups,
                each teaching me valuable lessons about product-market fit, user experience, and scalable engineering.
              </p>
              <p className="mb-6">
                At Blaze, I&apos;m focused on solving complex problems through innovative technology solutions. Beyond
                my own ventures, I enjoy mentoring fellow entrepreneurs and collaborating with teams to bring
                breakthrough products to market.
              </p>
              <p>
                When I&apos;m not coding or designing, you&apos;ll find me exploring new technologies, contributing to
                open source projects, or sharing insights about the startup ecosystem.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="flex flex-1 border-y border-x-black my-10"></div>
          <div className="font-demibold text-4xl leading-normal my-20 mx-4">Skills & Technologies</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 mx-4">
            <div>
              <h3 className="text-xl font-semibold mb-4">Engineering</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Full-stack development</li>
                <li>• React, Next.js, TypeScript</li>
                <li>• Node.js, Python, Go</li>
                <li>• AWS, Docker, Kubernetes</li>
                <li>• Database design & optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Design & Product</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• User experience design</li>
                <li>• Product strategy & roadmap</li>
                <li>• Figma, Adobe Creative Suite</li>
                <li>• Design systems & prototyping</li>
                <li>• User research & testing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Entrepreneurship</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Startup strategy & execution</li>
                <li>• Fundraising & investor relations</li>
                <li>• Team building & leadership</li>
                <li>• Product-market fit discovery</li>
                <li>• Growth hacking & analytics</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-1 border-y border-x-black my-10"></div>
          <div className="font-demibold text-4xl leading-normal my-20 mx-4">Work</div>
          <Work />

          {/* Contact Section */}
          <div className="flex flex-1 border-y border-x-black my-10"></div>
          <div className="font-demibold text-4xl leading-normal my-20 mx-4">Let&apos;s Connect</div>
          <div className="text-lg leading-relaxed my-10 mx-4 max-w-4xl">
            <p className="mb-6">
              I&apos;m always interested in connecting with fellow entrepreneurs, potential collaborators, and anyone
              passionate about building great products. Whether you&apos;re looking to start a new venture, need
              technical guidance, or just want to chat about the startup world, I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="mailto:hello@lucsucces.com"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/lucsucces"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/lucsucces"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export default Home
