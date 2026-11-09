import type { Template } from "../types"

const HEADING_SPARKLE =
  '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="#38BDF8" d="M5.338 9.805c.11.418.439.747.857.857C7.282 10.948 8 11.44 8 12s-.718 1.052-1.805 1.338c-.418.11-.747.439-.857.857C5.052 15.281 4.56 16 4 16s-1.052-.718-1.338-1.805a1.205 1.205 0 0 0-.856-.857C.718 13.052 0 12.56 0 12s.718-1.052 1.806-1.338c.417-.11.746-.439.856-.857C2.948 8.718 3.441 8 4 8c.56 0 1.052.718 1.338 1.805Z"></path><path fill="#7DD3FC" d="M12.717 2.432c.1.42.43.75.85.852C15.026 3.633 16 4.27 16 5s-.975 1.367-2.432 1.716c-.42.101-.75.432-.851.852C12.367 9.025 11.729 10 11 10c-.729 0-1.367-.975-1.716-2.432-.101-.42-.431-.75-.851-.852C6.975 6.367 6 5.73 6 5c0-.73.975-1.367 2.433-1.717.42-.1.75-.43.85-.85C9.634.974 10.272 0 11 0c.73 0 1.367.975 1.717 2.432Z"></path></svg>'

export const TEMPLATES: Template[] = [
  {
    id: "nacre",
    date: "2026-11-08T00:00:00.000Z",
    dateText: "Nov 8, 2026",
    hasPro: true,
    title: "Nacre Skincare",
    headingSvg: HEADING_SPARKLE,
    desc: "A modern, minimalist skincare e-commerce platform and routine builder. Features an interactive 4-step routine showcase, liquid arch editorial photography layouts, floating pill navbar, slide-out cart bag, and dual light/dark themes.",
    img: "/templates/nacre-dark.webp",
    width: 1600,
    height: 1000,
    liveUrl: "https://nacre-ui.vercel.app",
    tags: [
      "Next.js 15",
      "Tailwind CSS",
      "Shadcn UI",
      "Motion",
      "TypeScript",
      "Clerk",
    ],
    features: [
      "Interactive 4-step skincare routine builder",
      "Floating glass navigation bar with cart drawer",
      "Editorial liquid arch photography layouts",
      "Seamless light and dark mode aesthetic",
    ],
    links: [
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://nacre-ui.vercel.app">Live Demo</a>',
        text: "Live Demo",
        links: [
          {
            text: "Live Demo",
            href: "https://nacre-ui.vercel.app",
          },
        ],
      },
    ],
  },
  {
    id: "marquee-studio",
    date: "2026-10-28T00:00:00.000Z",
    dateText: "Oct 28, 2026",
    hasPro: true,
    title: "Marquee Studio",
    headingSvg: HEADING_SPARKLE,
    desc: "An interactive design canvas and component studio that runs directly on your codebase. Features real-time selection frames, layer hierarchy, dynamic theme switching, token synchronization, and live component previews.",
    img: "/templates/marquee-dark.webp",
    width: 1584,
    height: 1000,
    liveUrl: "https://marqueui.vercel.app",
    githubUrl: "https://github.com/PhucHuuDang/marquee-studio",
    tags: [
      "Next.js 15",
      "Tailwind CSS",
      "Shadcn UI",
      "Canvas API",
      "TypeScript",
    ],
    features: [
      "Real-time visual selection frames",
      "Dynamic layer hierarchy inspector",
      "Live token & theme synchronization",
      "Interactive code component preview",
    ],
    links: [
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://marqueui.vercel.app">Live Demo</a>',
        text: "Live Demo",
        links: [
          {
            text: "Live Demo",
            href: "https://marqueui.vercel.app",
          },
        ],
      },
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://github.com/PhucHuuDang/marquee-studio">GitHub Repository</a>',
        text: "GitHub Repository",
        links: [
          {
            text: "GitHub Repository",
            href: "https://github.com/PhucHuuDang/marquee-studio",
          },
        ],
      },
    ],
  },
  {
    id: "medusa",
    date: "2026-10-15T00:00:00.000Z",
    dateText: "Oct 15, 2026",
    hasPro: true,
    title: "Medusa Commerce",
    headingSvg: HEADING_SPARKLE,
    desc: "A high-fidelity recreation of Medusa's open-source agentic commerce platform landing page. Features tab-switchable commerce modules, admin harness, animated mega-menus, sticky header collapse, and sleek light/dark themes.",
    img: "/templates/medusa-dark.webp",
    width: 1580,
    height: 885,
    liveUrl: "https://medusa.vercel.app",
    githubUrl: "https://github.com/PhucHuuDang/medusa",
    tags: ["Next.js", "React 19", "Tailwind CSS", "Commerce API", "TypeScript"],
    features: [
      "Tab-switchable commerce module harness",
      "Interactive mega-menu navigation",
      "Sticky scroll header collapsing",
      "Sleek dual light/dark themes",
    ],
    links: [
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://medusa.vercel.app">Live Demo</a>',
        text: "Live Demo",
        links: [
          {
            text: "Live Demo",
            href: "https://medusa.vercel.app",
          },
        ],
      },
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://github.com/PhucHuuDang/medusa">GitHub Repository</a>',
        text: "GitHub Repository",
        links: [
          {
            text: "GitHub Repository",
            href: "https://github.com/PhucHuuDang/medusa",
          },
        ],
      },
    ],
  },
  {
    id: "hrm",
    date: "2026-09-02T00:00:00.000Z",
    dateText: "Sep 2, 2026",
    hasPro: true,
    title: "Notion HRM",
    headingSvg: HEADING_SPARKLE,
    desc: "A modern, Notion-style Human Resource Management and recruitment portal designed for agile organizations. Features candidate tracking Kanban boards, detailed candidate profile drawers, employee directories, and KPI analytics.",
    img: "/templates/hrm-dark.webp",
    width: 1600,
    height: 966,
    liveUrl: "https://hrm-seven-teal.vercel.app/employees",
    githubUrl: "https://github.com/PhucHuuDang/hrm",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Kanban Board",
      "TypeScript",
    ],
    features: [
      "Multi-stage candidate Kanban pipeline",
      "Detailed slide-out profile drawers",
      "Searchable staff & employee directory",
      "Executive KPI analytics & metrics",
    ],
    links: [
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://hrm-seven-teal.vercel.app/employees">Live Demo</a>',
        text: "Live Demo",
        links: [
          {
            text: "Live Demo",
            href: "https://hrm-seven-teal.vercel.app/employees",
          },
        ],
      },
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://github.com/PhucHuuDang/hrm">GitHub Repository</a>',
        text: "GitHub Repository",
        links: [
          {
            text: "GitHub Repository",
            href: "https://github.com/PhucHuuDang/hrm",
          },
        ],
      },
    ],
  },
  {
    id: "finguard",
    date: "2026-07-28T00:00:00.000Z",
    dateText: "Jul 28, 2026",
    hasPro: true,
    title: "FinGuard",
    headingSvg: HEADING_SPARKLE,
    desc: "Financial management and wealth security dashboard with real-time portfolio analytics, net worth tracking, wealth distribution charts, and transaction history with advanced filtering.",
    img: "/templates/finguard.webp",
    width: 1600,
    height: 1010,
    liveUrl: "https://finguard.vercel.app",
    githubUrl: "https://github.com/PhucHuuDang/finguard",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Recharts", "TypeScript"],
    features: [
      "Real-time net worth & portfolio tracker",
      "Interactive asset allocation charts",
      "Multi-account transaction ledger",
      "Security audit & risk rating cards",
    ],
    links: [
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://finguard.vercel.app">Live Demo</a>',
        text: "Live Demo",
        links: [
          {
            text: "Live Demo",
            href: "https://finguard.vercel.app",
          },
        ],
      },
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://github.com/PhucHuuDang/finguard">GitHub Repository</a>',
        text: "GitHub Repository",
        links: [
          {
            text: "GitHub Repository",
            href: "https://github.com/PhucHuuDang/finguard",
          },
        ],
      },
    ],
  },
  {
    id: "dashboards",
    date: "2026-01-15T00:00:00.000Z",
    dateText: "Jan 15, 2026",
    hasPro: true,
    title: "Management Dashboard",
    headingSvg: HEADING_SPARKLE,
    desc: "An enterprise admin dashboard UI designed for data visualization, locations tracking, sales metrics, and internal management systems with responsive layouts and fluid interactions.",
    img: "/templates/dashboards-dark.webp",
    width: 1600,
    height: 1006,
    liveUrl: "https://dashboards-three-drab.vercel.app/dashboard/locations",
    githubUrl: "https://github.com/PhucHuuDang/dashboards",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Data Viz", "TypeScript"],
    features: [
      "Global locations management matrix",
      "Real-time sales & conversion metrics",
      "High-density data tables with sorting",
      "Responsive admin layout & collapsible nav",
    ],
    links: [
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://dashboards-three-drab.vercel.app/dashboard/locations">Live Demo</a>',
        text: "Live Demo",
        links: [
          {
            text: "Live Demo",
            href: "https://dashboards-three-drab.vercel.app/dashboard/locations",
          },
        ],
      },
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://github.com/PhucHuuDang/dashboards">GitHub Repository</a>',
        text: "GitHub Repository",
        links: [
          {
            text: "GitHub Repository",
            href: "https://github.com/PhucHuuDang/dashboards",
          },
        ],
      },
    ],
  },
  {
    id: "furniture",
    date: "2025-09-15T00:00:00.000Z",
    dateText: "Sep 15, 2025",
    hasPro: false,
    title: "Furniture UI",
    headingSvg: HEADING_SPARKLE,
    desc: "Modern furniture e-commerce experience focusing on minimalist aesthetic, product grid interactions, fluid layout animations, and typography hierarchy built with Vue 3 and Tailwind CSS.",
    img: "/templates/furniture.webp",
    width: 1600,
    height: 1006,
    liveUrl: "https://furniture-harry.vercel.app",
    githubUrl: "https://github.com/PhucHuuDang/furniture",
    tags: ["Vue 3", "Tailwind CSS", "Vite", "E-Commerce", "Pinia"],
    features: [
      "Editorial product grid interactions",
      "Interactive materials & color switchers",
      "Fluid animated cart transitions",
      "Clean Scandinavian design aesthetic",
    ],
    links: [
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://furniture-harry.vercel.app">Live Demo</a>',
        text: "Live Demo",
        links: [
          {
            text: "Live Demo",
            href: "https://furniture-harry.vercel.app",
          },
        ],
      },
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://github.com/PhucHuuDang/furniture">GitHub Repository</a>',
        text: "GitHub Repository",
        links: [
          {
            text: "GitHub Repository",
            href: "https://github.com/PhucHuuDang/furniture",
          },
        ],
      },
    ],
  },
  {
    id: "portfolio",
    date: "2025-08-01T00:00:00.000Z",
    dateText: "Aug 1, 2025",
    hasPro: false,
    title: "Developer Portfolio",
    headingSvg: HEADING_SPARKLE,
    desc: "Personal developer portfolio and interactive showcase featuring retro canvas backgrounds, audio micro-interactions, dark/light theme switching, and responsive showcase views.",
    img: "/templates/portfolio.webp",
    width: 1600,
    height: 1006,
    liveUrl: "https://harrydang.com",
    githubUrl: "https://github.com/PhucHuuDang/harrydang",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP", "TypeScript"],
    features: [
      "Generative retro canvas backgrounds",
      "Tactile audio sound micro-interactions",
      "Curated work showcase cards",
      "Smooth dark & light theme toggle",
    ],
    links: [
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://harrydang.com">Live Demo</a>',
        text: "Live Demo",
        links: [
          {
            text: "Live Demo",
            href: "https://harrydang.com",
          },
        ],
      },
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://github.com/PhucHuuDang/harrydang">GitHub Repository</a>',
        text: "GitHub Repository",
        links: [
          {
            text: "GitHub Repository",
            href: "https://github.com/PhucHuuDang/harrydang",
          },
        ],
      },
    ],
  },
  {
    id: "thaifruitz",
    date: "2025-04-10T00:00:00.000Z",
    dateText: "Apr 10, 2025",
    hasPro: false,
    title: "ThaiFruitz",
    headingSvg: HEADING_SPARKLE,
    desc: "A production-ready e-commerce platform built with modern frontend architecture. Features responsive product listings, detail views, Zustand state caching, and Cloudinary media optimization.",
    img: "/templates/thaifruitz.webp",
    width: 1600,
    height: 1006,
    liveUrl: "https://thaifruitz.vercel.app",
    githubUrl: "https://github.com/PhucHuuDang/thaifruitz",
    tags: ["Next.js", "Tailwind CSS", "Zustand", "Cloudinary", "TypeScript"],
    features: [
      "Faceted product search & category filters",
      "Slide-over cart with live quantity sync",
      "Cloudinary responsive image delivery",
      "Optimistic UI state with Zustand",
    ],
    links: [
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://thaifruitz.vercel.app">Live Demo</a>',
        text: "Live Demo",
        links: [
          {
            text: "Live Demo",
            href: "https://thaifruitz.vercel.app",
          },
        ],
      },
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://github.com/PhucHuuDang/thaifruitz">GitHub Repository</a>',
        text: "GitHub Repository",
        links: [
          {
            text: "GitHub Repository",
            href: "https://github.com/PhucHuuDang/thaifruitz",
          },
        ],
      },
    ],
  },
  {
    id: "moimoc",
    date: "2024-10-20T00:00:00.000Z",
    dateText: "Oct 20, 2024",
    hasPro: false,
    title: "MoiMoc",
    headingSvg: HEADING_SPARKLE,
    desc: "A real-world e-commerce website developed for a local brand, covering both frontend and backend. Combines Next.js responsive storefront, NestJS backend API, PostgreSQL with Drizzle ORM, and JWT authentication.",
    img: "/templates/moimoc.webp",
    width: 1600,
    height: 1006,
    liveUrl: "https://www.moimoc.com",
    githubUrl: "https://github.com/PhucHuuDang/MoiMoc-Client",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Drizzle ORM", "TypeScript"],
    features: [
      "End-to-end storefront & RESTful API",
      "Relational PostgreSQL schema & migrations",
      "JWT user authentication & profile history",
      "Admin order processing pipeline",
    ],
    links: [
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://www.moimoc.com">Live Demo</a>',
        text: "Live Demo",
        links: [
          {
            text: "Live Demo",
            href: "https://www.moimoc.com",
          },
        ],
      },
      {
        html: '<a target="_blank" rel="noopener noreferrer" href="https://github.com/PhucHuuDang/MoiMoc-Client">GitHub Repository</a>',
        text: "GitHub Repository",
        links: [
          {
            text: "GitHub Repository",
            href: "https://github.com/PhucHuuDang/MoiMoc-Client",
          },
        ],
      },
    ],
  },
]
