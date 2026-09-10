import { Section } from '../components/Section'
import { conteudo } from '../content/pt-BR'

// Conteúdo real entra na próxima branch (e-mail, LinkedIn, GitHub).
export function Contato() {
  return (
    <Section
      id="contato"
      marcador={conteudo.contato.marcador}
      titulo={conteudo.contato.titulo}
    >
      <p className="text-muted">Em breve.</p>
    </Section>
  )
}
