import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Bounded from "@/components/Bounded";
import { siteContent } from "@/data/siteContent";

const navItems = siteContent.settings.nav;
const footerLinks = [...navItems, { href: siteContent.biography.buttonUrl, label: "Resume" }];

const socials = [
  {
    href: siteContent.settings.github,
    label: "Shadab on GitHub",
    icon: FaGithub,
  },
  {
    href: siteContent.settings.twitter,
    label: "Shadab on Twitter",
    icon: FaTwitter,
  },
  {
    href: siteContent.settings.linkedin,
    label: "Shadab on LinkedIn",
    icon: FaLinkedin,
  },
];

export default function Footer() {
  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            {siteContent.settings.name}
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} {siteContent.settings.name}
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {footerLinks.map(({ href, label }, index) => (
              <React.Fragment key={label}>
                <li>
                  <Link
                    className={clsx(
                      "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:text-yellow-400",
                    )}
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
                {index < footerLinks.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
          {socials.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={item.label}
            >
              <item.icon />
            </Link>
          ))}
        </div>
      </div>
    </Bounded>
  );
}
