import type { ReactNode } from 'react'
import { useReveal } from '../lib/useReveal'
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
 * Aparece com um leve fade + subida quando entra na viewport.
 */
export function Section({ id, marcador, titulo, children }: SectionProps) {
  const { ref, revelado } = useReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      id={id}
      className={`scroll-mt-20 border-t border-line py-14 transition duration-700 ease-out motion-reduce:transition-none sm:py-20 ${
        revelado ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      }`}
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
