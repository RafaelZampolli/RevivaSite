import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import revivaLogo from '../assets/brand/reviva-logo-official.png'

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
        <div className="hero-visual hero-visual--brand" aria-label="ReViva Health & Tech" role="img">
          <div className="hero-visual__frame" />
          <img src={revivaLogo.src} alt="" />
          <p>Movimento com<br /><strong>propósito.</strong></p>
        </div>
      </div>
    </section>
  )
}
