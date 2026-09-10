import { Section } from '../components/Section'
import { conteudo } from '../content/pt-BR'

// Conteúdo real entra na próxima branch (lista completa a partir de projects.ts).
export function Projetos() {
  return (
    <Section
      id="projetos"
      marcador={conteudo.projetos.marcador}
      titulo={conteudo.projetos.titulo}
    >
      <p className="text-muted">{conteudo.projetos.vazio}</p>
    </Section>
  )
}
