import Link from "next/link"
import Image from "next/image"
import { StarField } from "./star-field"

function LicenseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
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

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

export function Sidebar() {
  return (
    <div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
        <svg
          className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:top-[-40%] lg:-right-40 lg:bottom-auto lg:left-auto lg:h-[180%] lg:w-[80rem]"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="_S_3_-desktop" cx="100%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
              <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
              <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
            </radialGradient>
            <radialGradient id="_S_3_-mobile" cy="100%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
              <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
              <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
            </radialGradient>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#_S_3_-desktop)"
            className="hidden lg:block"
          />
          <rect
            width="100%"
            height="100%"
            fill="url(#_S_3_-mobile)"
            className="lg:hidden"
          />
        </svg>
        <div className="absolute inset-x-0 right-0 bottom-0 h-px bg-white mix-blend-overlay lg:top-0 lg:left-auto lg:h-auto lg:w-px" />
      </div>

      {/* Content wrapper */}
      <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-x-hidden lg:overflow-y-auto lg:pl-[max(4rem,calc(50%-38rem))]">
        <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
          <div className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:py-20">
            <div className="relative">
              <StarField />

              <div>
                <Link className="flex items-center gap-3" href="/">
                  <Image
                    alt="Logo"
                    width={28}
                    height={28}
                    className="w-7 rotate-0 overflow-hidden rounded-lg sm:w-9"
                    src="/icon.svg"
                    priority
                  />
                  <span className="text-xl font-bold text-white sm:text-3xl">
                    Square UI
                  </span>
                </Link>
              </div>

              <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
                20+ Open Source Dashboards for Shadcn UI
              </h1>

              <p className="mt-4 text-sm/6 text-gray-300">
                Collection of beautifully crafted open-source layouts UI built
                with shadcn/ui.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
                <Link
                  className="group relative isolate flex flex-none items-center gap-x-3 rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300"
                  href="/license"
                >
                  <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
                  <LicenseIcon className="h-4 w-4 flex-none" />
                  <span className="self-baseline text-white">License</span>
                </Link>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative isolate flex flex-none items-center gap-x-3 rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300"
                  href="https://github.com/ln-dev7/square-ui"
                >
                  <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
                  <GitHubIcon className="h-4 w-4 flex-none" />
                  <span className="self-baseline text-white">GitHub</span>
                </a>
              </div>

              <div className="mt-6 flex flex-col items-center gap-3 lg:items-start">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative isolate inline-flex items-center justify-center gap-2 rounded-full border border-amber-500/80 bg-amber-400 px-4 py-2 text-sm font-semibold text-amber-950 shadow transition-colors before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-amber-400 before:shadow after:absolute after:inset-0 after:-z-10 after:rounded-full hover:after:bg-white/25"
                  href="https://shadcndashboard.com"
                >
                  <span>Pro Templates on Shadcndashboard.com</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6" />
        </div>
      </div>
    </div>
  )
}
