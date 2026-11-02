import type { Template } from "../types"

const HEADING_SPARKLE =
  '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="#38BDF8" d="M5.338 9.805c.11.418.439.747.857.857C7.282 10.948 8 11.44 8 12s-.718 1.052-1.805 1.338c-.418.11-.747.439-.857.857C5.052 15.281 4.56 16 4 16s-1.052-.718-1.338-1.805a1.205 1.205 0 0 0-.856-.857C.718 13.052 0 12.56 0 12s.718-1.052 1.806-1.338c.417-.11.746-.439.856-.857C2.948 8.718 3.441 8 4 8c.56 0 1.052.718 1.338 1.805Z"></path><path fill="#7DD3FC" d="M12.717 2.432c.1.42.43.75.85.852C15.026 3.633 16 4.27 16 5s-.975 1.367-2.432 1.716c-.42.101-.75.432-.851.852C12.367 9.025 11.729 10 11 10c-.729 0-1.367-.975-1.716-2.432-.101-.42-.431-.75-.851-.852C6.975 6.367 6 5.73 6 5c0-.73.975-1.367 2.433-1.717.42-.1.75-.43.85-.85C9.634.974 10.272 0 11 0c.73 0 1.367.975 1.717 2.432Z"></path></svg>'

export const TEMPLATES: Template[] = [
  {
    id: "marquee-studio",
    date: "2026-10-28T00:00:00.000Z",
    dateText: "Oct 28, 2026",
    hasPro: true,
    title: "Marquee Studio",
    headingSvg: HEADING_SPARKLE,
    desc: "An interactive design canvas and component studio that runs directly on your codebase. Features real-time selection frames, layer hierarchy, dynamic theme switching, token synchronization, and live component previews.",
    img: "/templates/marquee-dark.webp",
    width: 1600,
    height: 1000,
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
    width: 1600,
    height: 885,
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
    id: "marquee-light",
    date: "2026-10-27T00:00:00.000Z",
    dateText: "Oct 27, 2026",
    hasPro: false,
    title: "Marquee Studio (Light Theme)",
    headingSvg: HEADING_SPARKLE,
    desc: "Crisp light theme interface for Marquee Studio design canvas. Optimized contrast ratios for sunlight environments with clean component inspector panels and token previews.",
    img: "/templates/marquee-light.webp",
    width: 1600,
    height: 1000,
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
    id: "medusa-light",
    date: "2026-10-14T00:00:00.000Z",
    dateText: "Oct 14, 2026",
    hasPro: false,
    title: "Medusa Commerce (Light Theme)",
    headingSvg: HEADING_SPARKLE,
    desc: "Light theme edition of the Medusa commerce landing experience featuring high-legibility typography, interactive module tabs, and streamlined navigation flows.",
    img: "/templates/medusa-light.webp",
    width: 1600,
    height: 885,
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
    id: "hrm-light",
    date: "2026-09-01T00:00:00.000Z",
    dateText: "Sep 1, 2026",
    hasPro: false,
    title: "Notion HRM (Light Theme)",
    headingSvg: HEADING_SPARKLE,
    desc: "Daylight-optimized Notion-style HR management interface. Clean white backgrounds, crisp tabular lines, and fluid kanban board interactions for office environments.",
    img: "/templates/hrm-light.webp",
    width: 1600,
    height: 966,
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
    id: "dashboards-light",
    date: "2026-01-14T00:00:00.000Z",
    dateText: "Jan 14, 2026",
    hasPro: false,
    title: "Management Dashboard (Light Theme)",
    headingSvg: HEADING_SPARKLE,
    desc: "Clean light-mode enterprise management dashboard interface for tracking facilities, sales metrics, customer orders, and regional store performance.",
    img: "/templates/dashboards-light.webp",
    width: 1600,
    height: 1001,
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
]
