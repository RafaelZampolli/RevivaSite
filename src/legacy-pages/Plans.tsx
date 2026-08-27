import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { usePageMetadata } from '../hooks/usePageMetadata'

const plans = [
  { name: 'Básico', label: 'O essencial para começar', copy: 'Programa de reabilitação para acompanhar uma nova jornada de movimento.', features: ['Programa de reabilitação'], featured: false },
  { name: 'Imersivo', label: 'Mais interação na jornada', copy: 'Programa de reabilitação combinado a uma experiência imersiva em Realidade Virtual.', features: ['Programa de reabilitação', 'Um dispositivo de Realidade Virtual'], featured: true },
  { name: 'Ultra', label: 'A experiência completa', copy: 'Tudo pronto para viver a ReViva com tecnologia integrada e preparada para uso.', features: ['Programa de reabilitação', 'Um dispositivo de Realidade Virtual', 'Computador configurado e pronto'], featured: false },
]

export function Plans() {
  usePageMetadata('Planos | ReViva', 'Conheça os planos ReViva para uma nova experiência de reabilitação.')
  return <>
    <PageHero eyebrow="Planos ReViva" title={<>Escolha o ritmo da sua <em>evolução.</em></>} copy="Encontre a experiência que combina com o momento da sua jornada de reabilitação." />
    <section className="plans-section section"><div className="container plans-grid">
      {plans.map((plan, index) => <article className={`plan-card ${plan.featured ? 'plan-card--featured' : ''}`} key={plan.name}>
        <span className="plan-card__index">0{index + 1}</span><p className="eyebrow"><span />{plan.label}</p><h2>{plan.name}</h2><p className="plan-card__copy">{plan.copy}</p>
        <ul>{plan.features.map(feature => <li key={feature}><span>✓</span>{feature}</li>)}</ul><Button href="/contato" variant={plan.featured ? 'primary' : 'secondary'} arrow>Tenho interesse</Button>
      </article>)}
    </div></section>
  </>
}
