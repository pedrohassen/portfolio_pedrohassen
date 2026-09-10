import { Section } from '../components/Section'
import { conteudo } from '../content/pt-BR'

// Conteúdo real entra na próxima branch (lista de projetos com destaque: true).
export function Destaques() {
  return (
    <Section
      id="destaques"
      marcador={conteudo.destaques.marcador}
      titulo={conteudo.destaques.titulo}
    >
      <p className="text-muted">{conteudo.destaques.vazio}</p>
    </Section>
  )
}
