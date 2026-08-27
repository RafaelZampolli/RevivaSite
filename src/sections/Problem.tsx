import { Icon } from '../components/Icon'
import { SectionHeader } from '../components/SectionHeader'

const pains = [
  { icon: 'move' as const, number: '01', title: 'Exercícios repetitivos', copy: 'Rotinas pouco variadas podem tornar o processo cansativo.' },
  { icon: 'brain' as const, number: '02', title: 'Baixo engajamento', copy: 'Manter a motivação ao longo da jornada pode ser um desafio.' },
  { icon: 'barChart' as const, number: '03', title: 'Evolução pouco visível', copy: 'Acompanhar cada avanço pede dados que ajudem na conversa clínica.' },
]

export function Problem() {
  return (
    <section className="section problem-section">
      <div className="container">
        <SectionHeader eyebrow="O desafio" title={<>Reabilitar não deveria <em>significar repetir.</em></>} copy="A reabilitação é uma jornada individual. A ReViva nasce para trazer mais presença, participação e visibilidade a cada etapa dela." />
        <div className="problem-grid">
          {pains.map((pain) => <article className="problem-card" key={pain.number}>
            <div className="problem-card__top"><span>{pain.number}</span><Icon name={pain.icon} size={25} /></div>
            <h3>{pain.title}</h3><p>{pain.copy}</p>
            <div className="problem-card__line" />
          </article>)}
        </div>
      </div>
    </section>
  )
}
