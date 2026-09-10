import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'solid' | 'outline'
}

/** Sempre um `<a>` estilizado como botão (o site não tem ações, só links). */
export function Button({
  children,
  variant = 'outline',
  className = '',
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-4 py-2 font-sans text-sm transition-colors'
  const look =
    variant === 'solid'
      ? 'bg-ink text-paper hover:bg-accent'
      : 'border border-line hover:border-accent hover:text-accent'

  return (
    <a className={`${base} ${look} ${className}`} {...rest}>
      {children}
    </a>
  )
}
