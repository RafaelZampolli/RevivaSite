import type { ReactNode } from 'react'
import { Button } from './Button'
import revivaMark from '../assets/brand/reviva-mark-official.png'

interface PageHeroProps { eyebrow: string; title: ReactNode; copy: string; action?: { label: string; href: string } }

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
          <div className="page-hero__brand"><img src={revivaMark.src} alt="" /></div>
        </div>
      </div>
    </section>
  )
}
