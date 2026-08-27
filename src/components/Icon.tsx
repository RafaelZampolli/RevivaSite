type IconName =
  | 'arrow'
  | 'arrowUpRight'
  | 'barChart'
  | 'brain'
  | 'building'
  | 'check'
  | 'chevronDown'
  | 'close'
  | 'data'
  | 'headset'
  | 'heartPulse'
  | 'instagram'
  | 'layers'
  | 'linkedin'
  | 'menu'
  | 'move'
  | 'play'
  | 'plus'
  | 'shield'
  | 'spark'
  | 'target'
  | 'user'

interface IconProps {
  name: IconName
  size?: number
  strokeWidth?: number
  className?: string
}

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  arrowUpRight: <><path d="M7 17 17 7"/><path d="M8 7h9v9"/></>,
  barChart: <><path d="M3 3v18h18"/><path d="M7 16v-4"/><path d="M12 16V8"/><path d="M17 16V5"/></>,
  brain: <><path d="M9.5 4a3 3 0 0 0-5.4 1.8A3.5 3.5 0 0 0 5.5 12 3.5 3.5 0 0 0 9 18.1V20h6v-1.9a3.5 3.5 0 0 0 3.5-6.1 3.5 3.5 0 0 0 1.4-6.2A3 3 0 0 0 14.5 4 3.4 3.4 0 0 0 12 5.1 3.4 3.4 0 0 0 9.5 4Z"/><path d="M12 5v15M8 9h4M12 14h4"/></>,
  building: <><path d="M3 21h18"/><path d="M5 21V5l7-3 7 3v16"/><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  chevronDown: <path d="m6 9 6 6 6-6"/>,
  close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
  data: <><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/><path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"/></>,
  headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M18 14h1a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2h-1v-6ZM6 14H5a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h1v-6Z"/><path d="M18 20c0 1.1-.9 2-2 2h-2"/></>,
  heartPulse: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/><path d="M3.8 12H8l1.4-3 2.6 6 1.5-3H20"/></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></>,
  linkedin: <><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3M12 11v5"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  move: <><path d="m12 3 3 3-3 3M12 21l-3-3 3-3M3 12l3-3 3 3M21 12l-3 3-3-3"/><path d="M6 12h12M12 6v12"/></>,
  play: <path d="m9 7 7 5-7 5V7Z"/>,
  plus: <><path d="M12 5v14M5 12h14"/></>,
  shield: <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z"/>,
  spark: <path d="m12 3-1.4 5.6L5 10l5.6 1.4L12 17l1.4-5.6L19 10l-5.6-1.4L12 3ZM5 16l-.6 2.4L2 19l2.4.6L5 22l.6-2.4L8 19l-2.4-.6L5 16Z"/>,
  target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="m19 5 2-2M19 5h2v2"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
}

export function Icon({ name, size = 20, strokeWidth = 1.8, className }: IconProps) {
  return <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}
