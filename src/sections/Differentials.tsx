import { SectionHeader } from '../components/SectionHeader'

const differentials = [
  { title: 'Imersão', text: 'Realidade Virtual aplicada à experiência de reabilitação.' },
  { title: 'Engajamento', text: 'Gamificação para tornar a jornada mais envolvente.' },
  { title: 'Evolução', text: 'Dados que ajudam a visualizar o desempenho.' },
]

export function Differentials() {
  return (
    <section className="section differentials">
      <div className="container">
        <SectionHeader eyebrow="Por que ReViva" title={<>Tecnologia que convida o corpo a <em>participar.</em></>} copy="A proposta é aproximar inovação, movimento e cuidado em uma experiência feita para acompanhar." />
        <div className="differentials-grid">
          {differentials.map((item, index) => <article key={item.title} className="differential"><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><b>↗</b></article>)}
        </div>
      </div>
    </section>
  )
}
