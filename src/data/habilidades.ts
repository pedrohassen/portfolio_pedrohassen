import type { CategoriaHabilidadeBase } from '../types'

/** Os nomes das categorias vivem em `src/content/`. */
export const habilidadesBase: CategoriaHabilidadeBase[] = [
  {
    id: 'linguagens',
    itens: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C#', 'Python'],
  },
  {
    id: 'frameworks',
    itens: ['Node.js', 'React', '.NET Core', 'Vuetify'],
  },
  {
    id: 'dados',
    itens: ['GenAI (LLMs)', 'MySQL', 'MongoDB', 'Git'],
  },
]
