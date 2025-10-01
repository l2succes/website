import type { NextPage } from "next"
import styled from "styled-components"
import { Layout } from "../components/Layout"
import { Hero } from "../components/Home/Hero"
import tw from "tailwind-styled-components"
import { NewWorkSection } from "components/WorkSection/NewWorkSection"
import { TypewriterHeader } from "../components/TypewriterHeader"
// import { InstagramFeed } from "../components/InstagramFeed"
import Image from "next/image"

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

          {/* About Section */}
          <div id="about">
            <TypewriterHeader />
          </div>
          <div className="flex items-center gap-2 mx-4 mt-2 mb-8 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>Currently based in Mexico City</span>
          </div>
          <div className="flex flex-col md:flex-row gap-8 my-10 mx-4 items-start">
            <div className="flex-shrink-0 w-full md:w-80">
              <Image
                src="/images/profile-photo.jpg"
                alt="Luc Succes"
                width={320}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1">
              <p className="text-2xl leading-relaxed mb-6">
                I&apos;m a serial entrepreneur, software engineer, and product designer. Currently building Blaze, my
                latest startup venture, while helping other founders bring their ideas to life through technology and
                design.
              </p>
              <div className="text-lg leading-relaxed">
                <p className="mb-6">
                  I&apos;ve spent the last few years between Mexico City, New York, and San Francisco building products
                  and companies. My background is in computer science, but I&apos;ve always been drawn to the
                  intersection of design, technology, and entrepreneurship.
                </p>
                <p>
                  Before Blaze, I built keyboard apps that hit millions of downloads, worked on Spotify&apos;s discovery
                  features, and helped bring art to more people at Artsy. Always down to connect with fellow founders
                  and creators.
                </p>
              </div>
            </div>
          </div>

          {/* Instagram Feed */}
          {/* <div className="mx-4 my-10">
            <InstagramFeed />
          </div> */}

          <div className="flex flex-1 border-y border-x-black my-10"></div>
          <div id="work">
            <NewWorkSection />
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
        </Container>

        {/* Contact Section */}
        <div id="contact" className="py-24 px-4 mt-20" style={{ background: '#F2F2F2' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="font-demibold text-4xl leading-normal mb-8">Let&apos;s Connect</div>
            <p className="text-lg leading-relaxed mb-10">
              I&apos;m always interested in connecting with fellow entrepreneurs, potential collaborators, and anyone
              passionate about building great products. Whether you&apos;re looking to start a new venture, need
              technical guidance, or just want to chat about the startup world, I&apos;d love to hear from you.
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:hello@lucsucces.com"
                className="bg-black text-white px-10 py-4 text-lg rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default Home
