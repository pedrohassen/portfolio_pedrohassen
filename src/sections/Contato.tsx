import { ExternalLink } from '../components/ExternalLink'
import { Section } from '../components/Section'
import { perfil } from '../data/profile'
import { useIdioma } from '../lib/IdiomaContext'

const linkClasse =
  'underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'

export function Contato() {
  const { conteudo } = useIdioma()

  return (
    <Section
      id="contato"
      marcador={conteudo.contato.marcador}
      titulo={conteudo.contato.titulo}
    >
      <p className="mb-6 max-w-[var(--container-measure)] text-muted">
        {conteudo.contato.texto}
      </p>
      <ul className="space-y-2 font-sans">
        <li>
          <span className="inline-block w-24 text-muted">
            {conteudo.contato.email}
          </span>
          <a href={`mailto:${perfil.email}`} className={linkClasse}>
            {perfil.email}
          </a>
        </li>
        <li>
          <span className="inline-block w-24 text-muted">
            {conteudo.contato.linkedin}
          </span>
          <ExternalLink href={perfil.links.linkedin}>
            {perfil.links.linkedin.replace('https://www.', '')}
          </ExternalLink>
        </li>
        <li>
          <span className="inline-block w-24 text-muted">
            {conteudo.contato.github}
          </span>
          <ExternalLink href={perfil.links.github}>
            {perfil.links.github.replace('https://', '')}
          </ExternalLink>
        </li>
      </ul>
    </Section>
  )
}
