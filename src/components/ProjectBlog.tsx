import Image from "next/image";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { siteContent } from "@/data/siteContent";

type Project = (typeof siteContent.projects)[number];

type ProjectWriteup = {
  intro: string;
  context: string;
  buildNotes: string;
  details: string[];
  highlights: string[];
};

const projectCopy: Record<Project["uid"], ProjectWriteup> = {
  "phodu-club": {
    intro:
      "Phodu Club is my flagship EdTech platform and current full-stack engineering ownership area: a production serverless learning product serving 37,755+ learners and 38,195+ registered users across courses, paid/free tests, BITSAT Open, free daily practice, learner dashboards, admin operations, DRM-backed video, payments, and AI-assisted analysis.",
    context:
      "The platform is built with Next.js, SST, Drizzle, and PostgreSQL, deployed in ap-south-1 through SST/IaC. Each stage gets consistent secrets, database links, and controlled bucket/email permissions, while sensitive environments use protected resources. The infrastructure is not just hosting: it includes a VPC with NAT, bastion access patterns for operators and database access, RDS PostgreSQL tuned for production load, S3 for public/static delivery and browser uploads with CORS locked to web origins, SES for outbound transactional email from a verified domain, CloudFront and ACM for custom-domain TLS, and Lambda for OpenNext/Next.js SSR, API routes, and image optimization.",
    buildNotes:
      "The highest-pressure milestone was BITSAT Open, an All-India mock exam targeting roughly 10,000 concurrent test-takers for a three-hour slot. I handled infra and operational readiness: load testing, scaling, queue and rate-limit strategy, Lambda memory/timeouts/reserved concurrency, warm pools for exam traffic, real-time monitoring, and stability work during the slot. On the product side, the exam client needed resilient autosave, a unified question-state model, and single-flight fetches so high-concurrency attempts stayed consistent under load. The result is the project I point to when someone asks whether I can own a vertical slice from AWS infrastructure to exam UX.",
    details: [
      "Scale and ownership: end-to-end delivery of a live learning platform serving 37,755+ learners and 38,195+ registered users across courses, tests, free daily practice, learner dashboards, and admin workflows.",
      "SST/IaC: declarative AWS stacks ensure each stage receives consistent secrets, database links, bucket permissions, email permissions, and protected-resource behavior for sensitive environments.",
      "Networking: VPC, NAT, and bastion host patterns support operator and database access without treating production data paths casually.",
      "Data layer: managed RDS PostgreSQL with Drizzle ORM gives the product typed schema work, operational migrations, and production-ready relational data for learners, tests, attempts, bundles, and admin flows.",
      "Storage and mail: S3 handles public/static delivery and browser uploads with CORS locked to approved web origins; SES sends transactional mail from the verified Phodu domain.",
      "Compute and edge: Lambda powers OpenNext/Next.js SSR, API routes, and image optimization; CloudFront and ACM terminate TLS on custom domains for faster, safer delivery.",
      "Exam traffic readiness: tuned Lambda memory, timeouts, reserved concurrency, and warm-pool behavior for spikes around scheduled exams and high-stakes attempts.",
      "Scheduled jobs: EventBridge rules invoke Lambda cron workflows, including daily practice generation and other recurring platform tasks.",
      "BITSAT Open operations: infra and stability work for an All-India mock targeting about 10,000 concurrent test-takers during a three-hour window, including load testing, scaling, queuing, and rate limits.",
      "Exam client reliability: resilient autosave, unified question-state model, and single-flight fetches keep attempts consistent even when many students submit, save, and navigate at once.",
      "Trust and abuse prevention: Cloudflare Turnstile bot protection reduces automated abuse around login, tests, and sensitive platform surfaces.",
      "DRM content delivery: protected video playback and identity-aware access paths keep premium lectures secure instead of exposing naive public media URLs.",
      "AI-assisted feedback: attempt analysis helps students understand performance patterns and turn exam history into actionable revision signals.",
      "Daily English and LR practice: fine-tuned OpenAI models generate 10 English and 10 Logical Reasoning questions per day; early quality gaps were addressed through iteration, evaluation, and prompt/model refinement.",
      "Admin and ops tooling: RBAC, learner management, enrollments, checkout leads, support workflows, and bundle assignment let non-engineering operators run the platform day to day.",
    ],
    highlights: [
      "37,755+ learners and 38,195+ registered users on a real production EdTech surface.",
      "Serverless AWS architecture owned through SST/IaC, not manual console wiring.",
      "BITSAT Open readiness for roughly 10,000 concurrent test-takers in a fixed three-hour exam window.",
      "Reliability work where it matters: autosave, single-flight fetches, state consistency, queues, and rate limits.",
      "Security and trust layers: Cloudflare Turnstile, DRM-protected playback, protected environments, and controlled upload origins.",
      "AI work connected to user value: fine-tuned daily English/LR practice plus attempt analysis.",
      "Clear full-stack range: infrastructure, database, exam client, admin ops, content delivery, and learner feedback.",
    ],
  },
  crackit: {
    intro:
      "CrackIT is my primary growth-facing counterpart to Phodu Club: a Next.js platform aimed at engineering entrance exams (BITSAT, MHTCET, COMEDK, VITEEE, MET, UGEE, KCET, and adjacent resources). Where Phodu Club optimises for enrolled learners and operators, CrackIT optimises for discovery, trust, and conversion—SEO-heavy pages, structured content, testimonials, mentorship storytelling, and Razorpay-backed purchase paths.",
    context:
      "Content is modelled in Sanity CMS so editors can ship landing iterations without redeploying React trees; Prisma sits on the transactional side for cart-adjacent data and reliable reads around purchases and profile flows. My work parallels what I later formalised at Mercor—platform-wide SEO hygiene—implemented here as JSON-LD for FAQs and entities where relevant, exhaustive metadata patterns, internally consistent routes, and sitemap discipline so exam-specific URLs stay crawl-friendly.",
    buildNotes:
      "Engineering-wise CrackIT blends marketing velocity with reliability: reusable hero/feature/testimonial layouts parametrised per exam; dropdown-heavy navigation patterns without CLS regressions; preview flows that showcase question quality and mentorship proof points; integrations with Razorpay for collections; observability-minded forms and webhook handlers; and careful separation between Sanity-driven editorial slices and Prisma-backed operational reads so writers cannot accidentally break checkout-critical schemas.",
    details: [
      "Exam-specific landing architecture: repeatable sections (hero, outcomes, syllabus cues, FAQs, mentor proof, CTAs) customised per entrance test.",
      "Sanity schemas for blogs, news, formula sheets, reviews, and reusable hero/feature modules—publish cycles decouple from engineering releases.",
      "Structured SEO: meta titles/descriptions tuned per route family, FAQ schema where it earns snippets, internal linking between resources and series.",
      "Sitemap generation strategy aligned with canonical URLs—avoid duplicate parameterised crawl traps.",
      "Razorpay integration with server-validated intents and user-detail capture tuned for incomplete funnel recovery.",
      "Prisma models scoped to transactional reads/writes separate from CMS payloads—clean blast radius when editorial changes.",
      "Performance-conscious bundles: selective SSR/ISR choices so marquee pages stay fast enough for acquisition traffic.",
      "Review carousel and mentorship sections engineered as lazy-friendly islands—heavy media does not block first paint.",
      "Trust surfaces: embedded testimonials, BITS/IIT mentor narratives, \"question quality\" preview strips mirroring buyer objections.",
      "Nav patterns supporting dense IA (formula sheets, predictor tools, blogs, news, stories) without sacrificing keyboard accessibility.",
      "Operational resilience patterns borrowed from broader backend practice—rate limiting adjacent handlers where webhooks touch payments.",
      "Pairs strategically with Phodu Club: CrackIT attracts and qualifies; Phodu retains and operates.",
    ],
    highlights: [
      "Demonstrates CMS-led velocity without sacrificing typed transactional cores.",
      "SEO stack mirrors production-grade patterns (structure, schema, sitemaps).",
      "Conversion anatomy: hero proof → objections → testimonial reinforcement → payment.",
      "Exam catalogue scalability via composition instead of one-off pages.",
      "Payment-aware backend discipline—not client-only Razorpay experiments.",
      "Shows range across acquisition surfaces and institutional storytelling.",
      "Natural sibling narrative to deep learner platforms.",
    ],
  },
  "questions-db-pipeline": {
    intro:
      "Questions DB Pipeline is an AI-assisted workflow for turning tagging sheets and digitised question material into a structured MongoDB question database.",
    context:
      "The project includes a Flask web app plus CLI scripts for Mathpix OCR, LaTeX validation, MongoDB seeding, duplicate checks, PDF verification, PPT generation, S3 image upload, and OpenAI-based chapter/topic/concept tagging.",
    buildNotes:
      "The strongest part of the project is the pipeline thinking: taking messy educational content, validating it, enriching it with AI, storing it consistently, and giving operators a UI to inspect and fix the data.",
    details: [
      "Flask dashboard for adding, browsing, editing, validating, and exporting questions.",
      "Mathpix OCR integration to convert screenshots into LaTeX-backed question content.",
      "OpenAI tagging flow using examples and taxonomy files to assign chapter, topic, concept, level, and time.",
      "Verification outputs including generated PDFs, cross-verification, PPT export, and S3 image upload support.",
    ],
    highlights: [
      "Best example of AI workflow automation in the portfolio.",
      "Turns manual academic content operations into a repeatable pipeline.",
      "Combines Python scripting, Flask UI, MongoDB, OpenAI, Mathpix, LaTeX, and S3.",
      "Useful bridge between education domain knowledge and developer tooling.",
    ],
  },
  shadchat: {
    intro:
      "Shadchat is a realtime communication product focused on chat, video, and voice calls. It demonstrates how realtime interactions, authentication, persistence, and client state can come together in a polished app.",
    context:
      "The app is built around the kind of interaction where latency and interface feedback matter. Messaging, room/user state, call surfaces, and account flows all need to feel responsive and predictable.",
    buildNotes:
      "Prisma handled structured data, Clerk handled authentication, Socket.io powered live updates, Zod guarded inputs, and Zustand kept client-side interaction state manageable.",
    details: [
      "Realtime chat flows with Socket.io-driven updates.",
      "Authentication and user management with Clerk.",
      "Prisma-backed data modelling for users, rooms, and messages.",
      "Typed validation and client state management with Zod and Zustand.",
    ],
    highlights: [
      "Good example of realtime product architecture.",
      "Balances backend state with client responsiveness.",
      "Shows practical full-stack use of auth, sockets, validation, and persistence.",
      "Useful foundation for chat-heavy collaboration products.",
    ],
  },
  "code-canvas-connect": {
    intro:
      "Code Canvas Connect is a realtime interview platform for collaborative coding sessions. It brings interviewer and candidate into a shared workspace.",
    context:
      "The project focuses on the online technical interview workflow: realtime collaboration, session state, backend persistence, and a UI that keeps the interview task central.",
    buildNotes:
      "React powers the user interface while Express and Mongoose handle application data. Socket.io keeps collaboration immediate, and bcrypt supports authentication foundations.",
    details: [
      "Realtime collaboration between interviewer and candidate.",
      "Express API and Mongoose-backed data model.",
      "Authentication foundation using bcrypt.",
      "Focused React interface for interview-style workflows.",
    ],
    highlights: [
      "Strong realtime collaboration use case.",
      "Clear product purpose with a focused user journey.",
      "Good example of MERN-style architecture.",
      "Shows interview tooling and shared workspace thinking.",
    ],
  },
  digislate: {
    intro:
      "Digislate is a realtime collaborative whiteboard for visual teamwork. It focuses on sketching, shared interaction, and keeping canvas state in sync.",
    context:
      "Collaborative whiteboards are tricky because the interface must feel immediate while syncing actions across users. Digislate explores that interaction pattern in a compact product.",
    buildNotes:
      "Next.js and TypeScript provide the app structure, while Socket.io powers realtime collaboration. The UI stays intentionally minimal so the shared drawing experience remains the focus.",
    details: [
      "Realtime whiteboard collaboration.",
      "Socket.io updates for shared visual state.",
      "TypeScript-based application structure.",
      "Minimal interface designed around visual teamwork.",
    ],
    highlights: [
      "Good demonstration of realtime visual collaboration.",
      "Different interaction model from standard CRUD apps.",
      "Shows canvas-like thinking and shared state synchronization.",
      "Useful proof of collaboration product patterns.",
    ],
  },
  "github-readme-creator": {
    intro:
      "Github Readme Creator is a utility for generating better GitHub profile and repository README pages quickly.",
    context:
      "The project is intentionally small and practical: it helps developers produce a polished markdown artifact without having to manually structure everything from scratch.",
    buildNotes:
      "The main design goal was reducing friction. A focused Next.js and Tailwind interface guides users toward an output that is immediately useful.",
    details: [
      "Guided README generation workflow.",
      "Next.js app with Tailwind styling.",
      "Developer-focused utility surface.",
      "Fast path from input to usable markdown output.",
    ],
    highlights: [
      "Clear single-purpose developer tool.",
      "Shows ability to keep small tools focused.",
      "Good example of product simplification.",
      "Practical output-driven interface.",
    ],
  },
  "resume-builder-parser": {
    intro:
      "Resume Builder and Parser helps users create, inspect, and parse resumes through a web interface with PDF tooling.",
    context:
      "Document workflows can get messy quickly because users expect editing, previewing, parsing, and export-like behavior to feel seamless. This project explores that space.",
    buildNotes:
      "PDF.js and React PDF support the document layer, Redux manages application state, and Tailwind keeps the editing/parsing workflow clean.",
    details: [
      "Resume building and parsing workflow.",
      "PDF rendering/parsing with PDF.js and React PDF.",
      "Redux-managed state for document interactions.",
      "Tailwind interface for a cleaner document editing experience.",
    ],
    highlights: [
      "Good document-processing project.",
      "Handles more complex UI state than a simple form app.",
      "Shows PDF tooling and frontend workflow design.",
      "Useful example of turning unstructured documents into app state.",
    ],
  },
  "2-d-platformer-game": {
    intro:
      "2-D Platformer Game is a browser-playable JavaScript game project built around classic side-scrolling mechanics.",
    context:
      "Although it is different from the web products, it is useful because games force attention to feel, timing, feedback, keyboard input, level design, and interaction loops.",
    buildNotes:
      "Kaboom.js provides the game development foundation. The work explores collisions, movement, sprites, platforming behavior, and browser delivery.",
    details: [
      "Platformer movement and collision behavior.",
      "Kaboom.js game development workflow.",
      "Keyboard-driven interaction patterns.",
      "Browser-playable deployment.",
    ],
    highlights: [
      "Shows interaction design outside standard web apps.",
      "Useful for thinking about responsiveness and feedback.",
      "Compact game-development experiment.",
      "Adds variety to the portfolio.",
    ],
  },
  "shad-the-genius": {
    intro:
      "Shad The Genius is an AI SaaS project that combines product structure, authentication, support, validation, and AI generation workflows.",
    context:
      "The project explores the typical shape of an AI SaaS app: authenticated users, structured data, generation flows, support surfaces, validation, and a clean interface around AI features.",
    buildNotes:
      "Next.js, Prisma, Clerk, Crisp, OpenAI, Zod, and Zustand work together to form a realistic SaaS stack. The product surface is built around making AI generation feel controlled and usable.",
    details: [
      "AI-powered workflows with OpenAI.",
      "SaaS structure using Next.js, Prisma, and Clerk.",
      "Support integration through Crisp.",
      "Typed validation and client-side state with Zod and Zustand.",
    ],
    highlights: [
      "Strong example of AI app product architecture.",
      "Combines generation workflows with SaaS fundamentals.",
      "Shows practical use of auth, database, support, validation, and state.",
      "Good early foundation for AI product thinking.",
    ],
  },
};

const accentByUid: Partial<Record<Project["uid"], string>> = {
  "phodu-club": "from-blue-500 via-cyan-400 to-yellow-300",
  crackit: "from-orange-500 via-pink-500 to-yellow-300",
  "questions-db-pipeline": "from-emerald-500 via-lime-400 to-yellow-300",
};

function getProjectCopy(project: Project) {
  return projectCopy[project.uid];
}

export default function ProjectBlog({ project }: { project: Project }) {
  const copy = getProjectCopy(project);

  return (
    <main>
      <Bounded>
        <Link
          href="/project"
          className="mb-8 inline-block text-lg font-bold text-slate-400 transition hover:text-yellow-300"
        >
          ← Back to projects
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-yellow-300">
              {project.date}
            </p>
            <Heading as="h1" size="lg" className="mt-3">
              {project.title}
            </Heading>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
              Stack
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm font-bold text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <ProjectHeroImage project={project} />
      </Bounded>

      <Bounded>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <Heading as="h2" size="md">
            What this project is
          </Heading>
          <div className="prose prose-xl prose-slate prose-invert">
            <p>{copy.intro}</p>
            <p>{copy.context}</p>
            <p>{copy.buildNotes}</p>
          </div>
        </div>
      </Bounded>

      <Bounded>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <Heading as="h2" size="md">
            Project details
          </Heading>
          <div className="grid gap-4">
            {copy.details.map((detail, index) => (
              <div
                key={detail}
                className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6"
              >
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-yellow-300">
                  Detail {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-xl font-bold leading-8 text-slate-200">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Bounded>

      <Bounded>
        <Heading as="h2" size="md">
          Build highlights
        </Heading>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {copy.highlights.map((highlight, index) => (
            <div
              key={highlight}
              className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6"
            >
              <p className="text-5xl font-black text-slate-700">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 text-xl font-bold leading-8 text-slate-200">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </Bounded>
    </main>
  );
}

function ProjectHeroImage({ project }: { project: Project }) {
  return (
    <div className="project-hero-3d relative mt-12">
      <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.18),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.18),transparent_30%)] blur-2xl" />
      <div className="project-hero-3d-frame relative overflow-hidden rounded-[2rem] border border-slate-600/80 bg-slate-950 shadow-2xl shadow-slate-950/70">
        <div className="flex h-12 items-center justify-between border-b border-white/10 bg-slate-900/95 px-5">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="max-w-[55%] truncate rounded-full border border-white/10 bg-slate-950/80 px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
            {project.uid.replaceAll("-", " ")}
          </div>
          <div className="hidden h-px w-16 bg-gradient-to-r from-transparent via-yellow-300/70 to-transparent sm:block" />
        </div>

        <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div
              className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${
                accentByUid[project.uid] ?? "from-slate-800 via-slate-950 to-yellow-500"
              } p-8`}
            >
              <div className="max-w-2xl rounded-3xl border border-white/15 bg-slate-950/75 p-8 text-center shadow-2xl">
                <p className="text-5xl font-black leading-tight tracking-tight text-slate-100 md:text-7xl">
                  {project.title.split(" - ")[0]}
                </p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-300">
                  Desktop project case study
                </p>
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/35 via-transparent to-white/10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/55 to-transparent" />
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
      </div>
      <div className="project-hero-3d-shadow pointer-events-none mx-auto mt-8 h-8 w-4/5 rounded-[100%] bg-slate-950/80 blur-2xl" />
    </div>
  );
}
