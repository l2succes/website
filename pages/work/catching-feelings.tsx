import type { NextPage } from "next"
import { Layout } from "../../components/Layout"
import Link from "next/link"

const CatchingFeelings: NextPage = () => {
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
            <div className="bg-[#FF6B6B] rounded-2xl p-12 md:p-20 text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Catching Feelings</h1>
              <div className="flex flex-wrap gap-8 text-lg mb-12">
                <div>
                  <div className="text-white/70 mb-1">Role</div>
                  <div className="font-semibold">Featured, Co-Founder + Designer</div>
                </div>
                <div>
                  <div className="text-white/70 mb-1">Year</div>
                  <div className="font-semibold">2017</div>
                </div>
                <div>
                  <div className="text-white/70 mb-1">Platform</div>
                  <div className="font-semibold">iOS</div>
                </div>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed max-w-4xl">
                An innovative mobile application that revolutionized how people connect and express emotions through
                digital experiences. Featured by Apple and recognized for its unique approach to social interaction.
              </p>
            </div>
          </div>

          {/* Overview Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 mb-6">
                Catching Feelings was born from the idea that digital communication often lacks the emotional depth of
                face-to-face interaction. We set out to create a platform that would bridge this gap, allowing users to
                express and share their feelings in more meaningful ways.
              </p>
              <p className="text-xl leading-relaxed text-gray-700">
                The app gained significant traction, reaching hundreds of thousands of downloads and being featured
                prominently by Apple in their App Store. It demonstrated the power of combining thoughtful design with
                emotional intelligence.
              </p>
            </div>
          </section>

          {/* Screenshots Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Product Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/catching-feelings/screenshot-1.png"
                  alt="Catching Feelings Screenshot 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/catching-feelings/screenshot-2.png"
                  alt="Catching Feelings Screenshot 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/catching-feelings/screenshot-3.png"
                  alt="Catching Feelings Screenshot 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/catching-feelings/screenshot-4.png"
                  alt="Catching Feelings Screenshot 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Design Process Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Design Process</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Research & Discovery</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We conducted extensive user research to understand how people communicate emotions digitally. Through
                  interviews and surveys, we identified key pain points in existing communication tools and opportunities
                  for innovation.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Prototyping & Testing</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Multiple iterations of prototypes were created and tested with real users. This iterative process
                  allowed us to refine the user experience and ensure that the app truly resonated with our target
                  audience.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Visual Design</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The visual language was carefully crafted to evoke warmth and authenticity. We chose a vibrant color
                  palette and friendly typography that made the app feel approachable and emotionally engaging.
                </p>
              </div>
            </div>
          </section>

          {/* Impact & Recognition Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Impact & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] text-white p-8 rounded-xl">
                <div className="text-4xl font-bold mb-2">500K+</div>
                <div className="text-lg">Downloads</div>
              </div>
              <div className="bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] text-white p-8 rounded-xl">
                <div className="text-4xl font-bold mb-2">4.8★</div>
                <div className="text-lg">App Store Rating</div>
              </div>
              <div className="bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] text-white p-8 rounded-xl">
                <div className="text-4xl font-bold mb-2">Featured</div>
                <div className="text-lg">By Apple</div>
              </div>
            </div>
            <p className="text-xl leading-relaxed text-gray-700">
              The app was featured by Apple in multiple countries and received widespread recognition from the design
              community. Users praised its intuitive interface and unique approach to emotional expression.
            </p>
          </section>

          {/* Technical Implementation Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Technical Implementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <span>Native iOS development using Swift</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <span>Custom animations and transitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <span>Core Data for local storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <span>Push notifications for engagement</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Backend & Infrastructure</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <span>Node.js API server</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <span>MongoDB for data storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <span>Real-time messaging with Socket.io</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">•</span>
                    <span>AWS for hosting and scalability</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Learnings Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Key Learnings</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#FF6B6B] pl-6">
                <h3 className="text-xl font-semibold mb-2">User-Centric Design</h3>
                <p className="text-gray-700">
                  The success of Catching Feelings reinforced the importance of truly understanding user needs and
                  emotions. Design decisions driven by empathy and user research lead to more meaningful products.
                </p>
              </div>
              <div className="border-l-4 border-[#FF6B6B] pl-6">
                <h3 className="text-xl font-semibold mb-2">Iterative Development</h3>
                <p className="text-gray-700">
                  Continuous iteration based on user feedback was crucial. We launched with a minimal feature set and
                  gradually added functionality based on real user behavior and requests.
                </p>
              </div>
              <div className="border-l-4 border-[#FF6B6B] pl-6">
                <h3 className="text-xl font-semibold mb-2">Marketing & Distribution</h3>
                <p className="text-gray-700">
                  Building relationships with platform partners like Apple was essential for visibility. Understanding
                  App Store optimization and feature guidelines helped us gain prominent placement.
                </p>
              </div>
            </div>
          </section>

          {/* Back to Projects */}
          <div className="border-t pt-12">
            <Link href="/#work">
              <div className="flex items-center justify-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-xl font-semibold">View All Projects</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CatchingFeelings