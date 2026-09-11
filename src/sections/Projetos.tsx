import { useState } from 'react'
import { ProjetoItem } from '../components/ProjetoItem'
import { Section } from '../components/Section'
import { conteudo } from '../content/pt-BR'
import { projetos } from '../data/projects'

/** Quantos não-destaque aparecem além dos destaques, antes do "ver mais". */
const NAO_DESTAQUE_VISIVEIS = 0

/** Destaques primeiro, depois por `ordem`. */
const lista = [...projetos].sort(
  (a, b) => (a.destaque ? 0 : 1) - (b.destaque ? 0 : 1) || a.ordem - b.ordem,
)

// Todo destaque aparece sempre, sem precisar de "ver mais" — não é um corte
// cego dos N primeiros (isso escondia destaque se passasse do número mágico).
// `NAO_DESTAQUE_VISIVEIS` só controla quantos dos demais aparecem de cara.
const destaques = lista.filter((p) => p.destaque)
const resto = lista.filter((p) => !p.destaque)
const colapsados = [...destaques, ...resto.slice(0, NAO_DESTAQUE_VISIVEIS)]

export function Projetos() {
  const [expandido, setExpandido] = useState(false)

  const temMais = lista.length > colapsados.length
  const mostrados = expandido ? lista : colapsados

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
                : `${conteudo.projetos.verMais} (${lista.length - colapsados.length})`}
            </button>
          ) : null}
        </>
      )}
    </Section>
  )
}
