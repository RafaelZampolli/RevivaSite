import revivaMark from '../assets/brand/reviva-mark-official.png'

export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="/" className={`brand ${inverted ? 'brand--inverted' : ''}`} aria-label="ReViva — página inicial">
      <img className="brand__mark brand__mark--official" src={revivaMark.src} alt="ReViva" />
    </a>
  )
}
