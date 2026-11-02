import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const monaSans = localFont({
  src: "../public/fonts/mona-sans.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "200 900",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://square.lndevui.com"),
  title: "Square UI — Open-source shadcn/ui layouts and templates",
  description:
    "A growing collection of beautifully crafted open-source layouts and templates built with Next.js, Tailwind CSS and shadcn/ui — copy, paste, and ship faster.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  keywords: [
    "shadcn ui",
    "shadcn templates",
    "shadcn layouts",
    "next.js templates",
    "tailwind css templates",
    "react ui kit",
    "dashboard template",
    "open source ui",
    "square ui",
    "lndev",
  ],
  authors: [{ name: "Leonel NGOYA" }],
  creator: "Leonel NGOYA",
  openGraph: {
    title: "Square UI — Open-source shadcn/ui layouts and templates",
    description:
      "A growing collection of beautifully crafted open-source layouts and templates built with Next.js, Tailwind CSS and shadcn/ui — copy, paste, and ship faster.",
    type: "website",
    locale: "en_US",
    siteName: "Square UI",
    images: [{ url: "/banner.png", width: 2560, height: 1440 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Square UI — Open-source shadcn/ui layouts and templates",
    description:
      "A growing collection of beautifully crafted open-source layouts and templates built with Next.js, Tailwind CSS and shadcn/ui — copy, paste, and ship faster.",
    images: ["/banner.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark h-full antialiased",
        inter.variable,
        monaSans.variable
      )}
      style={{ colorScheme: "dark" }}
    >
      <body className="flex min-h-full flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider defaultTheme="dark" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
