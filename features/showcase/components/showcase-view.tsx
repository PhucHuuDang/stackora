import { TemplateFilterProvider, TemplateFilterButtons } from "./filter-tabs"
import { Sidebar } from "./sidebar"
import { DottedBorder } from "./dotted-border"
import { PremiumBanner } from "./premium-banner"
import { TemplateArticle } from "./template-article"
import { BackToTop } from "./back-to-top"
import { TEMPLATES } from "../data/templates"
import GradualBlur from "@/components/GradualBlur"

export function ShowcaseView() {
  const freeCount = TEMPLATES.filter((t) => !t.hasPro).length
  const proCount = TEMPLATES.filter((t) => t.hasPro).length

  return (
    <TemplateFilterProvider freeCount={freeCount} proCount={proCount}>
      <div className="flex min-h-full flex-col bg-white dark:bg-gray-950">
        <Sidebar />

        <div className="relative flex-auto">
          <DottedBorder />
          <TemplateFilterButtons />

          <main className="space-y-16 py-24 sm:space-y-20 sm:py-28">
            <PremiumBanner proCount={proCount} />
            {TEMPLATES.map((template, index) => (
              <TemplateArticle
                key={template.id}
                template={template}
                index={index}
              />
            ))}
          </main>
        </div>

        {/* Progressive Gradual Blur at the bottom */}
        <GradualBlur
          target="page"
          position="bottom"
          height="8.5rem"
          strength={3}
          layers={8}
          curve="bezier"
          exponential
          tint="rgba(3, 7, 18, 0.85)"
          hoverIntensity={0.65}
          autoHide
          zIndex={30}
        />

        {/* Floating Back to top button */}
        <BackToTop />
      </div>
    </TemplateFilterProvider>
  )
}
