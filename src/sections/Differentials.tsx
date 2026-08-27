import { Icon } from '../components/Icon'
import { SectionHeader } from '../components/SectionHeader'

const differentials = [
  { icon: 'headset' as const, title: 'Realidade Virtual', text: 'Imersão que transforma o ambiente de exercício.' },
  { icon: 'spark' as const, title: 'Gamificação', text: 'Desafios e feedback para incentivar a participação.' },
  { icon: 'data' as const, title: 'Dados', text: 'Interações convertidas em informações úteis.' },
  { icon: 'heartPulse' as const, title: 'Experiência', text: 'Uma abordagem mais ativa e interativa.' },
  { icon: 'shield' as const, title: 'Acessibilidade', text: 'Pensada para o contexto brasileiro.' },
  { icon: 'target' as const, title: 'Inovação brasileira', text: 'Tecnologia com olhar para necessidades locais.' },
]

export function Differentials() {
  return (
    <section className="section differentials">
      <div className="container">
        <SectionHeader eyebrow="Por que ReViva" title={<>Uma visão <em>mais humana</em> para a tecnologia.</>} copy="A proposta é aproximar inovação, movimento e cuidado em uma solução simples de compreender." centered />
        <div className="differentials-grid">
          {differentials.map((item) => <article key={item.title} className="differential"><div className="differential__icon"><Icon name={item.icon} size={21} /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </div>
    </section>
  )
}
