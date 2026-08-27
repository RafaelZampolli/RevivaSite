import { Button } from '../components/Button'
import { Icon } from '../components/Icon'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow"><span />HealthTech brasileira</p>
          <h1>Reabilitação que transforma <em>movimento</em> em evolução.</h1>
          <p className="hero__lead">A ReViva utiliza Realidade Virtual e gamificação para tornar a reabilitação física mais envolvente, mensurável e motivadora.</p>
          <div className="hero__actions">
            <Button href="/solucao" arrow>Conheça a solução</Button>
            <Button href="#como-funciona" variant="secondary"><Icon name="play" size={16} />Como funciona</Button>
          </div>
          <p className="hero__disclaimer"><Icon name="heartPulse" size={17} />Tecnologia criada para apoiar jornadas de reabilitação.</p>
        </div>
        <div className="hero-visual" aria-label="Composição abstrata sobre movimento e evolução" role="img">
          <div className="hero-visual__backdrop" />
          <div className="hero-visual__grid" />
          <div className="hero-visual__ring hero-visual__ring--outer" />
          <div className="hero-visual__ring hero-visual__ring--inner" />
          <div className="hero-visual__path"><i /><i /><i /><i /><i /></div>
          <div className="hero-visual__figure"><i /><b /><span /></div>
          <div className="hero-visual__orbit-label">movimento<br /><strong>em evolução</strong></div>
          <div className="visual-chip visual-chip--movement"><Icon name="move" size={17} /><span>Movimento</span><b>ativo</b></div>
          <div className="visual-chip visual-chip--progress"><span className="pulse-dot" /><div><small>Sessão</small><strong>em progresso</strong></div></div>
          <div className="visual-stat"><span>Experiência</span><strong>ReViva <i>01</i></strong><div><b /><b /><b /><b /><b /><b /></div></div>
        </div>
      </div>
    </section>
  )
}
