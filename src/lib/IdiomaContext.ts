import { createContext, useContext } from 'react'
import type { Idioma } from '../content'
import type { Conteudo } from '../content/pt-BR'

export type IdiomaContextValue = {
  idioma: Idioma
  /** Troca o idioma e lembra a escolha do visitante. */
  definirIdioma: (idioma: Idioma) => void
  /** Todo o texto da interface no idioma atual. */
  conteudo: Conteudo
}

export const IdiomaContext = createContext<IdiomaContextValue | null>(null)

export function useIdioma(): IdiomaContextValue {
  const ctx = useContext(IdiomaContext)
  if (!ctx)
    throw new Error('useIdioma precisa estar dentro de <IdiomaProvider>')
  return ctx
}
