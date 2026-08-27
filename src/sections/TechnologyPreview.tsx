import { Icon } from '../components/Icon'
import { SectionHeader } from '../components/SectionHeader'

export function TechnologyPreview() {
  return (
    <section className="section technology-preview">
      <div className="container technology-preview__grid">
        <div className="tech-diagram" aria-label="Fluxo da tecnologia ReViva: paciente, headset, experiência, dados e acompanhamento" role="img">
          <div className="tech-diagram__line" />
          <div className="tech-node tech-node--person"><Icon name="user" size={27} /><span>Paciente</span></div>
          <div className="tech-node tech-node--headset"><Icon name="headset" size={29} /><span>Headset VR</span></div>
          <div className="tech-core"><span className="tech-core__orbit" /><span className="tech-core__orbit tech-core__orbit--alt" /><b>Re</b><small>Experiência<br />interativa</small></div>
          <div className="tech-node tech-node--data"><Icon name="data" size={26} /><span>Dados</span></div>
          <div className="tech-node tech-node--metric"><Icon name="barChart" size={27} /><span>Métricas</span></div>
        </div>
        <div>
          <SectionHeader eyebrow="Tecnologia com propósito" title={<>Mais do que imersão. <em>Informação com contexto.</em></>} copy="A ReViva conecta Realidade Virtual, gamificação e interação em ambiente 3D a uma camada de acompanhamento de desempenho." />
          <a className="inline-link" href="/tecnologia">Explore a tecnologia <Icon name="arrowUpRight" size={17} /></a>
        </div>
      </div>
    </section>
  )
}
