"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import clsx from "clsx";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function Avatar({
  className,
  image,
}: {
  className?: string;
  image?: string;
}) {
  const component = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".avatar",
        {
          opacity: 0,
          scale: 1.4,
        },
        {
          scale: 1,
          opacity: 1,
          duration: prefersReducedMotion ? 0 : 1.3,
          ease: "power3.inOut",
        },
      );

      window.onmousemove = (e) => {
        if (!component.current) return;
        const componentRect = component.current.getBoundingClientRect();
        const componentCenterX = componentRect.left + componentRect.width / 2;

        const componentPercent = {
          x: (e.clientX - componentCenterX) / componentRect.width / 2,
        };

        const distFromCenterX = 1 - Math.abs(componentPercent.x);

        gsap
          .timeline({
            defaults: { duration: 0.5, overwrite: "auto", ease: "power3.out" },
          })
          .to(
            ".avatar",
            {
              rotation: gsap.utils.clamp(-2, 2, 5 * componentPercent.x),
              duration: 0.5,
            },
            0,
          )
          .to(
            ".highlight",
            {
              opacity: distFromCenterX - 0.7,
              x: -10 + 20 * componentPercent.x,
              duration: 0.5,
            },
            0,
          );
      };
    }, component);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div ref={component} className={clsx("relative w-full max-w-full", className)}>
      <div
        className="avatar relative aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0"
        style={{ perspective: "500px", perspectiveOrigin: "150% 150%" }}
      >
        {image ? (
          <Image
            src={image}
            alt="Shadab Kalim"
            fill
            sizes="(min-width: 768px) 384px, 100vw"
            className="avatar-image object-cover"
          />
        ) : (
          <div className="avatar-image flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-950 to-yellow-500 p-8">
            <div className="rounded-3xl border border-white/15 bg-slate-950/70 p-6 text-center shadow-2xl">
              <p className="text-7xl font-black tracking-tighter text-slate-100">
                S
              </p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.35em] text-yellow-300">
                Builder
              </p>
            </div>
          </div>
        )}
        <div className="highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block"></div>
      </div>
    </div>
  );
}
