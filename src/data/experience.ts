import type { ExperienciaBase, FormacaoBase } from '../types'

/** Ordem: mais recente primeiro. Cargo, empresa, local e atividades vivem em `src/content/`. */
export const experienciaBase: ExperienciaBase[] = [
  { id: 'senatec-diretor', inicio: '2025-01', fim: '2026-03' },
  { id: 'dti', inicio: '2024-11', fim: '2025-10' },
  { id: 'coffee', inicio: '2023-12', fim: '2025-03' },
  { id: 'senatec-coordenador', inicio: '2024-06', fim: '2024-12' },
]

/** Ordem: mais recente primeiro. Curso, instituição e conclusão vivem em `src/content/`. */
export const formacaoBase: FormacaoBase[] = [
  { id: 'ads' },
  { id: 'trybe' },
  { id: 'pos-gestao' },
  { id: 'administracao' },
]
