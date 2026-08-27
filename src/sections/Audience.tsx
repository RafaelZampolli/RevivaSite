import { Button } from '../components/Button'
import { Icon } from '../components/Icon'

export function Audience() {
  return (
    <section className="section audience-section">
      <div className="container audience-grid">
        <article className="audience-card audience-card--professionals">
          <div className="audience-card__icon"><Icon name="user" size={24} /></div>
          <p className="eyebrow"><span />Para profissionais</p>
          <h2>Dados que ajudam a enxergar cada etapa.</h2>
          <p>Uma ferramenta de apoio para quem acompanha a evolução e o engajamento do paciente.</p>
          <Button href="/profissionais" variant="secondary" arrow>Para profissionais</Button>
        </article>
        <article className="audience-card audience-card--institutions">
          <div className="audience-card__icon"><Icon name="building" size={24} /></div>
          <p className="eyebrow"><span />Para instituições</p>
          <h2>Inovação que cabe na sua visão de cuidado.</h2>
          <p>Uma experiência diferenciada para clínicas, hospitais, centros e parceiros.</p>
          <Button href="/instituicoes" variant="secondary" arrow>Para instituições</Button>
        </article>
      </div>
    </section>
  )
}
