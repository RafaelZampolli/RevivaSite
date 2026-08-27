import { CTASection } from '../components/CTASection'
import { Icon } from '../components/Icon'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function About() {
  usePageMetadata('A ReViva | Tecnologia com propósito humano', 'Conheça a visão, missão e propósito da ReViva, uma HealthTech brasileira focada em reabilitação com Realidade Virtual.')
  return <>
    <PageHero eyebrow="Sobre a ReViva" title={<>Tecnologia com propósito <em>humano.</em></>} copy="A ReViva nasce da vontade de tornar a reabilitação uma experiência mais participativa, envolvente e possível de acompanhar." action={{ label: 'Fale com a ReViva', href: '/contato' }} />
    <section className="section origin-section" id="origem"><div className="container origin-grid"><div><p className="eyebrow"><span />Nossa origem</p><h2>Quando a tecnologia encontra um problema que importa.</h2></div><div><p>A ReViva começou com uma pergunta simples: e se a reabilitação pudesse convidar mais do que exigir? A partir dela, o projeto passou a explorar como Realidade Virtual, interação e gamificação podem criar uma relação diferente com o movimento.</p><p>Hoje, a ReViva é uma HealthTech brasileira em desenvolvimento, com um protótipo funcional em Unity voltado a experiências de reabilitação em VR.</p></div></div></section>
    <section className="section purpose-section"><div className="container purpose-grid"><article><div className="icon-tile"><Icon name="target" size={23} /></div><p className="eyebrow"><span />Nossa missão</p><h2>Transformar a reabilitação por meio da tecnologia.</h2><p>Tornando o processo mais humano, envolvente e mensurável.</p></article><article><div className="icon-tile"><Icon name="spark" size={23} /></div><p className="eyebrow"><span />Nossa visão</p><h2>Construir uma nova geração de soluções digitais.</h2><p>Para experiências de reabilitação mais conectadas às pessoas.</p></article></div></section>
    <section className="section future-section"><div className="container future-grid"><div className="future-flow" aria-hidden="true"><i /><i /><i /></div><div><SectionHeader eyebrow="O que vem pela frente" title={<>Evoluir em público, com escuta e <em>responsabilidade.</em></>} copy="O futuro da ReViva envolve aprimorar experiências, desenvolver recursos de acompanhamento e construir relações com pessoas e instituições que acreditam em inovação com propósito." /><a className="inline-link" href="/contato">Construa com a ReViva <Icon name="arrowUpRight" size={17} /></a></div></div></section>
    <CTASection title="Um novo olhar para a reabilitação começa com uma conversa." />
  </>
}
