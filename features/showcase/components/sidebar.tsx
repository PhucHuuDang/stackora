import Link from "next/link"
import Image from "next/image"
import { TEMPLATES } from "../data/templates"
import { CloudShader } from "@/components/ui/cloud-shader"
import { LicenseIcon, GitHubIcon, ArrowUpRightIcon } from "@/icons"

export function Sidebar() {
  return (
    <div className="relative isolate flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
      {/* Background container with CloudShader sky & airplane wing */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-linear-to-t from-[#8cbfe8] to-[#3876ba] lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:right-[calc(50%-4.5rem)]">
        {/* CloudShader canvas rendered at half size and scaled 2x for optimal GPU performance */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-1/2 w-1/2 origin-top-left scale-200">
            <CloudShader
              speed={1}
              count={6}
              cloudColor="#fbf8f2"
              skyTopColor="#3876ba"
              skyBottomColor="#8cbfe8"
              className="absolute inset-0 !h-full !min-h-0 !w-full"
            />
          </div>
        </div>

        {/* Soft atmospheric gradient for text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-950/25 via-transparent to-sky-900/35" />

        {/* Window-seat airplane wing view at the bottom like the flight hero demo */}
        <div className="pointer-events-none absolute -bottom-10 -left-6 z-10 w-[95%] max-w-[28rem] transition-transform duration-700 ease-out select-none sm:w-[85%] lg:w-[104%] lg:max-w-none">
          <Image
            src="/plane-wing.webp"
            alt="Airplane wing above the clouds"
            width={2200}
            height={1227}
            priority
            className="h-auto w-full object-cover drop-shadow-[0_20px_25px_rgba(15,42,67,0.45)]"
          />
        </div>

        {/* Right border separator line */}
        <div className="absolute inset-x-0 right-0 bottom-0 h-px bg-white/20 mix-blend-overlay lg:top-0 lg:left-auto lg:h-auto lg:w-px" />
      </div>

      {/* Content wrapper */}
      <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-x-hidden lg:overflow-y-auto lg:pl-[max(4rem,calc(50%-38rem))] xl:mr-[calc(50%-4.5rem)]">
        <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
          <div className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:py-20">
            <div className="relative z-20">
              <div>
                <Link
                  className="flex items-center gap-3 drop-shadow-md"
                  href="/"
                >
                  <Image
                    alt="Stackora Logo"
                    width={36}
                    height={36}
                    className="h-8 w-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 sm:h-10 sm:w-10"
                    src="/icon.svg"
                    priority
                  />
                  <span className="text-xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(15,42,67,0.4)] sm:text-3xl">
                    Stackora
                  </span>
                </Link>
              </div>

              <h1 className="mt-7 font-display text-4xl/tight font-bold text-white [text-shadow:0_2px_14px_rgba(15,42,67,0.45)]">
                {TEMPLATES.length}+ Open Source Dashboards for Shadcn UI
              </h1>

              <p className="mt-3 text-sm/6 font-medium text-white/90 [text-shadow:0_1px_4px_rgba(15,42,67,0.3)]">
                Collection of beautifully crafted open-source layouts UI built
                with shadcn/ui.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-x-2 gap-y-3 sm:gap-x-2 lg:justify-start">
                <Link
                  className="group relative isolate flex flex-none items-center gap-x-2.5 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/25 hover:shadow"
                  href="/license"
                >
                  <LicenseIcon className="h-4 w-4 flex-none text-white/80" />
                  <span>License</span>
                </Link>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative isolate flex flex-none items-center gap-x-2.5 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/25 hover:shadow"
                  href="https://github.com/PhucHuuDang/"
                >
                  <GitHubIcon className="h-4 w-4 flex-none text-white/80" />
                  <span>GitHub</span>
                </a>
              </div>

              <div className="mt-4 flex flex-col items-center gap-3 lg:items-start">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative isolate inline-flex items-center justify-center gap-2 rounded-full border border-amber-500/80 bg-amber-400 px-4 py-2 text-sm font-semibold text-amber-950 shadow-md transition hover:bg-amber-300"
                  href="https://github.com/PhucHuuDang"
                >
                  <span>Explore GitHub @PhucHuuDang</span>
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
