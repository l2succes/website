import type { ResumeData } from "./resume"

export const resumeDataCTO: ResumeData = {
  contact: {
    name: "Luc Succes",
    title: "Fractional CTO / Technical Co-Founder",
    email: "luc@lucsucces.com",
    location: "San Francisco, USA",
    linkedin: "linkedin.com/in/lucsucces",
    github: "github.com/l2succes",
    website: "lucsucces.com",
  },

  summary:
    "Technical leader and 3x startup CTO with 12+ years building and scaling engineering teams. Founded multiple venture-backed companies including a YC-backed fintech startup. Experienced in hiring from zero, defining architecture, and establishing engineering culture. Track record of raising $5.5M+ in venture funding, shipping products to millions of users, and mentoring engineers from junior to senior. Deep expertise across the full stack with a focus on making the right technical bets for early-stage companies.",

  skills: [
    {
      category: "Leadership",
      items: ["Technical Hiring", "Team Building", "Architecture Planning", "Vendor Evaluation", "Agile/Scrum", "Technical Due Diligence"],
    },
    {
      category: "Strategy",
      items: ["Tech Stack Selection", "Build vs Buy Decisions", "Cloud Cost Optimization", "Security & Compliance", "CI/CD & DevOps", "Technical Roadmapping"],
    },
    {
      category: "Stack",
      items: ["React", "Next.js", "React Native", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "Redis", "AWS", "Kubernetes", "Docker"],
    },
  ],

  experience: [
    {
      company: "Blaze",
      roles: [{ title: "Co-Founder & CTO", period: "2023 - Present" }],
      location: "Remote",
      startDate: "May 2023",
      endDate: "Present",
      highlights: [
        "Defined technical vision and architecture for stablecoin payments platform serving users in 50+ countries",
        "Selected and implemented tech stack (Next.js, NestJS, Prisma, PostgreSQL, Redis) balancing speed-to-market with scalability",
        "Designed microservices architecture on AWS EKS (Kubernetes) achieving 99.9% uptime",
        "Established CI/CD pipelines, code review processes, and engineering best practices from day one",
        "Raised $1.2M in funding including Y Combinator (S24 batch), owning technical narrative for investor pitches",
      ],
      technologies: ["React", "Next.js", "TypeScript", "React Native", "Node.js", "GraphQL", "PostgreSQL", "Redis", "AWS", "Kubernetes"],
    },
    {
      company: "Seasons",
      roles: [{ title: "Co-Founder & CTO", period: "2019 - 2022" }],
      location: "New York, NY",
      startDate: "July 2019",
      endDate: "February 2022",
      highlights: [
        "Hired and mentored a team of 7 engineers from scratch, establishing engineering culture, leveling, and career growth frameworks",
        "Architected full platform from zero: React Native apps, Node.js backend, PostgreSQL database, and AWS infrastructure",
        "Made key build-vs-buy decisions for inventory management, payments, and logistics integrations",
        "Led technical due diligence process for $4.3M raise from top VCs",
        "Managed vendor relationships and cloud infrastructure budget, keeping burn rate lean while scaling to thousands of active users",
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "GraphQL"],
    },
    {
      company: "Artsy",
      roles: [{ title: "Tech Lead / Senior Software Engineer", period: "2017 - 2019" }],
      location: "New York, NY",
      startDate: "January 2017",
      endDate: "September 2019",
      highlights: [
        "Led cross-functional team of 8 engineers building collector tools serving 2M+ monthly users",
        "Mentored junior and mid-level engineers through code reviews, architecture discussions, and regular 1:1s",
        "Drove adoption of shared React component library across 4 product teams, reducing duplicate code by 60%",
        "Owned technical planning and sprint processes for the collector experience team",
        "Built auction bidding platform with real-time WebSocket integration processing $100M+ annually",
      ],
      technologies: ["React", "React Native", "Node.js", "GraphQL", "Ruby on Rails", "PostgreSQL"],
    },
    {
      company: "Often",
      roles: [{ title: "Co-Founder & CTO", period: "2015 - 2016" }],
      location: "New York, NY",
      startDate: "June 2015",
      endDate: "December 2016",
      highlights: [
        "Sole technical founder: defined architecture, selected tech stack, and built entire product from ground up",
        "Shipped iOS keyboard app to 500K+ downloads and #1 in App Store for 72 hours",
        "Designed backend services handling 1M+ daily API requests with real-time content delivery",
        "Managed outsourced designers and QA contractors while owning all technical decisions",
      ],
      technologies: ["Swift", "Node.js", "MongoDB", "AWS"],
    },
    {
      company: "Spotify",
      roles: [{ title: "Software Engineer", period: "2013 - 2015" }],
      location: "New York, NY",
      startDate: "June 2013",
      endDate: "June 2015",
      highlights: [
        "Shipped features across iOS, web, and desktop clients to 100M+ users at scale",
        "Learned large-scale engineering practices: feature flags, A/B testing, cross-platform architecture",
        "Contributed to Radio feature improvements increasing listening session length by 15%",
      ],
      technologies: ["Objective-C", "JavaScript", "C++", "Python"],
    },
    {
      company: "YieldMo",
      roles: [{ title: "Founding Engineer", period: "2012 - 2013" }],
      location: "New York, NY",
      startDate: "June 2012",
      endDate: "May 2013",
      highlights: [
        "First engineer hire: architected the entire frontend framework and ad serving platform from scratch",
        "Grew and mentored frontend team from 1 to 5 engineers, establishing coding standards and hiring bar",
        "Built high-performance JavaScript SDK handling millions of daily impressions",
      ],
      technologies: ["JavaScript", "HTML/CSS", "Python"],
    },
  ],

  education: [
    {
      institution: "Y Combinator",
      degree: "S24 Batch",
      year: "2024",
    },
    {
      institution: "New York University",
      degree: "Bachelor of Science",
      field: "Computer Science",
      year: "2012",
    },
  ],
}
