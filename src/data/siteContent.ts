export const siteContent = {
  settings: {
    name: "Shadab",
    nav: [
      { href: "/about", label: "About" },
      { href: "/project", label: "Projects" },
    ],
    ctaLabel: "Contact",
    ctaUrl: "https://www.linkedin.com/in/md-shadab-kalim-35159422b/",
    github: "https://github.com/Shadboy9625",
    twitter: "https://twitter.com/shadabkalim675",
    linkedin: "https://www.linkedin.com/in/md-shadab-kalim-35159422b/",
  },
  hero: {
    firstName: "Shadab",
    lastName: "Kalim",
    tagLine: "Crafting Future-Ready Web Experiences",
  },
  biography: {
    heading: "About Me",
    body: [
      "I'm Md Shadab Kalim—a software engineer focused on backend systems, infrastructure, and full-stack products. I'm from Ranchi and studied Computer Science at BITS Pilani (B.E., CGPA 7.64), where I won Quark Hackathon 2024 and earned the Google Cloud Digital Leader certification at 90%.",
      "Professionally, I've shipped high-throughput automation at Mercor (Redis-backed queues, LLM-assisted parsing for LinkedIn workflows, enrichment pipelines with BrightData and multi-provider waterfalls—546k+ profiles and 35k+ emails enriched—with resilient provider integrations: API key rotation, credit accounting, retries, and Slack alerting). I also built recruiter-facing primitives like a Unified Inbox and candidate communication panels, and owned SEO/content infrastructure across Next.js, JSON-LD, sitemaps, and Sanity CMS.",
      "Earlier I spent six months at Zeal AI building FastAPI services that aggregated restaurant data from seven-plus booking platforms, large scraping pipelines with retries, deduplication, proxy rotation, and geo-collision handling, plus RAG-style search over vector databases for price- and cuisine-aware queries. At Dover Corporation I deployed Node.js services on AWS EC2 for distributor onboarding automation, CI/CD on GitHub Actions, and production hardening including rate limiting, bot mitigation, and DDoS-minded controls.",
      "Alongside work, I've invested heavily in education technology: at Phodu Club I own end-to-end delivery of a serverless learning platform serving 37,755+ learners and 38,195+ registered users across courses, tests, BITSAT Open, free daily practice, DRM video, payments, admin RBAC, and AWS/SST infrastructure. The ecosystem around it is mine too: phodu.club is the community and acquisition surface that fills the funnel, and BetterBooks (betterbooks.in) is a commission-free peer-to-peer marketplace I built end-to-end for used prep books, now at 3,269 live listings with ₹1,90,761 saved by students and 4,832 students connected. CrackIT is where I combine conversion-focused Next.js surfaces with Sanity-driven SEO and Razorpay-backed flows for engineering entrance audiences.",
      "I'm strongest where reliability meets product velocity—queues and idempotency, Postgres and Prisma, AWS and SST, and pragmatic AI when retrieval or enrichment actually moves metrics.",
    ],
    avatar:
      "https://images.prismic.io/portfolio-shadab/ZtKVEEaF0TcGJm3s_WhatsAppImage2024-08-31at9.28.11AM.jpeg?auto=format%2Ccompress&rect=157%2C422%2C659%2C879&w=1200&h=1600",
    buttonText: "Resume",
    buttonUrl: "/Shadab_CV.pdf",
  },
  tech: {
    title: "What I use",
    items: [
      { techName: "NEXT.JS", techColor: "#61FF00" },
      { techName: "NODE.JS", techColor: "#0400FF" },
      { techName: "PYTHON", techColor: "#3776AB" },
      { techName: "POSTGRES", techColor: "#336791" },
      { techName: "REDIS", techColor: "#DC382D" },
      { techName: "AWS", techColor: "#FF9900" },
      { techName: "PRISMA", techColor: "#FF0019" },
    ],
  },
  experiences: [
    {
      title: "Full Stack Engineer (Ed-Tech, Remote)",
      timePeriod: "March 2025 – Present",
      institution: "Phodu Club · learn.phodu.club · phodu.club · betterbooks.in",
      description:
        "• Own end-to-end delivery of a serverless learning platform using Next.js, SST, and Drizzle, serving 37,755+ learners and 38,195+ registered users across courses, tests, and free daily practice.\n\n• Manage AWS infrastructure via SST/IaC across ap-south-1: stage-aware secrets, database links, protected production resources, S3/browser-upload permissions, SES transactional mail, CloudFront, ACM certificates, Lambda, RDS PostgreSQL, VPC, NAT, and bastion access patterns.\n\n• Ran infrastructure and operations for BITSAT Open, an All-India mock targeting approximately 10,000 concurrent test-takers during a three-hour window, including load testing, scaling, queues, rate limits, and real-time stability monitoring.\n\n• Shipped reliable exam-client flows with resilient autosave, a unified question-state model, and single-flight fetches so high-concurrency attempts remain consistent under load.\n\n• Added trust and content-delivery layers including Cloudflare Turnstile bot protection, DRM-protected video playback, AI-assisted attempt analysis, and fine-tuned OpenAI daily English/LR practice generation.\n\n• Built BetterBooks (betterbooks.in) end-to-end—a commission-free peer-to-peer marketplace for used prep books with admin-reviewed listings, S3-backed photo/video uploads, exam and subject browse, and a direct WhatsApp handoff instead of platform-held payments—now at 3,269 live listings, ₹1,90,761 saved by students, and 4,832 students connected.\n\n• Maintain phodu.club, the WordPress/Elementor community and acquisition surface behind Cloudflare: performance and Core Web Vitals work, custom scripts fixing page-builder defaults, SEO across the exam catalogue, and funnel wiring into the learning platform.",
    },
    {
      title: "Software Engineer (Remote)",
      timePeriod: "July 2025 – Present",
      institution: "Mercor",
      description:
        "• Designed and scaled backend automation using Redis queues, rate limiting, and LLM-based message parsing for safe high-throughput LinkedIn workflows.\n\n• Built distributed enrichment pipelines integrating BrightData and multi-provider email/phone waterfalls—546k+ profile enrichments and 35k+ email enrichments delivered.\n\n• Implemented API key rotation, credit accounting, retries, and Slack-based monitoring for reliability under provider rate limits.\n\n• Developed recruiter platform primitives including a Unified Inbox (Unibox) and candidate communication side panel for consolidated multi-channel data.\n\n• Owned platform-wide SEO and content infrastructure: Next.js, JSON-LD schemas, sitemaps, and Sanity CMS.",
    },
    {
      title: "Full Stack Software Developer Intern (Remote)",
      timePeriod: "December 2024 – May 2025",
      institution: "Zeal AI",
      description:
        "• Designed backend services with Python and FastAPI to aggregate and normalize restaurant data from seven-plus booking platforms with near real-time synchronization.\n\n• Built large-scale scraping pipelines with retries, deduplication, proxy rotation, and geo-collision handling for regional accuracy.\n\n• Implemented RAG-style query pipelines using GPT APIs and vector databases for price-aware and cuisine-specific search.",
    },
    {
      title: "Software Development Engineer Intern (On-site)",
      timePeriod: "May 2024 – July 2024",
      institution: "Dover Corporation · Bengaluru",
      description:
        "• Built and deployed backend services with Node.js on AWS EC2, automating distributor onboarding workflows and eliminating manual database updates.\n\n• Designed CI/CD with GitHub Actions and implemented rate limiting, bot mitigation, and DDoS-minded protections for production stability.",
    },
  ],
  education: [
    {
      title: "B.E. Computer Science",
      timePeriod: "2021 – 2025",
      institution: "BITS Pilani · Pilani, Rajasthan",
      description:
        "Computer Science coursework with CGPA 7.64. Winner — Quark Hackathon 2024, BITS Pilani. Google Cloud Digital Leader — certified with 90% score.\n\nFocused on systems programming, backend architecture, and shipping production web products alongside internships.",
    },
    {
      title: "Class XII (Science), CBSE",
      timePeriod: "2021",
      institution: "Jawahar Vidya Mandir, Shyamali · Ranchi",
      description: "96.2%",
    },
    {
      title: "Class X, CBSE",
      timePeriod: "2019",
      institution: "Jawahar Vidya Mandir, Shyamali · Ranchi",
      description: "95.8%",
    },
  ],
  projects: [
    {
      uid: "phodu-club",
      title: "Phodu Club - Serverless EdTech learning platform",
      date: "2026-05-16",
      tags: [
        "Next.js 15",
        "TypeScript",
        "Drizzle",
        "PostgreSQL",
        "SST",
        "AWS",
        "Better Auth",
        "Juspay",
        "VdoCipher",
        "CloudFront",
        "OpenAI",
      ],
      image: "/screenshots/phodu-club-learn.png",
      liveLink: "https://learn.phodu.club",
    },
    {
      uid: "betterbooks",
      title: "BetterBooks - Peer-to-peer used textbook marketplace",
      date: "2026-08-20",
      tags: [
        "Next.js",
        "TypeScript",
        "Drizzle",
        "PostgreSQL",
        "SST",
        "AWS",
        "S3",
        "Admin Moderation",
        "WhatsApp Handoff",
      ],
      image: "/screenshots/betterbooks-home.png",
      liveLink: "https://betterbooks.in",
    },
    {
      uid: "phodu-club-web",
      title: "phodu.club - Community and acquisition site",
      date: "2026-08-04",
      tags: [
        "WordPress",
        "Elementor",
        "Cloudflare",
        "Core Web Vitals",
        "SEO",
        "Custom JS",
        "Funnel",
      ],
      image: "/screenshots/phodu-club-web.png",
      liveLink: "https://phodu.club",
    },
    {
      uid: "crackit",
      title: "CrackIT - Engineering entrance test prep platform",
      date: "2026-05-16",
      tags: ["Next.js", "Sanity", "Prisma", "Razorpay", "SEO", "Test Series"],
      image: "/screenshots/crackit-home.png",
      liveLink: "https://crackit.co.in",
    },
    {
      uid: "questions-db-pipeline",
      title: "Questions DB Pipeline - AI question digitisation workflow",
      date: "2026-05-16",
      tags: ["Python", "Flask", "MongoDB", "OpenAI", "Mathpix", "S3", "LaTeX"],
      image: null,
      liveLink: null,
    },
    {
      uid: "shadchat",
      title: "Shadchat - Realtime chat, video & voice calls",
      date: "2023-12-31",
      tags: ["Next.js", "Prisma", "Socket.io", "Clerk", "Zod", "Zustand"],
      image:
        "https://images.prismic.io/portfolio-shadab/659afd8d531ac2845a2731e0_Screenshot2024-01-08010724.png?auto=format,compress",
      liveLink: "https://shad-chat-production.up.railway.app",
    },
    {
      uid: "code-canvas-connect",
      title: "Code Canvas Connect - Realtime interview platform",
      date: "2023-12-28",
      tags: ["React", "Express", "Bcrypt", "Mongoose", "Socket.io"],
      image:
        "https://images.prismic.io/portfolio-shadab/659b8ce7531ac2845a2733a7_Screenshot2024-01-08111701.png?auto=format,compress",
      liveLink: "https://code-canvas-connect.vercel.app/",
    },
    {
      uid: "digislate",
      title: "Digislate - Realtime Collaborative Whiteboard",
      date: "2023-12-25",
      tags: ["Next.js", "Typescript", "Socket.io"],
      image:
        "https://images.prismic.io/portfolio-shadab/659afb90531ac2845a2731cd_Screenshot2024-01-08005907.png?auto=format,compress",
      liveLink: "https://digislate-production.up.railway.app",
    },
    {
      uid: "github-readme-creator",
      title: "Github Readme Creator",
      date: "2023-12-20",
      tags: ["Next.js", "Tailwind CSS"],
      image:
        "https://images.prismic.io/portfolio-shadab/659afcac531ac2845a2731d4_Screenshot2024-01-08010354.png?auto=format,compress",
      liveLink: "https://readmecreator.vercel.app",
    },
    {
      uid: "resume-builder-parser",
      title: "Resume Builder and Parser",
      date: "2023-11-09",
      tags: ["Next.js", "Pdf.js", "React-pdf", "Redux", "Tailwind CSS"],
      image:
        "https://images.prismic.io/portfolio-shadab/659bb128531ac2845a2733ed_Screenshot2024-01-08135354.png?auto=format,compress",
      liveLink: "https://resume-parser-crafter.vercel.app",
    },
    {
      uid: "2-d-platformer-game",
      title: "2-D Platformer Game",
      date: "2023-09-08",
      tags: ["Javascript"],
      image:
        "https://images.prismic.io/portfolio-shadab/659aff7b531ac2845a2731e1_Screenshot2024-01-08011552.png?auto=format,compress",
      liveLink: "https://shadboy9625.github.io/super-mango",
    },
    {
      uid: "shad-the-genius",
      title: "Shad The Genius - AI SaaS",
      date: "2023-06-05",
      tags: ["Next.js", "Typescript", "Prisma", "Clerk", "Crisp", "OpenAI", "Zod", "Zustand"],
      image:
        "https://images.prismic.io/portfolio-shadab/659ad0aa531ac2845a27313e_Screenshot2024-01-07215607.png?auto=format,compress",
      liveLink: "https://shad-the-genius.vercel.app",
    },
  ],
} as const;
