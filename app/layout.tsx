import type { Metadata, Viewport } from "next"
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

const SITE_URL = "https://stackora-ui.vercel.app"
const SITE_TITLE = "Stackora — Open-source shadcn/ui layouts and templates"
const SITE_DESCRIPTION =
  "A growing collection of beautifully crafted open-source layouts and templates built with Next.js, Tailwind CSS and shadcn/ui — copy, paste, and ship faster."

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Stackora",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "stackora",
    "shadcn ui",
    "shadcn templates",
    "shadcn layouts",
    "next.js templates",
    "tailwind css templates",
    "react ui kit",
    "dashboard template",
    "open source ui",
    "square ui",
    "harry dang",
    "phuc huu dang",
  ],
  authors: [{ name: "Harry Dang", url: "https://github.com/PhucHuuDang" }],
  creator: "Harry Dang",
  publisher: "Harry Dang",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Stackora",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 2560,
        height: 1440,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/banner.png"],
    creator: "@PhucHuuDang",
  },
  category: "technology",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Stackora",
      description: SITE_DESCRIPTION,
      publisher: {
        "@type": "Person",
        name: "Harry Dang",
        url: "https://github.com/PhucHuuDang",
      },
    },
    {
      "@type": "WebApplication",
      "@id": `${SITE_URL}/#webapplication`,
      name: "Stackora",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "All",
      browserRequirements: "Requires JavaScript. Requires HTML5.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Person",
        name: "Harry Dang",
        url: "https://github.com/PhucHuuDang",
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider defaultTheme="dark" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
