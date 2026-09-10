import { Section } from '../components/Section'
import { conteudo } from '../content/pt-BR'

/** Seção "01 — Sobre": bio em prosa. */
export function Sobre() {
  return (
    <Section id="sobre" marcador={conteudo.hero.marcador}>
      <div className="max-w-[var(--container-measure)] space-y-4 text-lg leading-relaxed sm:text-xl">
        {conteudo.hero.bio.map((paragrafo) => (
          <p key={paragrafo}>{paragrafo}</p>
        ))}
      </div>
    </Section>
  )
}
