"use client"

import Link from "next/link"
import { useTemplateFilter } from "./filter-tabs"
import FadeContent from "@/components/FadeContent"

export function PremiumBanner({ proCount = 5 }: { proCount?: number }) {
  const { filter } = useTemplateFilter()

  if (filter !== "premium") {
    return null
  }

  return (
    <div className="mx-auto mb-12 max-w-7xl px-6 lg:flex lg:px-8">
      <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
        <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
          <FadeContent
            blur={8}
            duration={0.65}
            ease="power2.out"
            trigger="mount"
          >
            <Link
              href="https://github.com/PhucHuuDang"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-gray-200 bg-linear-to-br from-gray-50 to-white p-5 transition-colors hover:border-gray-300 hover:bg-gray-50 dark:border-white/10 dark:from-white/5 dark:to-transparent dark:hover:border-white/20 dark:hover:bg-white/5"
            >
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Flagship & Enterprise Applications{" "}
                <span className="font-normal text-gray-500 dark:text-white/60">
                  ({proCount} featured production builds)
                </span>
              </p>
              <p className="mt-1 text-xs text-gray-600 dark:text-white/60">
                Explore more open-source repositories and experimental labs on{" "}
                <span className="text-gray-900 underline decoration-dotted underline-offset-2 group-hover:decoration-solid dark:text-white">
                  GitHub @PhucHuuDang
                </span>
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </p>
            </Link>
          </FadeContent>
        </div>
      </div>
    </div>
  )
}
