import { Section } from '../components/Section'
import { conteudo } from '../content/pt-BR'

// Conteúdo real entra na próxima branch (botões "Ver" e "Baixar" do PDF).
export function Curriculo() {
  return (
    <Section
      id="curriculo"
      marcador={conteudo.curriculo.marcador}
      titulo={conteudo.curriculo.titulo}
    >
      <p className="text-muted">Em breve.</p>
    </Section>
  )
}
