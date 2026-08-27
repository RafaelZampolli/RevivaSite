import { Icon } from '../components/Icon'
import { SectionHeader } from '../components/SectionHeader'

export function TechnologyPreview() {
  return (
    <section className="section technology-preview">
      <div className="container technology-preview__grid">
        <div className="tech-editorial" aria-label="Tecnologia ReViva">
          <span>01</span><strong>Realidade<br />Virtual</strong><i>interação</i><b>dados</b><em>cuidado</em>
        </div>
        <div>
          <SectionHeader eyebrow="Tecnologia com propósito" title={<>Mais do que imersão. <em>Informação com contexto.</em></>} copy="A ReViva conecta Realidade Virtual, gamificação e interação em ambiente 3D a uma camada de acompanhamento de desempenho." />
          <a className="inline-link" href="/tecnologia">Explore a tecnologia <Icon name="arrowUpRight" size={17} /></a>
        </div>
      </div>
    </section>
  )
}
