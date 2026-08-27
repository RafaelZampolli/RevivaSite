import { CTASection } from '../components/CTASection'
import { Icon } from '../components/Icon'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { usePageMetadata } from '../hooks/usePageMetadata'

const opportunities = [
  { label: 'Clínicas e centros', icon: 'heartPulse' as const, text: 'Uma experiência diferenciada que pode complementar jornadas de reabilitação.' },
  { label: 'Hospitais', icon: 'building' as const, text: 'Uma frente de inovação para explorar novos formatos de cuidado e tecnologia.' },
  { label: 'Instituições de ensino', icon: 'brain' as const, text: 'Possibilidades de conexão com formação, pesquisa e ambientes de simulação.' },
  { label: 'Parceiros', icon: 'layers' as const, text: 'Espaço para construir, testar e fazer a tecnologia evoluir em conjunto.' },
]

export function Institutions() {
  usePageMetadata('Para instituições | ReViva', 'Conheça possibilidades da ReViva para clínicas, hospitais, centros de reabilitação e parceiros.')
  return <>
    <PageHero eyebrow="Para instituições" title={<>Inovação que encontra espaço no <em>cuidado.</em></>} copy="A ReViva abre possibilidades para instituições que desejam explorar tecnologia, experiência e novas formas de engajamento em reabilitação." action={{ label: 'Fale com a ReViva', href: '/contato' }} />
    <section className="section opportunity-section"><div className="container"><SectionHeader eyebrow="Onde a ReViva pode atuar" title={<>Uma proposta aberta a <em>construir junto.</em></>} copy="A solução está em desenvolvimento e busca aproximação com organizações que compartilham uma visão de reabilitação mais conectada e envolvente." centered /><div className="opportunity-grid">{opportunities.map((item) => <article key={item.label}><div className="icon-tile"><Icon name={item.icon} size={23} /></div><h3>{item.label}</h3><p>{item.text}</p><Icon name="arrowUpRight" size={18} /></article>)}</div></div></section>
    <section className="section institution-values"><div className="container institution-values__panel"><div><p className="eyebrow"><span />O que buscamos viabilizar</p><h2>Uma jornada de inovação com os pés no presente.</h2></div><div className="institution-values__list"><p><Icon name="check" size={17} />Experiências diferenciadas para pacientes</p><p><Icon name="check" size={17} />Tecnologia como apoio ao acompanhamento</p><p><Icon name="check" size={17} />Possibilidades de integração e parceria</p><p><Icon name="check" size={17} />Uma visão escalável, em evolução</p></div></div></section>
    <CTASection title="Vamos pensar no próximo movimento." copy="Se sua instituição enxerga valor em inovar com propósito, queremos conversar." />
  </>
}
