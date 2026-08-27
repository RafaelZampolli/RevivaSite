import revivaMark from '../assets/brand/reviva-mark.png'

export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="/" className={`brand ${inverted ? 'brand--inverted' : ''}`} aria-label="ReViva — página inicial">
      <img className="brand__mark" src={revivaMark} alt="" />
      <span className="brand__name"><b>Re</b><i>Viva</i></span>
    </a>
  )
}
