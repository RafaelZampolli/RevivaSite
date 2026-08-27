import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Institutions } from './pages/Institutions'
import { NotFound } from './pages/NotFound'
import { Professionals } from './pages/Professionals'
import { Solution } from './pages/Solution'
import { Technology } from './pages/Technology'
import type { ComponentType } from 'react'

const routes: Record<string, ComponentType> = {
  '/': Home,
  '/sobre': About,
  '/solucao': Solution,
  '/tecnologia': Technology,
  '/profissionais': Professionals,
  '/instituicoes': Institutions,
  '/contato': Contact,
}

function App() {
  const Page = routes[window.location.pathname] ?? NotFound
  return <><a className="skip-link" href="#main-content">Pular para o conteúdo</a><Navbar /><main id="main-content"><Page /></main><Footer /></>
}

export default App
