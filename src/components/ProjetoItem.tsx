import { conteudo } from '../content/pt-BR'
import type { Projeto } from '../types'
import { ExternalLink } from './ExternalLink'

/** Uma linha da lista de projetos (seção Projetos). */
export function ProjetoItem({ projeto }: { projeto: Projeto }) {
  const temLinks = Boolean(projeto.repoUrl || projeto.demoUrl)

  return (
    <article className="border-t border-line py-6 first:border-t-0 first:pt-0">
      {projeto.destaque ? (
        <p className="mb-2 flex items-center gap-2 font-sans text-xs tracking-[0.15em] text-accent uppercase">
          <span aria-hidden="true" className="h-px w-6 bg-accent" />
          {conteudo.projetos.destaque}
        </p>
      ) : null}

      <h3 className="text-xl">{projeto.titulo}</h3>

      <p className="mt-2 max-w-[var(--container-measure)] text-muted">
        {projeto.resumo}
      </p>

      {projeto.stack.length > 0 ? (
        <p className="mt-3 font-sans text-xs tracking-wide text-muted uppercase">
          {projeto.stack.join(' · ')}
        </p>
      ) : null}

      {temLinks ? (
        <p className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-sans text-sm">
          {projeto.repoUrl ? (
            <ExternalLink href={projeto.repoUrl}>
              {conteudo.projetos.verNoGithub}
            </ExternalLink>
          ) : null}
          {projeto.demoUrl ? (
            <ExternalLink href={projeto.demoUrl}>
              {conteudo.projetos.verDemo}
            </ExternalLink>
          ) : null}
        </p>
      ) : null}
    </article>
  )
}
