/** Tipos compartilhados. Consumidos por `src/data/*` e pelas seções. */

export type LinksExternos = {
  github: string
  linkedin: string
}

export type Perfil = {
  nome: string
  titulo: string
  local: string
  /** ISO `YYYY-MM-DD`. A idade é sempre calculada a partir daqui, nunca guardada pronta. */
  nascimento: string
  email: string
  links: LinksExternos
  /** Caminho estático do PDF em `/public`. */
  curriculoPdf: string
}

export type Experiencia = {
  cargo: string
  empresa: string
  local: string
  /** `YYYY-MM` */
  inicio: string
  /** `YYYY-MM`, ou `null` se for o cargo atual. */
  fim: string | null
  atividades: string[]
}

export type Formacao = {
  curso: string
  instituicao: string
  /** Rótulo livre: `"2023"`, `"Previsão Dez/2026"`. */
  conclusao: string
}

export type Projeto = {
  slug: string
  /** 1 linha, aparece na lista. */
  titulo: string
  resumo: string
  /** Parágrafo, aparece no detalhe/expandido. */
  descricao: string
  stack: string[]
  repoUrl?: string
  demoUrl?: string
  /** Caminho em `/src/assets` ou `/public`. */
  imagem?: string
  /** `true` = aparece na seção Destaques. */
  destaque: boolean
  /** Ordenação dentro da própria lista. */
  ordem: number
}
