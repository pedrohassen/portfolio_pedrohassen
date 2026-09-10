import { Section } from '../components/Section'
import { conteudo } from '../content/pt-BR'

// Conteúdo real entra na próxima branch (timeline de experience.ts + formação).
export function Experiencia() {
  return (
    <Section
      id="experiencia"
      marcador={conteudo.experiencia.marcador}
      titulo={conteudo.experiencia.titulo}
    >
      <p className="text-muted">Em breve.</p>
    </Section>
  )
}
