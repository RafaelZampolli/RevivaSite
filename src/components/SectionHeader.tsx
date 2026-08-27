import type { ReactNode } from 'react'

interface SectionHeaderProps { eyebrow?: string; title: ReactNode; copy?: string; centered?: boolean; dark?: boolean }

export function SectionHeader({ eyebrow, title, copy, centered = false, dark = false }: SectionHeaderProps) {
  return <header className={`section-header ${centered ? 'section-header--centered' : ''} ${dark ? 'section-header--dark' : ''}`}>
    {eyebrow && <p className="eyebrow"><span />{eyebrow}</p>}
    <h2>{title}</h2>
    {copy && <p className="section-header__copy">{copy}</p>}
  </header>
}
