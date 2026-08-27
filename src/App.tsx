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
  return <><a className="skip-link" href="#main-content">Pular para o conteúdo</a><Navbar /><main id="main-content"><Page /></main><Footer /></>
}

export default App
