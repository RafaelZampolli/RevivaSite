import { Button } from './Button'
import { Icon } from './Icon'

export function CTASection({ title = 'Vamos transformar a reabilitação juntos.', copy = 'Conheça a proposta da ReViva e descubra possibilidades para sua prática, clínica ou instituição.', label = 'Fale com a ReViva' }: { title?: string; copy?: string; label?: string }) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-panel">
          <div>
            <p className="eyebrow"><span />Próximo passo</p>
            <h2>{title}</h2>
            <p>{copy}</p>
          </div>
          <Button href="/contato" variant="light" arrow>{label}</Button>
          <Icon className="cta-panel__spark" name="spark" size={52} />
        </div>
      </div>
    </section>
  )
}
