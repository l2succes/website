export interface ContactInfo {
  name: string
  title: string
  email: string
  phone?: string
  location: string
  linkedin: string
  github?: string
  website: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Experience {
  company: string
  roles: { title: string; period: string }[]
  location: string
  startDate: string
  endDate: string
  highlights: string[]
  technologies?: string[]
}

export interface Education {
  institution: string
  degree: string
  field?: string
  year: string
  highlights?: string[]
}

export interface ResumeData {
  contact: ContactInfo
  summary: string
  skills: Skill[]
  experience: Experience[]
  education: Education[]
}

export const resumeData: ResumeData = {
  contact: {
    name: "Luc Succes",
    title: "Senior Full Stack Engineer",
    email: "luc@lucsucces.com",
    location: "San Francisco, USA",
    linkedin: "linkedin.com/in/lucsucces",
    github: "github.com/l2succes",
    website: "lucsucces.com",
  },

  summary:
    "Full stack engineer with 12+ years building consumer products at scale. Founded multiple venture-backed startups including a YC company. Led engineering teams at Artsy and shipped features to 100M+ users at Spotify. Deep expertise in React, Node.js, GraphQL, and cloud infrastructure. Currently building AI-powered tools and exploring the future of fintech through stablecoins.",

  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Go", "Swift", "Objective-C"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "React Native", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "GraphQL", "PostgreSQL", "Redis", "MongoDB", "REST APIs"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Vercel", "CI/CD"],
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
        "Architected end-to-end stablecoin payments platform for digital nomads and expats, serving users in 50+ countries",
        "Built full-stack application with Next.js, NestJS, Prisma, PostgreSQL, and Redis for high-performance caching",
        "Designed microservices architecture on AWS EKS (Kubernetes) achieving 99.9% uptime",
        "Implemented CI/CD pipeline with GitHub Actions, reducing deployment time from hours to minutes",
        "Raised $1.2M in funding including Y Combinator (S24 batch)",
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
        "Architected full platform from scratch: React Native apps, Node.js backend, and PostgreSQL database",
        "Built fashion rental marketplace from zero to thousands of active users",
        "Designed inventory management system handling 10,000+ items with real-time availability tracking",
        "Created recommendation engine using collaborative filtering to increase user engagement by 40%",
        "Mentored and hired a team of 7 engineers, establishing engineering culture and best practices",
        "Raised $4.3M from top VCs to build NYC's premier fashion rental platform",
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
        "Mentored junior and mid-level engineers through code reviews, architecture discussions, and 1:1s",
        "Built BMW Art Guide partnership feature with location-based show recommendations using React Native",
        "Created shared React component library adopted by 4 product teams, reducing duplicate code by 60%",
        "Built auction bidding platform with real-time WebSocket integration processing $100M+ annually",
        "Implemented server-side rendering for artwork pages, reducing time-to-interactive by 50%",
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
        "Architected entire system from ground up: Swift iOS app, Node.js backend, and MongoDB database",
        "Built iOS keyboard app reaching 500K+ downloads and #1 in App Store for 72 hours",
        "Designed backend services handling 1M+ daily API requests with real-time content delivery",
        "Created content management system for curating trending emoji and GIF content",
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
        "Built features for iOS, web, and desktop clients serving 100M+ users",
        "Developed Radio feature improvements increasing listening session length by 15%",
        "Implemented A/B testing framework for new feature rollouts across platforms",
        "Contributed to cross-platform codebase in Objective-C, JavaScript, and C++",
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
        "First frontend engineer at YieldMo; architected the entire frontend framework from scratch",
        "Built high-performance ad serving platform with JavaScript SDK handling millions of impressions daily",
        "Grew and mentored frontend team from 1 to 5 engineers, establishing coding standards and best practices",
        "Created responsive ad units achieving 95%+ viewability scores",
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
