'use client'

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './legacy-pages/About'
import { Contact } from './legacy-pages/Contact'
import { Home } from './legacy-pages/Home'
import { Institutions } from './legacy-pages/Institutions'
import { NotFound } from './legacy-pages/NotFound'
import { Professionals } from './legacy-pages/Professionals'
import { Plans } from './legacy-pages/Plans'
import { Solution } from './legacy-pages/Solution'
import { Technology } from './legacy-pages/Technology'
import type { ComponentType } from 'react'
import { useEffect } from 'react'

const routes: Record<string, ComponentType> = {
  '/': Home,
  '/sobre': About,
  '/solucao': Solution,
  '/tecnologia': Technology,
  '/profissionais': Professionals,
  '/instituicoes': Institutions,
  '/contato': Contact,
  '/planos': Plans,
}

function App() {
  const Page = routes[window.location.pathname] ?? NotFound
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.scroll-animate, section .section-header, section article, section .container > div, .cta-panel, .contact-grid, .site-footer__top > div, .site-footer__top > aside'))
    targets.forEach((target) => target.classList.add('scroll-animate'))
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.14 })
    targets.forEach((target, index) => { target.style.setProperty('--scroll-delay', `${(index % 5) * 70}ms`); observer.observe(target) })
    return () => observer.disconnect()
  }, [Page])
  return <><a className="skip-link" href="#main-content">Pular para o conteúdo</a><Navbar /><main id="main-content"><Page /></main><Footer /></>
}

export default App
