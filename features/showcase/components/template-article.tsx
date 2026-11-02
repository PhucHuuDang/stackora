"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Template } from "../types"
import { useTemplateFilter } from "./filter-tabs"

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
})

function FormattedTime({
  date,
  className,
}: {
  date: string
  className?: string
}) {
  const d = new Date(date)
  return (
    <time dateTime={d.toISOString()} className={className}>
      {dateFormatter.format(d)}
    </time>
  )
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 flex-none">
      <path
        fill="#38BDF8"
        d="M5.338 9.805c.11.418.439.747.857.857C7.282 10.948 8 11.44 8 12s-.718 1.052-1.805 1.338c-.418.11-.747.439-.857.857C5.052 15.281 4.56 16 4 16s-1.052-.718-1.338-1.805a1.205 1.205 0 0 0-.856-.857C.718 13.052 0 12.56 0 12s.718-1.052 1.806-1.338c.417-.11.746-.439.856-.857C2.948 8.718 3.441 8 4 8c.56 0 1.052.718 1.338 1.805Z"
      />
      <path
        fill="#7DD3FC"
        d="M12.717 2.432c.1.42.43.75.85.852C15.026 3.633 16 4.27 16 5s-.975 1.367-2.432 1.716c-.42.101-.75.432-.851.852C12.367 9.025 11.729 10 11 10c-.729 0-1.367-.975-1.716-2.432-.101-.42-.431-.75-.851-.852C6.975 6.367 6 5.73 6 5c0-.73.975-1.367 2.433-1.717.42-.1.75-.43.85-.85C9.634.974 10.272 0 11 0c.73 0 1.367.975 1.717 2.432Z"
      />
    </svg>
  )
}

function ArticleHeader({
  id,
  date,
  hasPro,
}: {
  id: string
  date: string
  hasPro: boolean
}) {
  return (
    <header className="relative mb-10 xl:mb-0">
      {/* Sticky date & PRO badge for wide screens (xl) */}
      <div className="pointer-events-none absolute top-0 left-[max(-0.5rem,calc(50%-18.625rem))] z-50 flex h-4 items-center justify-end gap-x-2 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:left-0 lg:min-w-[32rem] xl:h-8">
        <div className="inline-flex items-center gap-2">
          {hasPro && (
            <Link
              href="https://shadcndashboard.com/templates"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:pointer-events-auto xl:inline-flex xl:items-center xl:rounded-full xl:border xl:border-white/20 xl:bg-white/10 xl:px-2 xl:py-0.5 xl:text-[10.5px] xl:leading-3.5 xl:font-semibold xl:tracking-wide xl:text-white/80 xl:backdrop-blur-sm xl:transition-colors xl:hover:bg-white/20"
            >
              PRO
            </Link>
          )}
          <Link href={`#${id}`} className="inline-flex">
            <FormattedTime
              date={date}
              className="hidden xl:pointer-events-auto xl:block xl:text-[11px] xl:leading-4 xl:font-medium xl:text-white/50"
            />
          </Link>
        </div>
        <div className="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300" />
      </div>

      {/* Date & PRO badge for smaller screens (< xl) */}
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
          <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
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

export function TemplateArticle({
  template,
  index,
}: {
  template: Template
  index: number
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [paddingBottom, setPaddingBottom] = useState(0)
  const { filter } = useTemplateFilter()

  const isVisible =
    filter === "all" ||
    (filter === "premium" && template.hasPro) ||
    (filter === "free" && !template.hasPro)

  useEffect(() => {
    if (!contentRef.current) return
    const observer = new ResizeObserver(() => {
      if (!contentRef.current) return
      const { height } = contentRef.current.getBoundingClientRect()
      setPaddingBottom(8 * Math.ceil(height / 8) - height)
    })
    observer.observe(contentRef.current)
    return () => observer.disconnect()
  }, [])

  if (!isVisible) return null

  return (
    <article
      id={template.id}
      className="scroll-mt-16"
      style={{ paddingBottom: `${paddingBottom}px` }}
    >
      <div ref={contentRef}>
        <ArticleHeader
          id={template.id}
          date={template.date}
          hasPro={template.hasPro}
        />

        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
            <div
              className="typography mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto"
              data-mdx-content="true"
            >
              {/* Image preview with ring overlay */}
              <div className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900">
                <Image
                  src={template.img}
                  alt={template.title}
                  width={template.width || 3024}
                  height={template.height || 1896}
                  quality={100}
                  priority={index < 2}
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10" />
              </div>

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
    </article>
  )
}
