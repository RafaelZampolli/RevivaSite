import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function NotFound() {
  usePageMetadata('Página não encontrada | ReViva', 'A página que você procura não foi encontrada.')
  return <main className="not-found"><div className="not-found__orb"><i /><i /><i /><b>404</b></div><p className="eyebrow"><span />Rota não encontrada</p><h1>Ops. Essa página saiu do ambiente virtual.</h1><p>Mas a experiência ReViva continua por aqui.</p><Button href="/" arrow>Voltar para a ReViva</Button><Icon className="not-found__spark" name="spark" size={37} /></main>
}
