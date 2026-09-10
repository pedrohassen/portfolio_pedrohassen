import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { conteudo } from '../content/pt-BR'
import { perfil } from '../data/profile'

export function Curriculo() {
  return (
    <Section
      id="curriculo"
      marcador={conteudo.curriculo.marcador}
      titulo={conteudo.curriculo.titulo}
    >
      <p className="mb-6 max-w-[var(--container-measure)] text-muted">
        {conteudo.curriculo.texto}
      </p>
      <div className="flex flex-wrap gap-3">
        <Button
          href={perfil.curriculoPdf}
          target="_blank"
          rel="noreferrer"
          variant="solid"
        >
          {conteudo.curriculo.ver}
        </Button>
        <Button href={perfil.curriculoPdf} download>
          {conteudo.curriculo.baixar}
        </Button>
      </div>
    </Section>
  )
}
