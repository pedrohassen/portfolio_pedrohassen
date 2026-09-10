import { conteudo } from '../content/pt-BR'
import { perfil } from '../data/profile'
import { Container } from './Container'

const navItems = [
  { href: '#sobre', label: conteudo.nav.sobre },
  { href: '#destaques', label: conteudo.nav.destaques },
  { href: '#projetos', label: conteudo.nav.projetos },
  { href: '#experiencia', label: conteudo.nav.experiencia },
  { href: '#curriculo', label: conteudo.nav.curriculo },
  { href: '#contato', label: conteudo.nav.contato },
]

/**
 * Header fixo. Nav por âncora aparece a partir de `md`; no mobile fica só o
 * nome e o link do GitHub (menu mobile é item da Fase 3).
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/85 backdrop-blur">
      <Container className="flex h-14 items-center justify-between gap-4">
        <a href="#topo" className="font-display text-sm font-medium">
          {perfil.nome}
        </a>

        <nav className="hidden gap-6 font-sans text-sm text-muted md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={perfil.links.github}
          target="_blank"
          rel="noreferrer"
          className="font-sans text-sm text-muted transition-colors hover:text-ink"
        >
          {conteudo.contato.github}
        </a>
      </Container>
    </header>
  )
}
