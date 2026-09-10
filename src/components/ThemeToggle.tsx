import { useEffect, useState } from 'react'
import { aplicarTema, temaInicial, type Tema } from '../lib/tema'

export function ThemeToggle() {
  const [tema, setTema] = useState<Tema>(temaInicial)

  useEffect(() => {
    aplicarTema(tema)
  }, [tema])

  const alternar = () => setTema((t) => (t === 'dark' ? 'light' : 'dark'))
  const alvo = tema === 'dark' ? 'claro' : 'escuro'

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={`Ativar tema ${alvo}`}
      className="font-sans text-sm text-muted transition-colors hover:text-ink"
    >
      {tema === 'dark' ? 'Claro' : 'Escuro'}
    </button>
  )
}
