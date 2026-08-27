import { useState, type FormEvent } from 'react'
import { Icon } from '../components/Icon'
import { PageHero } from '../components/PageHero'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  usePageMetadata('Contato | ReViva', 'Entre em contato com a ReViva para conhecer a proposta de reabilitação através de Realidade Virtual.')
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSending(true)
    window.setTimeout(() => { setSending(false); setSubmitted(true) }, 650)
  }
  return <>
    <PageHero eyebrow="Contato" title={<>Vamos transformar a reabilitação <em>juntos.</em></>} copy="Quer conhecer a ReViva, construir uma parceria ou conversar sobre possibilidades? Deixe sua mensagem." />
    <section className="section contact-section"><div className="container contact-grid"><aside className="contact-aside"><p className="eyebrow"><span />Fale com a gente</p><h2>Uma conversa pode ser o próximo movimento.</h2><p>Conte um pouco sobre o que você procura. Nossa equipe retornará assim que possível.</p><div className="contact-aside__points"><p><Icon name="heartPulse" size={19} />Para profissionais de saúde</p><p><Icon name="building" size={19} />Para clínicas e instituições</p><p><Icon name="layers" size={19} />Para parceiros e inovação</p></div></aside><div className="contact-form-wrap">{submitted ? <div className="form-success" role="status"><div className="form-success__icon"><Icon name="check" size={28} /></div><h2>Mensagem recebida.</h2><p>Obrigada por entrar em contato. A ReViva retornará assim que possível.</p><button type="button" className="button button--secondary" onClick={() => setSubmitted(false)}>Enviar outra mensagem</button></div> : <form className="contact-form" onSubmit={submit}><div className="contact-form__row"><label>Nome<input required name="name" autoComplete="name" placeholder="Seu nome" /></label><label>E-mail<input required name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" /></label></div><label>Empresa ou instituição<input name="company" autoComplete="organization" placeholder="Onde você atua?" /></label><label>Como podemos ajudar?<select required name="reason" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Quero conhecer a ReViva</option><option>Sou profissional de saúde</option><option>Represento uma clínica</option><option>Represento uma instituição</option><option>Quero ser parceiro</option><option>Outro</option></select><Icon name="chevronDown" size={17} /></label><label>Mensagem<textarea required name="message" rows={5} placeholder="Conte um pouco sobre o que você procura." /></label><button className="button button--primary" disabled={sending} type="submit">{sending ? 'Enviando…' : <>Enviar mensagem <Icon name="arrow" size={17} /></>}</button><p className="form-privacy">Ao enviar, você concorda que a ReViva use essas informações para responder ao seu contato.</p></form>}</div></div></section>
  </>
}
