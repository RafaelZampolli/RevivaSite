import type { ReactNode } from 'react'
import type { CSSProperties } from 'react'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return <div className={`reveal ${className}`} style={{ '--delay': `${delay}ms` } as CSSProperties}>{children}</div>
}
