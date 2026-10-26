import { useEffect, useState } from 'react'
import { useIdioma } from '../lib/IdiomaContext'
import { aplicarTema, temaInicial, type Tema } from '../lib/tema'

export function ThemeToggle() {
  const { conteudo } = useIdioma()
  const [tema, setTema] = useState<Tema>(temaInicial)

  useEffect(() => {
    aplicarTema(tema)
  }, [tema])

  const alternar = () => setTema((t) => (t === 'dark' ? 'light' : 'dark'))
  const escuro = tema === 'dark'

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={
        escuro ? conteudo.tema.ativarClaro : conteudo.tema.ativarEscuro
      }
      className="font-sans text-sm text-muted transition-colors hover:text-ink"
    >
      {escuro ? conteudo.tema.claro : conteudo.tema.escuro}
    </button>
  )
}
