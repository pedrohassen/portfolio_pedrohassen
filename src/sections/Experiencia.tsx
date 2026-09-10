import { Section } from '../components/Section'
import { conteudo } from '../content/pt-BR'
import { experiencia, formacao } from '../data/experience'
import { formatPeriodo } from '../lib/formatPeriodo'

export function Experiencia() {
  return (
    <Section
      id="experiencia"
      marcador={conteudo.experiencia.marcador}
      titulo={conteudo.experiencia.titulo}
    >
      <ol className="space-y-10">
        {experiencia.map((item) => (
          <li key={`${item.empresa}-${item.inicio}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg">{item.cargo}</h3>
              <span className="font-sans text-sm text-muted">
                {formatPeriodo(item.inicio, item.fim)}
              </span>
            </div>
            <p className="font-sans text-sm text-muted">
              {item.empresa} · {item.local}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted marker:text-line">
              {item.atividades.map((atividade) => (
                <li key={atividade}>{atividade}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h3 className="mt-14 mb-6 text-xl">
        {conteudo.experiencia.formacaoTitulo}
      </h3>
      <ul className="space-y-4">
        {formacao.map((item) => (
          <li
            key={item.curso}
            className="flex flex-wrap items-baseline justify-between gap-x-4"
          >
            <span>
              {item.curso}{' '}
              <span className="text-muted">— {item.instituicao}</span>
            </span>
            <span className="font-sans text-sm text-muted">
              {item.conclusao}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
