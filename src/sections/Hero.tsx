import { Container } from '../components/Container'
import { perfil } from '../data/profile'
import { calculateAge } from '../lib/age'
import { useIdioma } from '../lib/IdiomaContext'

/** Abertura da página: nome em destaque + linha de identificação. */
export function Hero() {
  const { conteudo } = useIdioma()
  const idade = calculateAge(perfil.nascimento)

  return (
    <section id="topo" className="border-b border-line">
      <Container className="py-16 sm:py-24 md:py-28">
        <h1 className="text-4xl leading-[1.05] font-medium text-balance sm:text-6xl md:text-7xl">
          {perfil.nome}
        </h1>
        <p className="mt-6 font-sans text-base text-muted sm:text-lg">
          {conteudo.hero.titulo} · {conteudo.hero.local} · {idade}{' '}
          {conteudo.hero.idadeUnidade} · {conteudo.hero.disponivel}
        </p>
      </Container>
    </section>
  )
}
