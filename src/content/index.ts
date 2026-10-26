import { conteudoEn } from './en'
import { conteudo as conteudoPtBr, type Conteudo } from './pt-BR'

export type Idioma = 'pt-BR' | 'en'

/**
 * Idiomas disponíveis, na ordem do seletor. `rotulo` e `nome` não são
 * traduzidos: cada idioma se chama pelo próprio nome em qualquer versão da página.
 */
export const IDIOMAS: readonly {
  codigo: Idioma
  rotulo: string
  nome: string
}[] = [
  { codigo: 'pt-BR', rotulo: 'PT', nome: 'Português' },
  { codigo: 'en', rotulo: 'EN', nome: 'English' },
]

export const IDIOMA_PADRAO: Idioma = 'pt-BR'

export const conteudos: Record<Idioma, Conteudo> = {
  'pt-BR': conteudoPtBr,
  en: conteudoEn,
}
