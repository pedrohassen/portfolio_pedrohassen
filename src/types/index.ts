/** Tipos compartilhados. Consumidos por `src/data/*` e pelas seções. */

export type LinksExternos = {
  github: string
  linkedin: string
  /** Repositório deste portfólio. */
  repositorio: string
}

export type Perfil = {
  nome: string
  /** ISO `YYYY-MM-DD`. A idade é sempre calculada a partir daqui, nunca guardada pronta. */
  nascimento: string
  email: string
  links: LinksExternos
}

/*
 * Os itens de conteúdo (experiência, formação, habilidades, projetos) são
 * divididos em duas metades:
 *  - `*Base`: dado que não muda com o idioma (datas, URLs, stack, ordem) — vive
 *    em `src/data/*`;
 *  - `*Texto`: o que é lido pelo visitante — vive em `src/content/<idioma>.ts`,
 *    indexado pelo `id`/`slug` do item.
 * O tipo final (`Experiencia`, `Projeto`...) é a junção das duas, montada por
 * `juntarTextos` (`src/lib/juntarTextos.ts`).
 */

export type ExperienciaBase = {
  id: string
  /** `YYYY-MM` */
  inicio: string
  /** `YYYY-MM`, ou `null` se for o cargo atual. */
  fim: string | null
}

export type ExperienciaTexto = {
  cargo: string
  empresa: string
  local: string
  atividades: readonly string[]
}

export type Experiencia = ExperienciaBase & ExperienciaTexto

export type FormacaoBase = {
  id: string
}

export type FormacaoTexto = {
  curso: string
  instituicao: string
  /** Rótulo livre: `"2023"`, `"Previsão Dez/2026"`. */
  conclusao: string
}

export type Formacao = FormacaoBase & FormacaoTexto

export type CategoriaHabilidadeBase = {
  id: string
  itens: readonly string[]
}

export type CategoriaHabilidadeTexto = {
  categoria: string
}

export type CategoriaHabilidade = CategoriaHabilidadeBase &
  CategoriaHabilidadeTexto

export type ProjetoBase = {
  slug: string
  stack: readonly string[]
  repoUrl?: string
  /** Repo separado do backend, quando existir (ex.: front/API em repos distintos). */
  repoApiUrl?: string
  demoUrl?: string
  /** Caminho em `/src/assets` ou `/public`. */
  imagem?: string
  /** `true` = aparece na seção Destaques. */
  destaque: boolean
  /** Ordenação dentro da própria lista. */
  ordem: number
}

export type ProjetoTexto = {
  /** 1 linha, aparece na lista. */
  titulo: string
  resumo: string
  /** Parágrafo, aparece no detalhe/expandido. */
  descricao: string
  /** Texto alternativo da imagem — obrigatório quando `imagem` existe. */
  imagemAlt?: string
}

export type Projeto = ProjetoBase & ProjetoTexto
