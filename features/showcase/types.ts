export interface TemplateLinkItem {
  html: string
  text: string
  links: {
    text: string
    href: string
  }[]
}

export interface Template {
  id: string
  date: string
  dateText: string
  hasPro: boolean
  title: string
  headingSvg: string
  desc: string
  img: string
  width: number
  height: number
  links: TemplateLinkItem[]
}

export type TemplateFilter = "all" | "premium" | "free"

// Backwards compatibility alias
export type Project = Template
export type ProjectFilter = TemplateFilter
