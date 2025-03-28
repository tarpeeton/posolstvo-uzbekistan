"use client"

import { ChevronRight } from "lucide-react"
import { useLocale } from "next-intl"
import { Link } from "@/i18n/routing"

export type TMultiLang = {
  ru: string
  uz: string
  en: string
}

interface BreadcrumbItem {
  label: TMultiLang
  href?: string
  isCurrent?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const locale = useLocale() as keyof TMultiLang

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={index} className="flex items-center">
            {index !== 0 && (
              <ChevronRight className="mx-1 h-4 w-4" aria-hidden="true" />
            )}
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:underline ">
                {item.label[locale]}
              </Link>
            ) : (
              <span
                aria-current={item.isCurrent ? "page" : undefined}
                className={item.isCurrent ? "font-semibold" : ""}
              >
                {item.label[locale]}
              </span>
            )}
          </div>
        )
      })}
    </nav>
  )
}
