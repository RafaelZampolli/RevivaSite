import { Icon } from '../components/Icon'
import { SectionHeader } from '../components/SectionHeader'

const steps = [
  { icon: 'headset' as const, title: 'A experiência começa', copy: 'O paciente entra no ambiente de Realidade Virtual.' },
  { icon: 'move' as const, title: 'O corpo interage', copy: 'Movimentos e atividades fazem parte da experiência.' },
  { icon: 'data' as const, title: 'A interação informa', copy: 'O sistema registra dados da sessão e do desempenho.' },
  { icon: 'barChart' as const, title: 'A evolução ganha contexto', copy: 'O profissional pode usar os dados como apoio ao acompanhamento.' },
]

export function HowItWorks() {
  return (
    <section className="section how-it-works" id="como-funciona">
      <div className="container">
        <SectionHeader eyebrow="Em quatro movimentos" title={<>Tecnologia que acompanha <em>a jornada.</em></>} copy="Uma experiência pensada para colocar o paciente no centro, sem perder o contexto de quem acompanha." centered dark />
        <ol className="process-track">
          {steps.map((step, index) => <li key={step.title}>
            <span className="process-track__number">0{index + 1}</span>
            <div className="process-track__icon"><Icon name={step.icon} size={22} /></div>
            <h3>{step.title}</h3><p>{step.copy}</p>
          </li>)}
        </ol>
      </div>
    </section>
  )
}
