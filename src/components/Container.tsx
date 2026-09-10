import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

/** Coluna central com largura máxima e respiros laterais. */
export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-4xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  )
}
