import { Icon } from '../components/Icon'
import { SectionHeader } from '../components/SectionHeader'
import rehabilitationMovement from '../assets/rehabilitation-movement.jpg'

export function TechnologyPreview() {
  return (
    <section className="section technology-preview">
      <div className="container technology-preview__grid">
        <div className="tech-editorial tech-editorial--photo scroll-animate" aria-label="Reabilitação acompanhada">
          <img src={rehabilitationMovement.src} alt="Fisioterapeuta acompanhando paciente em exercício de reabilitação" />
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
