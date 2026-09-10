import { ProjetoItem } from '../components/ProjetoItem'
import { Section } from '../components/Section'
import { conteudo } from '../content/pt-BR'
import { projetos } from '../data/projects'

export function Projetos() {
  const lista = [...projetos].sort((a, b) => a.ordem - b.ordem)

  return (
    <Section
      id="projetos"
      marcador={conteudo.projetos.marcador}
      titulo={conteudo.projetos.titulo}
    >
      {lista.length === 0 ? (
        <p className="text-muted">{conteudo.projetos.vazio}</p>
      ) : (
        <div>
          {lista.map((projeto) => (
            <ProjetoItem key={projeto.slug} projeto={projeto} />
          ))}
        </div>
      )}
    </Section>
  )
}
