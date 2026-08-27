import { CTASection } from '../components/CTASection'
import { Icon } from '../components/Icon'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { usePageMetadata } from '../hooks/usePageMetadata'

const focusAreas = [
  { eyebrow: 'Experiência do paciente', icon: 'headset' as const, title: 'O exercício ganha um novo cenário.', text: 'Na proposta da ReViva, o paciente participa de atividades em um ambiente virtual que convida ao movimento e à interação.' },
  { eyebrow: 'Gamificação', icon: 'spark' as const, title: 'Objetivos que dão ritmo à jornada.', text: 'Desafios, feedbacks e progressão fazem parte da experiência para tornar cada sessão mais ativa e envolvente.' },
  { eyebrow: 'Métricas', icon: 'barChart' as const, title: 'Desempenho visto com mais clareza.', text: 'As interações realizadas ao longo das sessões podem gerar dados que apoiam a leitura da evolução.' },
  { eyebrow: 'Visão futura', icon: 'layers' as const, title: 'Caminhos que se adaptam a cada pessoa.', text: 'A personalização de experiências conforme necessidades terapêuticas é uma frente em desenvolvimento na visão da ReViva.' },
]

export function Solution() {
  usePageMetadata('Solução | ReViva', 'Conheça como a ReViva combina Realidade Virtual, gamificação e dados como apoio à reabilitação.')
  return <>
    <PageHero eyebrow="A solução ReViva" title={<>Uma experiência que convida o corpo a <em>participar.</em></>} copy="A ReViva transforma movimentos terapêuticos em atividades interativas, conectando participação, contexto e acompanhamento." action={{ label: 'Fale com a ReViva', href: '/contato' }}>
      <div className="solution-hero-art"><span className="solution-hero-art__circle" /><div className="solution-hero-art__screen"><i /><i /><i /><b>desafio<br />ativo</b></div><div className="solution-hero-art__hand">+</div><div className="solution-hero-art__chip">feedback em tempo real</div></div>
    </PageHero>
    <section className="section solution-intro">
      <div className="container split-intro"><div><p className="eyebrow"><span />Reabilitação em movimento</p><h2>Uma jornada mais presente, do primeiro gesto ao próximo avanço.</h2></div><p>O objetivo não é substituir o profissional ou reduzir a reabilitação a uma tela. É oferecer uma camada de experiência que pode tornar a prática mais convidativa e a evolução mais visível.</p></div>
    </section>
    <section className="section focus-areas">
      <div className="container">
        <SectionHeader eyebrow="O que compõe a experiência" title={<>Feita para interagir. Pensada para <em>acompanhar.</em></>} />
        <div className="focus-list">{focusAreas.map((area, index) => <article className="focus-item" key={area.eyebrow}><div className="focus-item__number">0{index + 1}</div><div className="icon-tile"><Icon name={area.icon} size={22} /></div><div><p className="eyebrow"><span />{area.eyebrow}</p><h3>{area.title}</h3><p>{area.text}</p></div></article>)}</div>
      </div>
    </section>
    <section className="section evolution-section"><div className="container evolution-panel"><div><p className="eyebrow"><span />Evolução</p><h2>Progresso é uma história, não apenas um número.</h2><p>Ao reunir as interações da experiência, a ReViva busca criar uma visão de continuidade que ajude paciente e profissional a conversar sobre o percurso.</p></div><div className="evolution-graphic" aria-hidden="true"><div className="evolution-graphic__chart"><i /><i /><i /><i /><svg viewBox="0 0 340 160" preserveAspectRatio="none"><path d="M0 138 C34 122 45 125 72 102 S112 110 140 76 S184 94 216 54 S270 77 340 15" /></svg><b /></div><span>Jornada da sessão</span></div></div></section>
    <CTASection title="A experiência pode começar aqui." copy="Converse com a ReViva sobre a solução e suas possibilidades." label="Quero conhecer a solução" />
  </>
}
