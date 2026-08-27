import { CTASection } from '../components/CTASection'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { Audience } from '../sections/Audience'
import { Differentials } from '../sections/Differentials'
import { Hero } from '../sections/Hero'
import { HowItWorks } from '../sections/HowItWorks'
import { Problem } from '../sections/Problem'
import { SolutionPreview } from '../sections/SolutionPreview'
import { TechnologyPreview } from '../sections/TechnologyPreview'

export function Home() {
  usePageMetadata('ReViva | Reabilitação através da Realidade Virtual', 'A ReViva utiliza Realidade Virtual e gamificação para transformar a experiência de reabilitação física.')
  return <><Hero /><Problem /><SolutionPreview /><HowItWorks /><TechnologyPreview /><Differentials /><Audience /><CTASection /></>
}
