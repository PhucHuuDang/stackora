"use client"

import Link from "next/link"
import { useTemplateFilter } from "./filter-tabs"

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

export function ShowcaseFooter({ totalCount }: { totalCount: number }) {
  const { counts, filter } = useTemplateFilter()

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const displayedCount =
    filter === "premium"
      ? counts.premium
      : filter === "free"
        ? counts.free
        : totalCount

  return (
    <footer className="pt-8 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
          <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
            {/* End of collection banner */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-white/[0.04] to-transparent p-6 backdrop-blur-xs sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/20">
                  <LayersIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    End of the Showcase
                  </h3>
                  <p className="text-xs text-white/60">
                    Showing {displayedCount} open-source templates and
                    applications
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs/5 text-gray-400">
                All templates are freely available or open source. Built with
                Next.js, Tailwind CSS, and shadcn/ui components. Explore more
                projects or contribute on GitHub.
              </p>

              {/* Action buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleScrollTop}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10 active:scale-95"
                >
                  <ArrowUpIcon className="h-3.5 w-3.5 text-sky-400" />
                  <span>Back to top</span>
                </button>

                <a
                  href="https://github.com/ln-dev7/square-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10"
                >
                  <GitHubIcon className="h-3.5 w-3.5 text-white/70" />
                  <span>Star on GitHub</span>
                </a>

                <Link
                  href="/license"
                  className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-white/60 transition-colors hover:text-white"
                >
                  License
                </Link>
              </div>
            </div>

            {/* Sub-footer copyright */}
            <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-[0.75rem] text-gray-500 sm:flex-row">
              <p>© 2026 Square UI. Curated by Harry Dang.</p>
              <p>Built with Next.js, Tailwind CSS & shadcn/ui</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
