import type { Projeto } from '../types'

/**
 * Placeholder. Pedro ainda vai escolher os projetos (em destaque e demais) e
 * fornecer repo + 1 print de cada — ver TAREFAS.md (backlog).
 * A seção de Projetos deve lidar com lista vazia sem quebrar.
 */
export const projetos: Projeto[] = [
  {
    slug: 'placeholder',
    titulo: 'Projeto de exemplo',
    resumo: 'Substituir pelos projetos reais.',
    descricao:
      'Item placeholder só para a seção de projetos ter forma enquanto os projetos definitivos não são escolhidos.',
    stack: ['TypeScript', 'React'],
    repoUrl: 'https://github.com/pedrohassen',
    destaque: false,
    ordem: 1,
  },
]
