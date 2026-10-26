import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { conteudos, type Idioma } from '../content'
import { aplicarIdioma, idiomaInicial, salvarIdioma } from '../lib/idioma'
import { IdiomaContext } from '../lib/IdiomaContext'

/** Guarda o idioma atual e entrega o texto correspondente a toda a árvore. */
export function IdiomaProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>(idiomaInicial)
  const conteudo = conteudos[idioma]

  useEffect(() => {
    aplicarIdioma(idioma, conteudo.meta)
  }, [idioma, conteudo])

  const definirIdioma = useCallback((novo: Idioma) => {
    setIdioma(novo)
    salvarIdioma(novo)
  }, [])

  const valor = useMemo(
    () => ({ idioma, definirIdioma, conteudo }),
    [idioma, definirIdioma, conteudo],
  )

  return <IdiomaContext value={valor}>{children}</IdiomaContext>
}
