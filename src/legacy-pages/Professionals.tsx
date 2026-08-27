import { CTASection } from '../components/CTASection'
import { Icon } from '../components/Icon'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { usePageMetadata } from '../hooks/usePageMetadata'

const benefits = [
  { icon: 'barChart' as const, title: 'Acompanhamento', copy: 'Uma nova camada para observar a experiência e o desempenho ao longo do tempo.' },
  { icon: 'data' as const, title: 'Informações da sessão', copy: 'Dados gerados durante a interação que podem apoiar sua análise profissional.' },
  { icon: 'spark' as const, title: 'Mais engajamento', copy: 'Atividades desenhadas para incentivar uma participação mais ativa do paciente.' },
  { icon: 'layers' as const, title: 'Histórico de evolução', copy: 'Uma visão organizada do percurso, conforme as funcionalidades evoluem.' },
]

export function Professionals() {
  usePageMetadata('Para profissionais | ReViva', 'Tecnologia ReViva: uma ferramenta de apoio para profissionais que acompanham jornadas de reabilitação.')
  return <>
    <PageHero eyebrow="Para profissionais" title={<>Tecnologia para quem acompanha a <em>evolução.</em></>} copy="A ReViva é uma ferramenta de apoio para profissionais de reabilitação que desejam explorar novas formas de engajar e acompanhar seus pacientes." action={{ label: 'Quero conhecer a solução', href: '/contato' }}>
      <div className="professional-hero-art"><div className="professional-hero-art__profile"><Icon name="user" size={33} /><span>paciente</span></div><div className="professional-hero-art__record"><small>sessão 08</small><strong>Movimento<br /><i>em foco</i></strong><div><b /><b /><b /><b /></div></div><div className="professional-hero-art__line" /></div>
    </PageHero>
    <section className="section professional-intro"><div className="container split-intro"><div><p className="eyebrow"><span />O seu olhar continua essencial</p><h2>Uma experiência digital não ocupa o lugar da escuta profissional.</h2></div><p>A proposta é somar: uma vivência mais interativa para o paciente e informações que podem contribuir com o contexto que você já constrói em cada acompanhamento.</p></div></section>
    <section className="section professional-benefits"><div className="container"><SectionHeader eyebrow="Apoio para a sua prática" title={<>Mais elementos para uma conversa <em>mais informada.</em></>} copy="A ReViva não substitui a avaliação nem a tomada de decisão profissional." /><div className="benefit-grid">{benefits.map((benefit) => <article key={benefit.title}><div className="icon-tile"><Icon name={benefit.icon} size={22} /></div><h3>{benefit.title}</h3><p>{benefit.copy}</p></article>)}</div></div></section>
    <section className="section quote-section"><div className="container"><blockquote><span>“</span><p>O cuidado é humano. A tecnologia pode ajudar a torná-lo mais visível, participativo e conectado.</p></blockquote></div></section>
    <CTASection title="Sua prática pode conhecer novos caminhos." copy="Fale com a ReViva e conheça a proposta para profissionais de reabilitação." label="Quero conhecer a solução" />
  </>
}
