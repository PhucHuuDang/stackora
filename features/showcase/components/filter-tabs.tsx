"use client"

import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  type ReactNode,
} from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"
import type { TemplateFilter } from "../types"

interface FilterContextType {
  filter: TemplateFilter
  setFilter: (f: TemplateFilter) => void
  counts: { all: number; premium: number; free: number }
}

const FilterContext = createContext<FilterContextType>({
  filter: "all",
  setFilter: () => {},
  counts: { all: 39, premium: 19, free: 20 },
})

export function useTemplateFilter() {
  return useContext(FilterContext)
}

export function TemplateFilterProvider({
  children,
  freeCount = 0,
  proCount = 0,
}: {
  children: ReactNode
  freeCount?: number
  proCount?: number
}) {
  const [filter, setFilterState] = useState<TemplateFilter>("all")

  const setFilter = useCallback((nextFilter: TemplateFilter) => {
    setFilterState(nextFilter)
    if (typeof window !== "undefined") {
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 60)
    }
  }, [])

  const counts = useMemo(
    () => ({
      all: proCount + freeCount,
      premium: proCount,
      free: freeCount,
    }),
    [proCount, freeCount]
  )

  return (
    <FilterContext.Provider value={{ filter, setFilter, counts }}>
      {children}
    </FilterContext.Provider>
  )
}

const filterOptions: { value: TemplateFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "premium", label: "Premium" },
  { value: "free", label: "Free" },
]

export function TemplateFilterButtons() {
  const { filter, setFilter, counts } = useTemplateFilter()

  return (
    <div className="absolute top-8 right-0 left-0 z-10 mx-auto max-w-7xl px-6 sm:top-12 lg:flex lg:px-8 xl:max-w-none xl:px-0 xl:pr-8 xl:pl-[calc(50%+4.5rem)] 2xl:pr-12">
      <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32 xl:ml-0 xl:justify-start xl:pl-10 2xl:pl-12">
        <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto xl:max-w-[36rem] 2xl:max-w-[39rem]">
          <div className="flex gap-2">
            {filterOptions.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                className={cn(
                  "cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-colors",
                  filter === value
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                )}
              >
                {label} ({counts[value]})
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
