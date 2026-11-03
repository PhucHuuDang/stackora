"use client"

import { useEffect, useState, useCallback } from "react"
import { ArrowUpIcon } from "@/icons"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldShow = window.scrollY > 600
          setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev))
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`group fixed right-6 bottom-6 z-40 flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-gray-900/90 text-white shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-gray-950 hover:shadow-lg hover:shadow-white/20 sm:right-8 sm:bottom-8 ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-2 scale-95 opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-4 w-4 text-white/90 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-gray-950" />
    </button>
  )
}
