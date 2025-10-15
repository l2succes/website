import type { NextPage } from "next"
import { Layout } from "../../components/Layout"
import Link from "next/link"
import Image from "next/image"

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
            <div className="bg-[#3F215A] text-white rounded-2xl p-12 md:p-20">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src="/images/catching-feelings/icon.png"
                      alt="Catchin Feelings Icon"
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-2xl shadow-lg"
                    />
                    <h1 className="text-5xl md:text-6xl font-bold">Catchin&apos; Feelings</h1>
                  </div>
                  <div className="flex flex-wrap gap-8 text-lg mb-12">
                    <div>
                      <div className="text-white/70 mb-1">Role</div>
                      <div className="font-semibold">Co-Founder + Designer</div>
                    </div>
                    <div>
                      <div className="text-white/70 mb-1">Year</div>
                      <div className="font-semibold">2024</div>
                    </div>
                    <div>
                      <div className="text-white/70 mb-1">Platform</div>
                      <div className="font-semibold">Web, iOS, Android</div>
                    </div>
                    <div>
                      <div className="text-white/70 mb-1">Status</div>
                      <div className="font-semibold">Live on App Store & Google Play</div>
                    </div>
                  </div>
                  <p className="text-xl md:text-2xl leading-relaxed mb-8">
                    A modern, cross-platform compatibility game designed for couples and close friends. Bringing people
                    closer through meaningful conversations, one question at a time.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.catchinfeelings.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#3F215A] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>

                {/* Right Video - iPhone Frame */}
                <div className="flex-shrink-0">
                  <div className="relative" style={{ width: "280px", height: "560px" }}>
                    {/* Modern iPhone Frame */}
                    <div className="absolute inset-0 bg-black rounded-[45px] shadow-2xl p-3">
                      <div className="w-full h-full bg-white rounded-[35px] overflow-hidden relative">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10"></div>
                        {/* Video */}
                        <video
                          src="/images/catching-feelings/demo.mp4"
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 mb-6">
                Catchin&apos; Feelings is an interactive game that helps people discover how well they really know each
                other through playful questions with a modern, meme-culture twist. The experience combines real-time
                multiplayer functionality with thoughtfully designed game modes that spark meaningful conversations.
              </p>
              <p className="text-xl leading-relaxed text-gray-700">
                Built as a modern monorepo with shared packages, the project features both web (Next.js) and mobile
                (Expo React Native) applications, allowing seamless gameplay across all devices.
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#3F215A]/5 p-8 rounded-xl">
                <div className="text-3xl mb-4">🎮</div>
                <h3 className="text-2xl font-semibold mb-3">Real-time Multiplayer</h3>
                <p className="text-gray-700">
                  Both players see questions simultaneously with 6-digit room codes for easy joining. 30-second timers
                  keep the excitement high while live answer tracking shows when your partner has responded.
                </p>
              </div>
              <div className="bg-[#3F215A]/5 p-8 rounded-xl">
                <div className="text-3xl mb-4">💕</div>
                <h3 className="text-2xl font-semibold mb-3">8 Unique Game Modes</h3>
                <p className="text-gray-700">
                  From Netflix & Chill to Spicy Takes, Future Vibes to Love Languages - each mode offers a different
                  lens to understand your partner through curated questions.
                </p>
              </div>
              <div className="bg-[#3F215A]/5 p-8 rounded-xl">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-2xl font-semibold mb-3">Compatibility Scoring</h3>
                <p className="text-gray-700">
                  See your match percentage and get personalized relationship insights based on your answers. Smart
                  algorithms analyze compatibility across different dimensions.
                </p>
              </div>
              <div className="bg-[#3F215A]/5 p-8 rounded-xl">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-2xl font-semibold mb-3">Cross-Platform Experience</h3>
                <p className="text-gray-700">
                  Mobile-first design that works perfectly on any device. Play on web, iOS, or Android with seamless
                  synchronization across platforms.
                </p>
              </div>
            </div>
          </section>

          {/* Game Modes */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Game Modes</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { emoji: "🍿", name: "Netflix & Chill", desc: "Pop culture vibes" },
                { emoji: "🌶️", name: "Spicy Takes", desc: "Hot opinions" },
                { emoji: "🚀", name: "Future Vibes", desc: "Dreams & goals" },
                { emoji: "☕", name: "Daily Grind", desc: "Everyday habits" },
                { emoji: "💕", name: "Love Languages", desc: "Romance styles" },
                { emoji: "🤔", name: "Would You Rather", desc: "Fun hypotheticals" },
                { emoji: "🟢", name: "Green Flags", desc: "Core values" },
                { emoji: "📼", name: "Throwback", desc: "Nostalgia" },
              ].map((mode) => (
                <div key={mode.name} className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-3">{mode.emoji}</div>
                  <h3 className="font-semibold mb-1">{mode.name}</h3>
                  <p className="text-sm text-gray-600">{mode.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Screenshots Section */}
          {/* <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Product Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-100 rounded-xl overflow-hidden aspect-[9/16]">
                  <Image
                    src={`/images/catching-feelings/screenshot-${i}.png`}
                    alt={`Catchin Feelings Screenshot ${i}`}
                    width={400}
                    height={711}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section> */}

          {/* Technical Stack */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Technical Architecture</h2>
            <div className="bg-gray-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-semibold mb-4">Monorepo Structure</h3>
              <p className="text-gray-700 mb-4">
                Built as a modern monorepo using npm workspaces, enabling code sharing between web and mobile apps while
                maintaining independent deployments.
              </p>
              <div className="bg-white p-4 rounded-lg font-mono text-sm">
                <div>catchin-feelings/</div>
                <div className="ml-4">├── apps/</div>
                <div className="ml-8">│ ├── web/ # Next.js web app</div>
                <div className="ml-8">│ └── mobile/ # Expo React Native</div>
                <div className="ml-4">└── packages/</div>
                <div className="ml-8"> └── shared/ # Shared code</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Web App</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Next.js 15 + TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Radix UI + shadcn/ui</li>
                  <li>• Framer Motion + GSAP</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Mobile App</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Expo React Native</li>
                  <li>• React Navigation</li>
                  <li>• Zustand state management</li>
                  <li>• Unified design system</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Backend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Firebase Realtime Database</li>
                  <li>• Firestore</li>
                  <li>• Firebase Auth</li>
                  <li>• Cloud Functions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Design System */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Brand & Design System</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Brand Personality</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3F215A]">•</span>
                    <div>
                      <strong>Warm & Inviting</strong> - Creates a safe space for intimate conversations
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3F215A]">•</span>
                    <div>
                      <strong>Playful & Fun</strong> - Lighthearted approach to serious topics
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3F215A]">•</span>
                    <div>
                      <strong>Modern & Fresh</strong> - Contemporary design and user experience
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3F215A]">•</span>
                    <div>
                      <strong>Authentic & Genuine</strong> - Encourages real, honest connections
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Color Palette</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-2">
                    <div className="h-20 rounded-lg" style={{ backgroundColor: "#3F215A" }}></div>
                    <div className="text-xs text-gray-600">Deep Purple</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 rounded-lg" style={{ backgroundColor: "#6B4C8A" }}></div>
                    <div className="text-xs text-gray-600">Medium Purple</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 rounded-lg" style={{ backgroundColor: "#E48DD6" }}></div>
                    <div className="text-xs text-gray-600">Pink Accent</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 rounded-lg" style={{ backgroundColor: "#D6ADEB" }}></div>
                    <div className="text-xs text-gray-600">Light Purple</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 rounded-lg" style={{ backgroundColor: "#2F1645" }}></div>
                    <div className="text-xs text-gray-600">Dark Purple</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 rounded-lg" style={{ backgroundColor: "#4A3366" }}></div>
                    <div className="text-xs text-gray-600">Purple Gray</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges & Learnings */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Challenges & Learnings</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#3F215A] pl-6">
                <h3 className="text-xl font-semibold mb-2">Real-time Synchronization</h3>
                <p className="text-gray-700">
                  Building a seamless real-time multiplayer experience required careful architecture decisions around
                  Firebase Realtime Database and handling connection states, ensuring both players stayed in sync even
                  with poor network conditions.
                </p>
              </div>
              <div className="border-l-4 border-[#3F215A] pl-6">
                <h3 className="text-xl font-semibold mb-2">Cross-Platform Design</h3>
                <p className="text-gray-700">
                  Creating a unified design system that works across web and mobile platforms while respecting native
                  patterns required extensive component planning and shared design tokens.
                </p>
              </div>
              <div className="border-l-4 border-[#3F215A] pl-6">
                <h3 className="text-xl font-semibold mb-2">Question Curation</h3>
                <p className="text-gray-700">
                  Crafting questions that are engaging, appropriate, and meaningful across different relationship stages
                  and cultural contexts was an iterative process involving extensive user testing and feedback.
                </p>
              </div>
              <div className="border-l-4 border-[#3F215A] pl-6">
                <h3 className="text-xl font-semibold mb-2">Monorepo Architecture</h3>
                <p className="text-gray-700">
                  Setting up a monorepo with shared packages between web and mobile apps enabled code reuse and faster
                  development, but required thoughtful dependency management and build configuration.
                </p>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Impact & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#3F215A] to-[#6B4C8A] text-white p-8 rounded-xl">
                <div className="text-4xl font-bold mb-2">Live</div>
                <div className="text-lg">On App Store & Google Play</div>
              </div>
              <div className="bg-gradient-to-br from-[#3F215A] to-[#6B4C8A] text-white p-8 rounded-xl">
                <div className="text-4xl font-bold mb-2">8</div>
                <div className="text-lg">Unique Game Modes</div>
              </div>
              <div className="bg-gradient-to-br from-[#3F215A] to-[#6B4C8A] text-white p-8 rounded-xl">
                <div className="text-4xl font-bold mb-2">Real-time</div>
                <div className="text-lg">Multiplayer Experience</div>
              </div>
            </div>
          </section>

          {/* Visit Project */}
          <div className="border-t pt-12">
            <a
              href="https://www.catchinfeelings.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-8 bg-[#3F215A] text-white rounded-xl hover:bg-[#2F1645] transition-colors"
            >
              <div>
                <div className="text-sm opacity-80 mb-2">Visit Live Project</div>
                <div className="text-3xl font-bold">catchinfeelings.co</div>
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
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CatchingFeelings
