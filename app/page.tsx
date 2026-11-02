import type { Metadata } from "next"
import { ShowcaseView } from "@/features/showcase"

export const metadata: Metadata = {
  title: "Stackora — Open-source shadcn/ui layouts and templates",
  description:
    "A growing collection of beautifully crafted open-source layouts and templates built with Next.js, Tailwind CSS and shadcn/ui — copy, paste, and ship faster.",
  openGraph: {
    title: "Stackora — Open-source shadcn/ui layouts and templates",
    description:
      "A growing collection of beautifully crafted open-source layouts and templates built with Next.js, Tailwind CSS and shadcn/ui — copy, paste, and ship faster.",
    images: [{ url: "/banner.png", width: 2560, height: 1440 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stackora — Open-source shadcn/ui layouts and templates",
    description:
      "A growing collection of beautifully crafted open-source layouts and templates built with Next.js, Tailwind CSS and shadcn/ui — copy, paste, and ship faster.",
    images: ["/banner.png"],
  },
}

export default function HomePage() {
  return <ShowcaseView />
}
