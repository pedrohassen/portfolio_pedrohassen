import type { ReactNode } from 'react'

type ExternalLinkProps = {
  href: string
  children: ReactNode
  className?: string
}

/** Link para fora do site, sempre com `rel="noreferrer"` e nova aba. */
export function ExternalLink({
  href,
  children,
  className = '',
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent ${className}`}
    >
      {children}
    </a>
  )
}
