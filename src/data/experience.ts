import type { Experiencia, Formacao } from '../types'

/** Ordem: mais recente primeiro. */
export const experiencia: Experiencia[] = [
  {
    cargo: 'Diretor de Tecnologia',
    empresa: 'Senatec Junior (empresa júnior)',
    local: 'Pelotas, RS',
    inicio: '2025-01',
    fim: '2026-04',
    atividades: [
      'Liderança do time de desenvolvimento e responsabilidade pelas entregas aos clientes.',
      'Atuação como Product Owner: reuniões com clientes para entender as dores do negócio, levantamento de requisitos e priorização do backlog.',
    ],
  },
  {
    cargo: 'Desenvolvedor Fullstack (estágio)',
    empresa: 'DTI Sistemas (dti digital)',
    local: 'Belo Horizonte, MG (remoto)',
    inicio: '2024-11',
    fim: '2025-10',
    atividades: [
      'Atuação no ciclo de desenvolvimento de software de ponta a ponta: detalhamento de requisitos, modelagem de processos e de software.',
      'Construção e manutenção de sistemas corporativos escaláveis com o ecossistema C# e .NET Core.',
    ],
  },
  {
    cargo: 'Desenvolvedor e Coordenador de Projetos',
    empresa: 'Senatec Junior (empresa júnior)',
    local: 'Pelotas, RS',
    inicio: '2024-06',
    fim: '2024-12',
    atividades: [
      'Desenvolvimento fullstack (JavaScript/TypeScript) e modelagem de banco de dados.',
      'Coordenação de projetos: prazos, distribuição de tarefas no time e acompanhamento das entregas.',
    ],
  },
  {
    cargo: 'Cofundador e Desenvolvedor',
    empresa: 'Coffe‑e',
    local: 'Pelotas, RS',
    inicio: '2024-01',
    fim: '2025-03',
    atividades: [
      'Projeto nascido de um Startup Weekend, tocado junto de outros desenvolvedores.',
      'Estruturação técnica e desenvolvimento da plataforma, da modelagem à validação de funcionalidades com usuários.',
    ],
  },
]

/** Ordem: mais recente primeiro. */
export const formacao: Formacao[] = [
  {
    curso: 'Análise e Desenvolvimento de Sistemas',
    instituicao: 'UniSENAC — Pelotas, RS',
    conclusao: 'Previsão Dez/2026',
  },
  {
    curso: 'Tecnólogo em Fullstack Web Developer',
    instituicao: 'Trybe',
    conclusao: '2023',
  },
  {
    curso: 'Pós-graduação em Gestão de Negócios',
    instituicao: 'UniSENAC — Pelotas, RS',
    conclusao: '2015',
  },
  {
    curso: 'Graduação em Administração de Empresas',
    instituicao: 'Anhanguera — Pelotas',
    conclusao: '2013',
  },
]
