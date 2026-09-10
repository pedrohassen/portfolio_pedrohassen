import { ProjetoItem } from '../components/ProjetoItem'
import { Section } from '../components/Section'
import { conteudo } from '../content/pt-BR'
import { projetos } from '../data/projects'

export function Destaques() {
  const lista = projetos
    .filter((p) => p.destaque)
    .sort((a, b) => a.ordem - b.ordem)

  return (
    <Section
      id="destaques"
      marcador={conteudo.destaques.marcador}
      titulo={conteudo.destaques.titulo}
    >
      {lista.length === 0 ? (
        <p className="text-muted">{conteudo.destaques.vazio}</p>
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
