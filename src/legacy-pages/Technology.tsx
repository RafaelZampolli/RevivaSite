import { CTASection } from '../components/CTASection'
import { Icon } from '../components/Icon'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { usePageMetadata } from '../hooks/usePageMetadata'

const techLayers = [
  { name: 'Realidade Virtual', icon: 'headset' as const, copy: 'Um ambiente imersivo onde atividades de movimento podem ganhar forma.' },
  { name: 'Experiência 3D', icon: 'layers' as const, copy: 'Interações visuais e espaciais que fazem parte da proposta de cada desafio.' },
  { name: 'Gamificação', icon: 'spark' as const, copy: 'Objetivos e retornos de experiência que apoiam o engajamento.' },
  { name: 'Informações da sessão', icon: 'data' as const, copy: 'Dados das interações organizados como apoio ao acompanhamento.' },
]

export function Technology() {
  usePageMetadata('Tecnologia | ReViva', 'A tecnologia ReViva conecta Realidade Virtual, experiências interativas e acompanhamento de desempenho.')
  return <>
    <PageHero eyebrow="Tecnologia ReViva" title={<>Imersão com um objetivo <em>muito real.</em></>} copy="Uma plataforma em desenvolvimento que conecta experiências em Realidade Virtual a uma visão mais contextual do desempenho." action={{ label: 'Conheça a solução', href: '/solucao' }} />
    <section className="section tech-story"><div className="container tech-story__grid"><div><SectionHeader eyebrow="Tecnologia a serviço do cuidado" title={<>O virtual é só o meio. O foco é a <em>experiência.</em></>} copy="A ReViva foi concebida para criar ambientes de interação que valorizem a participação do paciente e ofereçam novos pontos de conversa ao profissional." /></div><aside className="tech-story__note"><Icon name="shield" size={23} /><p>A tecnologia é uma ferramenta de apoio. O planejamento e o acompanhamento continuam com os profissionais de saúde.</p></aside></div></section>
    <section className="section tech-layers"><div className="container"><SectionHeader eyebrow="Como a proposta se conecta" title="Quatro camadas, uma experiência integrada." centered /><div className="tech-layers__grid">{techLayers.map((layer, index) => <article key={layer.name}><span>0{index + 1}</span><div className="icon-tile"><Icon name={layer.icon} size={23} /></div><h3>{layer.name}</h3><p>{layer.copy}</p></article>)}</div></div></section>
    <section className="section system-flow"><div className="container"><SectionHeader eyebrow="Fluxo da solução" title={<>Da experiência ao <em>acompanhamento.</em></>} centered /><div className="system-flow__items"><div><Icon name="user" size={25} /><span>Paciente</span></div><i /><div><Icon name="headset" size={25} /><span>Headset VR</span></div><i /><div className="system-flow__center"><b>ReViva</b><span>Experiência<br />interativa</span></div><i /><div><Icon name="data" size={25} /><span>Coleta de dados</span></div><i /><div><Icon name="barChart" size={25} /><span>Acompanhamento</span></div></div><p className="system-flow__caption">A coleta e a visualização de métricas fazem parte da visão de desenvolvimento da solução.</p></div></section>
    <CTASection title="Tecnologia com contexto faz a diferença." copy="Veja como a ReViva pode se conectar à sua visão de inovação em reabilitação." />
  </>
}
