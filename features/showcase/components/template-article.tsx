"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import type { Template } from "../types"
import { useTemplateFilter } from "./filter-tabs"
import { cn } from "@/lib/utils"
import { SparkleIcon } from "@/icons"

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger)
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
})

const dateCache = new Map<string, string>()

function FormattedTime({
  date,
  className,
}: {
  date: string
  className?: string
}) {
  let formatted = dateCache.get(date)
  if (!formatted) {
    formatted = dateFormatter.format(new Date(date))
    dateCache.set(date, formatted)
  }
  return (
    <time dateTime={date} className={className}>
      {formatted}
    </time>
  )
}

function ArticleHeader({
  id,
  date,
  hasPro,
  notchRef,
  badgeRef,
}: {
  id: string
  date: string
  hasPro: boolean
  notchRef?: React.RefObject<HTMLDivElement | null>
  badgeRef?: React.RefObject<HTMLDivElement | null>
}) {
  return (
    <header className="relative mb-10 xl:mb-0">
      {/* Sticky date & PRO badge for wide screens (xl) */}
      <div className="pointer-events-none absolute top-0 left-[max(-0.5rem,calc(50%-18.625rem))] z-50 flex h-4 items-center justify-end gap-x-3 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:left-0 lg:min-w-[32rem] xl:right-[calc(50%-4.5rem)] xl:h-8">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 will-change-transform"
        >
          {hasPro && (
            <Link
              href="https://shadcndashboard.com/templates"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:pointer-events-auto xl:inline-flex xl:items-center xl:rounded-full xl:border xl:border-white/30 xl:bg-sky-950/40 xl:px-2 xl:py-0.5 xl:text-[10.5px] xl:leading-3.5 xl:font-semibold xl:tracking-wide xl:text-white xl:shadow-xs xl:backdrop-blur-md xl:transition-colors xl:hover:bg-sky-950/60"
            >
              PRO
            </Link>
          )}
          <Link href={`#${id}`} className="inline-flex">
            <FormattedTime
              date={date}
              className="hidden whitespace-nowrap drop-shadow-[0_1px_3px_rgba(15,42,67,0.7)] transition-colors xl:pointer-events-auto xl:block xl:text-[11px] xl:leading-4 xl:font-medium xl:text-white/90"
            />
          </Link>
        </div>
        <div
          ref={notchRef}
          className="h-[0.0625rem] w-3.5 bg-gray-300 will-change-transform lg:-mr-3.5 xl:mr-0 xl:bg-white/40"
        />
      </div>

      {/* Date & PRO badge for smaller screens (< xl) */}
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8 xl:max-w-none xl:px-0 xl:pr-8 xl:pl-[calc(50%+4.5rem)] 2xl:pr-12">
        <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32 xl:ml-0 xl:justify-start xl:pl-10 2xl:pl-12">
          <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto xl:max-w-[36rem] 2xl:max-w-[39rem]">
            <div className="flex items-center gap-2">
              {hasPro && (
                <Link
                  href="https://shadcndashboard.com/templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-2 py-0.5 text-[10.5px] leading-3.5 font-semibold tracking-wide text-gray-700 transition-colors hover:bg-gray-200 xl:hidden dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  PRO
                </Link>
              )}
              <Link href={`#${id}`} className="inline-flex">
                <FormattedTime
                  date={date}
                  className="text-[11px] leading-4 font-medium text-gray-500 xl:hidden dark:text-white/50"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export const TemplateArticle = React.memo(function TemplateArticle({
  template,
  index,
}: {
  template: Template
  index: number
}) {
  const articleRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)
  const imageInnerRef = useRef<HTMLDivElement>(null)
  const textWrapRef = useRef<HTMLDivElement>(null)
  const notchRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  const { filter } = useTemplateFilter()

  const isVisible =
    filter === "all" ||
    (filter === "premium" && template.hasPro) ||
    (filter === "free" && !template.hasPro)

  useGSAP(
    () => {
      if (!articleRef.current || !isVisible) return

      const mm = gsap.matchMedia()

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          allowMotion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as {
            reduceMotion?: boolean
          }

          if (reduceMotion) {
            if (imageWrapRef.current) {
              gsap.set(imageWrapRef.current, { opacity: 1, y: 0 })
            }
            if (textWrapRef.current) {
              gsap.set(textWrapRef.current.children, { opacity: 1, y: 0 })
            }
            return
          }

          // 1. Smooth Scroll Parallax (Scrub) on the Preview Image
          if (imageInnerRef.current) {
            gsap.fromTo(
              imageInnerRef.current,
              {
                yPercent: -2.5,
              },
              {
                yPercent: 2.5,
                ease: "none",
                scrollTrigger: {
                  trigger: articleRef.current,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.2,
                },
              }
            )
          }

          // 2. Active Timeline Marker and Notch Glow
          ScrollTrigger.create({
            trigger: articleRef.current,
            start: "top 55%",
            end: "bottom 45%",
            onToggle: (self) => {
              if (notchRef.current) {
                gsap.to(notchRef.current, {
                  backgroundColor: self.isActive ? "#38bdf8" : "#9ca3af",
                  boxShadow: self.isActive
                    ? "0 0 10px rgba(56, 189, 248, 0.85)"
                    : "0 0 0px transparent",
                  scaleY: self.isActive ? 2 : 1,
                  opacity: self.isActive ? 1 : 0.45,
                  duration: 0.3,
                  ease: "power2.out",
                })
              }
              if (badgeRef.current) {
                gsap.to(badgeRef.current, {
                  opacity: self.isActive ? 1 : 0.65,
                  duration: 0.3,
                  ease: "power2.out",
                })
              }
            },
          })
        }
      )
    },
    { scope: articleRef, dependencies: [isVisible] }
  )

  return (
    <article
      ref={articleRef}
      id={template.id}
      className={cn(
        "scroll-mt-16 [contain-intrinsic-size:auto_800px] [content-visibility:auto]",
        !isVisible && "hidden"
      )}
    >
      <div ref={contentRef}>
        <ArticleHeader
          id={template.id}
          date={template.date}
          hasPro={template.hasPro}
          notchRef={notchRef}
          badgeRef={badgeRef}
        />

        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8 xl:max-w-none xl:px-0 xl:pr-8 xl:pl-[calc(50%+4.5rem)] 2xl:pr-12">
          <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32 xl:ml-0 xl:justify-start xl:pl-10 2xl:pl-12">
            <div
              className="typography mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto xl:max-w-[36rem] 2xl:max-w-[39rem]"
              data-mdx-content="true"
            >
              {/* Image preview */}
              <div
                ref={imageWrapRef}
                className="group/card relative overflow-hidden rounded-xl bg-gray-50 transition-shadow duration-300 will-change-transform hover:shadow-2xl hover:shadow-sky-500/10 dark:bg-gray-900"
              >
                <div ref={imageInnerRef} className="will-change-transform">
                  <Image
                    src={template.img}
                    alt={template.title}
                    width={template.width || 3024}
                    height={template.height || 1896}
                    quality={100}
                    priority={index < 2}
                    className="object-cover"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 transition-colors duration-300 ring-inset group-hover/card:ring-sky-500/30 dark:ring-white/10" />
              </div>

              {/* Text content */}
              <div ref={textWrapRef}>
                {/* Title with sparkle icon */}
                <h2>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`#${template.id}`}
                  >
                    <SparkleIcon />
                    {template.title}
                  </a>
                </h2>

                {/* Description */}
                <p>{template.desc}</p>

                {/* Links list */}
                <ul>
                  {template.links.map((linkGroup, idx) => (
                    <li
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: linkGroup.html }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
})
