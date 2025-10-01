import type { NextPage } from "next"
import { Layout } from "../../components/Layout"
import Link from "next/link"
import Image from "next/image"

const Blaze: NextPage = () => {
  return (
    <Layout>
      <div className="bg-white text-black min-h-screen">
        <div className="container mx-auto px-4 py-20">
          {/* Back Button */}
          <Link href="/#work">
            <div className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cursor-pointer mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <span>Back to projects</span>
            </div>
          </Link>

          {/* Hero Section */}
          <div className="mb-16">
            <div className="bg-[#FAF000] rounded-2xl p-12 md:p-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Blaze</h1>
              <div className="flex flex-wrap gap-8 text-lg mb-12">
                <div>
                  <div className="text-gray-700 mb-1">Role</div>
                  <div className="font-semibold">Co-Founder + Designer</div>
                </div>
                <div>
                  <div className="text-gray-700 mb-1">Year</div>
                  <div className="font-semibold">2024</div>
                </div>
                <div>
                  <div className="text-gray-700 mb-1">Platform</div>
                  <div className="font-semibold">Web, iOS, Android</div>
                </div>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed max-w-4xl">
                My current startup venture focused on solving complex problems through innovative technology solutions.
                Building the next generation of tools that empower teams and individuals to achieve their goals more
                efficiently.
              </p>
            </div>
          </div>

          {/* Overview Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-700">
                Blaze represents the culmination of years of experience in building consumer products and understanding
                market needs. The platform combines cutting-edge technology with intuitive design to create a seamless
                user experience.
              </p>
            </div>
          </section>

          {/* Product Videos Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Product Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden h-[350px]" style={{ background: '#F2F2F2' }}>
                <video
                  src="https://blaze.money/images/features/blaze-payment.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-[350px]" style={{ background: '#F2F2F2' }}>
                <video
                  src="https://blaze.money/images/features/blaze-feed.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-[350px]" style={{ background: '#F2F2F2' }}>
                <video
                  src="https://blaze.money/images/features/blaze-card-payment.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-[350px]" style={{ background: '#F2F2F2' }}>
                <video
                  src="https://blaze.money/images/features/blaze-request.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Technical Stack Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Technical Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• React / Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• React Native</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Backend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Node.js</li>
                  <li>• PostgreSQL</li>
                  <li>• Redis</li>
                  <li>• GraphQL</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Infrastructure</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• AWS</li>
                  <li>• Docker</li>
                  <li>• Kubernetes</li>
                  <li>• GitHub Actions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Key Features</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-[#FAF000] pl-6">
                <h3 className="text-2xl font-semibold mb-3">Real-time Collaboration</h3>
                <p className="text-gray-700 text-lg">
                  Built-in real-time collaboration features that allow teams to work together seamlessly, with instant
                  updates and synchronization across all devices.
                </p>
              </div>
              <div className="border-l-4 border-[#FAF000] pl-6">
                <h3 className="text-2xl font-semibold mb-3">Advanced Analytics</h3>
                <p className="text-gray-700 text-lg">
                  Comprehensive analytics dashboard providing actionable insights into user behavior and performance
                  metrics.
                </p>
              </div>
              <div className="border-l-4 border-[#FAF000] pl-6">
                <h3 className="text-2xl font-semibold mb-3">Intelligent Automation</h3>
                <p className="text-gray-700 text-lg">
                  Smart automation features that streamline workflows and reduce manual tasks, powered by machine
                  learning algorithms.
                </p>
              </div>
            </div>
          </section>

          {/* Challenges & Learnings Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Challenges & Learnings</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 mb-6">
                Building Blaze has been an incredible journey filled with both challenges and valuable learnings. One of
                the biggest challenges was scaling the infrastructure to handle rapid user growth while maintaining
                performance and reliability.
              </p>
              <p className="text-xl leading-relaxed text-gray-700">
                The experience reinforced the importance of iterative development, user feedback, and building a strong
                team culture. Each obstacle provided an opportunity to innovate and improve the product.
              </p>
            </div>
          </section>

          {/* Next Project */}
          <div className="border-t pt-12">
            <Link href="/work/catching-feelings">
              <div className="flex items-center justify-between p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                <div>
                  <div className="text-gray-600 mb-2">Next Project</div>
                  <div className="text-3xl font-bold">Catching Feelings</div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blaze
