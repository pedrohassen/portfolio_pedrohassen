import { useState } from 'react'
import { ProjetoItem } from '../components/ProjetoItem'
import { Section } from '../components/Section'
import { conteudo } from '../content/pt-BR'
import { projetos } from '../data/projects'

/** Quantos projetos aparecem antes do "ver mais". */
const VISIVEIS = 5

/** Destaques primeiro, depois por `ordem`. */
const lista = [...projetos].sort(
  (a, b) => (a.destaque ? 0 : 1) - (b.destaque ? 0 : 1) || a.ordem - b.ordem,
)

export function Projetos() {
  const [expandido, setExpandido] = useState(false)

  const temMais = lista.length > VISIVEIS
  const mostrados = expandido ? lista : lista.slice(0, VISIVEIS)

  return (
    <Section
      id="projetos"
      marcador={conteudo.projetos.marcador}
      titulo={conteudo.projetos.titulo}
    >
      {lista.length === 0 ? (
        <p className="text-muted">{conteudo.projetos.vazio}</p>
      ) : (
        <>
          <div>
            {mostrados.map((projeto) => (
              <ProjetoItem key={projeto.slug} projeto={projeto} />
            ))}
          </div>

          {temMais ? (
            <button
              type="button"
              onClick={() => setExpandido((v) => !v)}
              className="mt-8 font-sans text-sm text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
            >
              {expandido
                ? conteudo.projetos.verMenos
                : `${conteudo.projetos.verMais} (${lista.length - VISIVEIS})`}
            </button>
          ) : null}
        </>
      )}
    </Section>
  )
}
