"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Shapes } from "@/components/Shapes";
import { siteContent } from "@/data/siteContent";

gsap.registerPlugin(ScrollTrigger);

const ecosystemSurfaces = [
  {
    uid: "phodu-club",
    domain: "learn.phodu.club",
    role: "Learning platform",
    body: "Courses, paid and free tests, BITSAT Open, daily practice, DRM video, payments, and admin ops on serverless AWS.",
    meta: "Next.js · SST · Drizzle",
  },
  {
    uid: "phodu-club-web",
    domain: "phodu.club",
    role: "Community + acquisition",
    body: "The public front door: prep guides, exam pages, free WhatsApp communities, and the funnel into the platform.",
    meta: "WordPress · Cloudflare · SEO",
  },
  {
    uid: "betterbooks",
    domain: "betterbooks.in",
    role: "Marketplace",
    body: "Commission-free peer-to-peer resale of used prep books, with reviewed listings and a WhatsApp handoff.",
    meta: "3,269 listings · ₹1.9L+ saved",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPhodu />
    </>
  );
}

export function AboutPageContent() {
  return (
    <>
      <Biography />
      <TechList />
      <Experience />
      <Education />
    </>
  );
}

export function ProjectPageContent() {
  return <Projects />;
}

function Hero() {
  const component = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);

    return () => ctx.revert();
  }, []);

  const renderLetters = (name: string, key: string) =>
    name.split("").map((letter, index) => (
      <span
        key={`${key}-${index}`}
        className={`name-animation name-animation-${key}-index inline-block opacity-0`}
      >
        {letter}
      </span>
    ));

  return (
    <Bounded ref={component}>
      <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
        <Shapes />
        <div className="col-start-1 md:row-start-1" data-speed=".2">
          <h1
            className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label={`${siteContent.hero.firstName} ${siteContent.hero.lastName}`}
          >
            <span className="block text-slate-300">
              {renderLetters(siteContent.hero.firstName, "first")}
            </span>
            <span className="-mt-[.2em] block text-slate-500">
              {renderLetters(siteContent.hero.lastName, "last")}
            </span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            {siteContent.hero.tagLine}
          </span>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/about" label="About me" />
            <Button href="/project" label="View projects" showIcon={false} />
          </div>
        </div>
      </div>
    </Bounded>
  );
}

function FeaturedPhodu() {
  return (
    <section className="px-4 pb-12 pt-2 md:px-6 md:pb-16 lg:pb-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2rem] border border-yellow-300/20 bg-slate-950/70 p-5 shadow-2xl shadow-slate-950/50 backdrop-blur md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.32em] text-yellow-300">
            Featured Production Work
          </p>
          <Heading as="h2" size="md" className="mt-4">
            The Phodu ecosystem: three surfaces, one funnel
          </Heading>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-9 text-slate-300">
            I own end-to-end delivery of the Phodu Club learning platform: Next.js,
            SST/IaC, Drizzle/Postgres, AWS infra, exam clients, daily practice,
            protected video, and operator tooling for a live EdTech audience. Around
            it sit the community site that fills the funnel and BetterBooks, a
            commission-free marketplace that recirculates the books.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/project/phodu-club" label="Read case study" />
            <Button href="https://learn.phodu.club" label="Visit platform" showIcon={false} />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["37,755+", "learners served"],
            ["38,195+", "registered users"],
            ["~10k", "BITSAT Open concurrent target"],
            ["ap-south-1", "SST-managed AWS region"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-slate-700 bg-slate-900/80 p-5"
            >
              <p className="text-4xl font-black tracking-tight text-slate-100">
                {value}
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                {label}
              </p>
            </div>
          ))}
          <div className="sm:col-span-2 rounded-3xl border border-slate-700 bg-slate-900/80 p-5">
            <p className="text-sm font-black uppercase tracking-[0.26em] text-yellow-300">
              Reliability + Trust
            </p>
            <p className="mt-3 text-lg font-semibold leading-8 text-slate-300">
              BITSAT Open infra readiness, resilient autosave, unified question
              state, single-flight fetches, Cloudflare Turnstile, DRM playback,
              AI attempt analysis, and fine-tuned OpenAI English/LR practice.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-yellow-300">
            Surfaces I ship
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {ecosystemSurfaces.map((surface) => (
              <Link
                key={surface.uid}
                href={`/project/${surface.uid}`}
                className="group rounded-3xl border border-slate-700 bg-slate-900/80 p-5 transition hover:border-yellow-300/50 hover:bg-slate-900"
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                  {surface.role}
                </p>
                <p className="mt-2 text-2xl font-black tracking-tight text-slate-100 transition group-hover:text-yellow-300">
                  {surface.domain}
                </p>
                <p className="mt-3 text-base font-semibold leading-7 text-slate-300">
                  {surface.body}
                </p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  {surface.meta}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Biography() {
  return (
    <section className="px-4 pb-3 pt-8 md:px-6 md:pb-4 md:pt-12 lg:px-6 lg:pb-5 lg:pt-14">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="min-w-0 flex-1 lg:max-w-[min(100%,42rem)]">
            <Heading size="xl">{siteContent.biography.heading}</Heading>

            <div className="prose prose-xl prose-slate prose-invert mt-8 max-w-none">
              {siteContent.biography.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Button
              href={siteContent.biography.buttonUrl}
              label={siteContent.biography.buttonText}
              className="mt-6"
            />
          </div>

          <Avatar
            image={siteContent.biography.avatar}
            className="mx-auto w-full max-w-[280px] shrink-0 lg:mx-0 lg:max-w-[min(100%,320px)] lg:self-start"
          />
        </div>
      </div>
    </section>
  );
}

function TechList() {
  const component = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) =>
            index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400),
        },
        {
          x: (index) =>
            index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400),
          ease: "power1.inOut",
        },
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section className="wrapper overflow-hidden" ref={component}>
      <div className="mx-auto w-full max-w-7xl px-4 pb-6 pt-2 md:px-6 md:pb-10 md:pt-3 lg:px-6 lg:pb-12 lg:pt-4">
        <Heading size="xl" className="mb-6 md:mb-8" as="h2">
          {siteContent.tech.title}
        </Heading>
      </div>

      {siteContent.tech.items.map(({ techColor, techName }) => (
        <div
          key={techName}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={techName}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className="tech-item text-8xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: index === 7 ? techColor : "inherit",
                }}
              >
                {techName}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
}

function Projects() {
  return (
    <Bounded>
      <Heading as="h2" size="lg">
        Projects
      </Heading>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {siteContent.projects.map((project) => (
          <Link
            key={project.uid}
            href={`/project/${project.uid}`}
            className="project-card-3d group relative block rounded-[1.75rem] outline-none"
          >
            <div className="project-card-3d-inner overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/80 shadow-2xl shadow-slate-950/40 transition group-focus-visible:border-yellow-300">
              <div className="project-card-3d-media relative aspect-[16/10] overflow-hidden bg-slate-800">
                <div className="absolute left-4 top-4 z-10 flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                </div>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <ProjectFallback title={project.title} />
                )}
              </div>
              <div className="relative p-6">
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                  {project.date}
                </p>
                <h3 className="mt-2 text-3xl font-bold leading-tight text-slate-200 transition group-hover:text-yellow-100">
                  {project.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800 px-3 py-1 text-sm font-bold text-slate-300 ring-1 ring-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Bounded>
  );
}

function ProjectFallback({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-950 to-yellow-500/60 p-8">
      <div className="rounded-3xl border border-white/15 bg-slate-950/70 p-6 text-center shadow-2xl">
        <p className="text-4xl font-black leading-tight tracking-tight text-slate-100">
          {title.split(" - ")[0]}
        </p>
        <p className="mt-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
          Case study
        </p>
      </div>
    </div>
  );
}

type TimelineItem = {
  title: string;
  timePeriod: string;
  institution: string;
  description: string;
};

function TimelineSection({
  id,
  heading,
  items,
}: {
  id?: string;
  heading: string;
  items: readonly TimelineItem[];
}) {
  return (
    <Bounded id={id}>
      <Heading as="h2" size="lg">
        {heading}
      </Heading>
      {items.map((item) => (
        <div key={item.title} className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            {item.title}
          </Heading>

          <div className="mt-1 flex w-fit flex-wrap items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>{item.timePeriod}</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>{item.institution}</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
            {item.description.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </Bounded>
  );
}

function Experience() {
  return <TimelineSection id="experience" heading="Experience" items={siteContent.experiences} />;
}

function Education() {
  return <TimelineSection id="education" heading="Education" items={siteContent.education} />;
}
