import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon } from './Icon'

type ButtonVariant = 'primary' | 'secondary' | 'light' | 'text'

interface SharedProps { children: ReactNode; variant?: ButtonVariant; className?: string; arrow?: boolean }
type AnchorProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type NativeButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

export function Button({ children, variant = 'primary', className = '', arrow = false, href, ...props }: AnchorProps | NativeButtonProps) {
  const classes = `button button--${variant} ${className}`
  const content = <>{children}{arrow && <Icon name="arrow" size={17} />}</>
  if (href) return <a className={classes} href={href} {...props as AnchorHTMLAttributes<HTMLAnchorElement>}>{content}</a>
  return <button className={classes} {...props as ButtonHTMLAttributes<HTMLButtonElement>}>{content}</button>
}
