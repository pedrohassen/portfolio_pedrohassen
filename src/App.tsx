import { Analytics } from '@vercel/analytics/react'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { SkipLink } from './components/SkipLink'
import { Contato } from './sections/Contato'
import { Curriculo } from './sections/Curriculo'
import { Destaques } from './sections/Destaques'
import { Experiencia } from './sections/Experiencia'
import { Hero } from './sections/Hero'
import { Projetos } from './sections/Projetos'
import { Sobre } from './sections/Sobre'

export default function App() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Destaques />
        <Projetos />
        <Experiencia />
        <Curriculo />
        <Contato />
      </main>
      <SiteFooter />
      <Analytics />
    </>
  )
}
