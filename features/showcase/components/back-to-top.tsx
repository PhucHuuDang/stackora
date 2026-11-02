"use client"

import { useEffect, useState } from "react"

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

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 600px
      const shouldShow = window.scrollY > 600
      setIsVisible(shouldShow)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`group fixed right-6 bottom-6 z-40 flex items-center gap-1.5 rounded-full border border-white/10 bg-gray-900/80 px-3 py-1.5 text-xs font-medium text-gray-300 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-500/40 hover:bg-gray-800 hover:text-white sm:right-8 sm:bottom-8 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-3.5 w-3.5 text-sky-400 transition-transform duration-200 group-hover:-translate-y-0.5" />
      <span className="hidden sm:inline">Top</span>
    </button>
  )
}
