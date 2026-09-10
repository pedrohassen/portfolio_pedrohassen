import type { ReactNode } from 'react'
import { Container } from './Container'
import { SectionMarker } from './SectionMarker'

type SectionProps = {
  id: string
  /** Ex.: "01 — Sobre". */
  marcador: string
  titulo?: string
  children: ReactNode
}

/**
 * Seção padrão da página: linha divisória no topo, marcador numerado na coluna
 * estreita à esquerda e o conteúdo na coluna principal (grid assimétrico).
 * `scroll-mt` compensa o header fixo ao navegar por âncora.
 */
export function Section({ id, marcador, titulo, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-line py-16 sm:py-24"
    >
      <Container>
        <div className="grid gap-x-12 gap-y-6 md:grid-cols-[8rem_1fr]">
          <div className="md:pt-1.5">
            <SectionMarker>{marcador}</SectionMarker>
          </div>
          <div>
            {titulo ? (
              <h2 className="mb-8 text-2xl sm:text-3xl">{titulo}</h2>
            ) : null}
            {children}
          </div>
        </div>
      </Container>
    </section>
  )
}
