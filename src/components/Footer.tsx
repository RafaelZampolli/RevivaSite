import { footerGroups } from '../data/navigation'
import revivaLogo from '../assets/brand/reviva-logo.png'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="footer-brand">
          <a href="/" className="footer-brand__logo" aria-label="ReViva — página inicial"><img src={revivaLogo} alt="ReViva Health & Tech" /></a>
          <p>Tecnologia, movimento e inovação para uma nova experiência de reabilitação.</p>
          <div className="social-links" aria-label="Redes sociais">
            <a href="/contato" aria-label="LinkedIn da ReViva"><Icon name="linkedin" size={18} /></a>
            <a href="/contato" aria-label="Instagram da ReViva"><Icon name="instagram" size={18} /></a>
          </div>
        </div>
        <div className="footer-links">
          {footerGroups.map((group) => <div key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
          </div>)}
        </div>
        <aside className="footer-note">
          <Icon name="heartPulse" size={19} />
          <p>A ReViva é uma solução tecnológica de apoio à reabilitação e não substitui avaliação ou acompanhamento de profissionais de saúde.</p>
        </aside>
      </div>
      <div className="container site-footer__bottom">
        <span>© 2026 ReViva. Todos os direitos reservados.</span>
        <span>Brasil</span>
      </div>
    </footer>
  )
}
