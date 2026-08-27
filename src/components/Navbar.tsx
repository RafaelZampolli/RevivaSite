import { useEffect, useState } from 'react'
import { navItems } from '../data/navigation'
import { BrandMark } from './BrandMark'
import { Button } from './Button'
import { Icon } from './Icon'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 14)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  const currentPath = window.location.pathname
  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner container">
        <BrandMark />
        <nav className="nav-links" aria-label="Navegação principal">
          {navItems.map(({ label, href }) => <a key={label} className={currentPath === href.split('#')[0] && !href.includes('#') ? 'is-active' : ''} href={href}>{label}</a>)}
        </nav>
        <Button href="/contato" className="nav-cta" arrow>Conheça a ReViva</Button>
        <button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
      <div className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`}>
        <nav aria-label="Navegação móvel">
          {navItems.map(({ label, href }) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <Button href="/contato" arrow onClick={() => setOpen(false)}>Conheça a ReViva</Button>
        </nav>
      </div>
    </header>
  )
}
