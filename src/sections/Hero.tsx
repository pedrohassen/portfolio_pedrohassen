import { Container } from '../components/Container'
import { conteudo } from '../content/pt-BR'
import { perfil } from '../data/profile'
import { calculateAge } from '../lib/age'

/** Abertura da página: nome em destaque + linha de identificação. */
export function Hero() {
  const idade = calculateAge(perfil.nascimento)

  return (
    <section id="topo" className="border-b border-line">
      <Container className="py-16 sm:py-24 md:py-28">
        <h1 className="text-4xl leading-[1.05] font-medium text-balance sm:text-6xl md:text-7xl">
          {perfil.nome}
        </h1>
        <p className="mt-6 font-sans text-base text-muted sm:text-lg">
          {perfil.titulo} · {perfil.local} · {idade}{' '}
          {conteudo.hero.idadeUnidade}
        </p>
      </Container>
    </section>
  )
}
