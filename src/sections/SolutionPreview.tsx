import { Icon } from '../components/Icon'
import { SectionHeader } from '../components/SectionHeader'

const pillars = [
  { icon: 'headset' as const, title: 'Experiência', copy: 'Exercícios transformados em atividades interativas dentro de um ambiente virtual.' },
  { icon: 'spark' as const, title: 'Engajamento', copy: 'Elementos de gamificação tornam a experiência mais dinâmica e convidativa.' },
  { icon: 'data' as const, title: 'Acompanhamento', copy: 'Interações geram informações que podem apoiar a visualização da evolução.' },
]

export function SolutionPreview() {
  return (
    <section className="section solution-preview">
      <div className="container solution-preview__grid">
        <div className="solution-preview__sticky">
          <SectionHeader eyebrow="A proposta" title={<>Uma nova forma de <em>viver</em> a reabilitação.</>} copy="Tecnologia não substitui o cuidado humano. Ela pode abrir uma camada de experiência e informação para apoiá-lo." />
          <a className="inline-link" href="/solucao">Conheça a solução <Icon name="arrowUpRight" size={17} /></a>
        </div>
        <div className="pillar-list">
          {pillars.map((pillar, index) => <article className="pillar" key={pillar.title}>
            <span className="pillar__number">0{index + 1}</span>
            <div className="icon-tile"><Icon name={pillar.icon} size={23} /></div>
            <div><h3>{pillar.title}</h3><p>{pillar.copy}</p></div>
          </article>)}
        </div>
      </div>
    </section>
  )
}
