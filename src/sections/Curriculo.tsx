import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { useIdioma } from '../lib/IdiomaContext'

export function Curriculo() {
  const { conteudo } = useIdioma()

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
          href={conteudo.curriculo.pdf}
          target="_blank"
          rel="noreferrer"
          variant="solid"
        >
          {conteudo.curriculo.ver}
        </Button>
        <Button
          href={conteudo.curriculo.pdf}
          download={conteudo.curriculo.nomeDownload}
        >
          {conteudo.curriculo.baixar}
        </Button>
      </div>
    </Section>
  )
}
