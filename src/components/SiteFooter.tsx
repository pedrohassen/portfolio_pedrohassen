import { perfil } from '../data/profile'
import { useIdioma } from '../lib/IdiomaContext'
import { Container } from './Container'

export function SiteFooter() {
  const { conteudo } = useIdioma()
  const ano = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-2 font-sans text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {ano} {conteudo.footer.direitos}
        </span>
        <a
          href={perfil.links.repositorio}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-ink"
        >
          {conteudo.footer.codigo}
        </a>
      </Container>
    </footer>
  )
}
