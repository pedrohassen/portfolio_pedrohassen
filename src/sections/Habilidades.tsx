import { Section } from '../components/Section'
import { conteudo } from '../content/pt-BR'
import { habilidades } from '../data/habilidades'

/** Seção "02 — Habilidades": stack em colunas de texto corrido, reaproveitando
 * o mesmo estilo de rótulo já usado na linha de stack dos projetos — sem
 * badge/ícone, só tipografia. */
export function Habilidades() {
  return (
    <Section
      id="habilidades"
      marcador={conteudo.habilidades.marcador}
      titulo={conteudo.habilidades.titulo}
    >
      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-3">
        {habilidades.map((grupo) => (
          <div key={grupo.categoria}>
            <h3 className="mb-2 font-sans text-xs tracking-wide text-muted uppercase">
              {grupo.categoria}
            </h3>
            <p className="text-lg leading-relaxed">{grupo.itens.join(', ')}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
