import type { ReactNode } from 'react'
import { Button } from './Button'

interface PageHeroProps { eyebrow: string; title: ReactNode; copy: string; action?: { label: string; href: string }; children?: ReactNode }

export function PageHero({ eyebrow, title, copy, action, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <div className="page-hero__content">
          <p className="eyebrow"><span />{eyebrow}</p>
          <h1>{title}</h1>
          <p>{copy}</p>
          {action && <Button href={action.href} arrow>{action.label}</Button>}
        </div>
        <div className="page-hero__art" aria-hidden="true">
          {children ?? <div className="orbital-mark"><i /><i /><i /><b>R</b></div>}
        </div>
      </div>
    </section>
  )
}
