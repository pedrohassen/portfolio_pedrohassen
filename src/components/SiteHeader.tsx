import { useEffect, useState } from 'react'
import { conteudo } from '../content/pt-BR'
import { perfil } from '../data/profile'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { href: '#sobre', label: conteudo.nav.sobre },
  { href: '#habilidades', label: conteudo.nav.habilidades },
  { href: '#projetos', label: conteudo.nav.projetos },
  { href: '#experiencia', label: conteudo.nav.experiencia },
  { href: '#curriculo', label: conteudo.nav.curriculo },
  { href: '#contato', label: conteudo.nav.contato },
]

const linkClasse =
  'font-sans text-sm text-muted transition-colors hover:text-ink'

/**
 * Header fixo. Nav por âncora a partir de `md`; abaixo disso, um menu
 * recolhível (`Menu` / `Fechar`). O toggle de tema fica sempre visível.
 */
export function SiteHeader() {
  const [aberto, setAberto] = useState(false)
  const fechar = () => setAberto(false)

  useEffect(() => {
    if (!aberto) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberto(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [aberto])

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/85 backdrop-blur">
      <Container className="flex h-14 items-center justify-between gap-4">
        <a
          href="#topo"
          onClick={fechar}
          className="font-display text-sm font-medium"
        >
          {perfil.nome}
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={linkClasse}>
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={perfil.links.github}
            target="_blank"
            rel="noreferrer"
            className={`hidden md:block ${linkClasse}`}
          >
            {conteudo.contato.github}
          </a>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            className={`md:hidden ${linkClasse}`}
          >
            {aberto ? 'Fechar' : 'Menu'}
          </button>
        </div>
      </Container>

      {aberto ? (
        <nav id="menu-mobile" className="border-t border-line md:hidden">
          <Container className="flex flex-col py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={fechar}
                className={`py-2 ${linkClasse}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={perfil.links.github}
              target="_blank"
              rel="noreferrer"
              onClick={fechar}
              className={`py-2 ${linkClasse}`}
            >
              {conteudo.contato.github}
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  )
}
