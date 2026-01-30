import type { NextPage } from "next"
import { Layout } from "../components/Layout"
import { ServiceCard } from "../components/Services/ServiceCard"
import Link from "next/link"
import Head from "next/head"

const Services: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>AI Development Consultancy Services | Luc Succès</title>
        <meta
          name="description"
          content="Expert consultancy for AI coders and solo founders. Production readiness, technical advisory, and code audits for AI-built applications."
        />
        <meta property="og:title" content="AI Development Consultancy Services | Luc Succès" />
        <meta
          property="og:description"
          content="Expert consultancy for AI coders and solo founders. Production readiness, technical advisory, and code audits for AI-built applications."
        />
      </Head>

      <div className="bg-white text-black min-h-screen">
        <div className="container mx-auto px-4 pt-32 pb-20">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="bg-black rounded-2xl p-12 md:p-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                AI-Native Development Consultancy
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed max-w-4xl text-white">
                From prototype to production-ready: Expert guidance for AI coders building real products.
              </p>
            </div>
          </div>

          {/* Problem/Opportunity Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">You Built It. Now Make It Production-Ready.</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 p-8 rounded-xl mb-6">
                <p className="text-xl leading-relaxed text-gray-700">
                  I get it—you built something amazing with Claude Code, Cursor, or v0. That&apos;s the exciting part.
                  Now comes the hard part: making it production-ready.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl mb-6">
                <p className="text-xl leading-relaxed text-gray-700">
                  Deployment pipelines, monitoring, security, scaling—these aren&apos;t taught by AI tools. They&apos;re
                  learned through years of shipping products and dealing with production issues at 3am.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <p className="text-xl leading-relaxed text-gray-700">
                  You don&apos;t need a course or another SaaS platform. You need someone who&apos;s been there—someone who
                  builds with AI tools every day and has shipped production systems at companies like Spotify and Artsy.
                </p>
              </div>
            </div>
          </section>

          {/* Services Offered Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">How I Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                icon="🚀"
                title="Production Readiness Package"
                description="Transform your AI-built prototype into a production-ready application"
                includes={[
                  "Deployment pipeline setup (CI/CD)",
                  "Monitoring and logging infrastructure",
                  "Security audit and hardening",
                  "Performance optimization",
                  "Error tracking and alerting",
                  "Database optimization",
                ]}
                timeline="2-4 weeks"
              />
              <ServiceCard
                icon="🎯"
                title="Technical Advisory & Mentorship"
                description="Ongoing technical guidance as you scale your product"
                includes={[
                  "Weekly or bi-weekly check-ins",
                  "Code review and architecture guidance",
                  "Technical decision support",
                  "Best practices coaching",
                  "Scaling strategy",
                  "Team onboarding support",
                ]}
                timeline="Monthly retainer"
              />
              <ServiceCard
                icon="🔍"
                title="Code Audit & Guidance"
                description="One-time comprehensive review with actionable recommendations"
                includes={[
                  "Complete codebase review",
                  "Architecture assessment",
                  "Security vulnerability scan",
                  "Performance analysis",
                  "Detailed written report with priorities",
                  "2-hour video walkthrough session",
                ]}
                timeline="1-2 weeks"
              />
            </div>
          </section>

          {/* Why Work With Me Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Why Work With Me</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-2xl font-semibold mb-3">Expert in AI-Native Development</h3>
                <p className="text-gray-700 text-lg">
                  I build with Claude Code, Cursor, and AI tools daily. I understand the unique challenges of
                  transitioning from AI-assisted prototypes to production systems.
                </p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-2xl font-semibold mb-3">Production Experience at Scale</h3>
                <p className="text-gray-700 text-lg">
                  I&apos;ve shipped features used by millions at Spotify and Artsy. I know what it takes to build
                  reliable, scalable systems.
                </p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-2xl font-semibold mb-3">Current Founder Who Gets It</h3>
                <p className="text-gray-700 text-lg">
                  I&apos;m currently building Blaze, a fintech startup. I understand the constraints of limited
                  resources and the pressure to ship fast without cutting corners.
                </p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-2xl font-semibold mb-3">Design + Engineering</h3>
                <p className="text-gray-700 text-lg">
                  Rare combination of product design and full-stack engineering expertise. I can help with both the
                  technical implementation and the user experience.
                </p>
              </div>
            </div>
          </section>

          {/* Who This Is For Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Who This Is For</h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span>Solo founders who coded their MVP with AI tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span>&quot;Vibe coders&quot; transitioning from prototype to real users</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span>Non-technical founders who need technical guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span>Small teams scaling their first AI-built product</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span>Anyone who needs production infrastructure expertise</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8">How It Works</h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Free Consultation (30 min)</h3>
                  <p className="text-gray-700 text-lg">
                    We&apos;ll discuss your project, understand your needs and goals, and determine if we&apos;re a good fit.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom Proposal</h3>
                  <p className="text-gray-700 text-lg">
                    I&apos;ll create a tailored scope and timeline based on your specific situation and constraints.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Execution</h3>
                  <p className="text-gray-700 text-lg">
                    Regular check-ins, transparent communication, and hands-on guidance to get you production-ready.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Production Ready</h3>
                  <p className="text-gray-700 text-lg">
                    Launch with confidence, knowing your infrastructure is solid and scalable.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-20">
            <div className="bg-gray-50 p-12 rounded-2xl text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Take Your Project to Production?</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Let&apos;s chat about your project and how I can help you ship with confidence.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:hello@lucsucces.com?subject=Consultation Request"
                  className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-semibold"
                >
                  Book Free Consultation
                </a>
                <a
                  href="mailto:hello@lucsucces.com"
                  className="border border-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
                >
                  Email Me
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Services
