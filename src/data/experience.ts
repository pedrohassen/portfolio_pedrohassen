import type { Experiencia, Formacao } from '../types'

/** Ordem: mais recente primeiro. */
export const experiencia: Experiencia[] = [
  {
    cargo: 'Diretor de Tecnologia (estágio)',
    empresa: 'Senatec Junior',
    local: 'Pelotas, RS',
    inicio: '2025-01',
    fim: '2026-04',
    atividades: [
      'Liderança técnica e gestão ágil do time de desenvolvimento, definindo diretrizes arquiteturais e impulsionando a adoção de novas tecnologias.',
      'Atuação direta como Product Owner junto aos clientes: reuniões de alinhamento, levantamento de requisitos e priorização de backlog.',
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
    cargo: 'Desenvolvedor e Coordenador de Projetos (estágio)',
    empresa: 'Senatec Junior',
    local: 'Pelotas, RS',
    inicio: '2024-06',
    fim: '2024-12',
    atividades: [
      'Coordenação do ciclo de vida dos projetos: prazos, alocação de tarefas e alinhamento com as necessidades dos clientes.',
      'Desenvolvimento Fullstack com JavaScript/TypeScript e gestão de bancos de dados.',
    ],
  },
  {
    cargo: 'Empreendedor e Desenvolvedor',
    empresa: 'Coffe-e',
    local: 'Pelotas, RS',
    inicio: '2024-01',
    fim: '2025-03',
    atividades: [
      'Idealização e estruturação tecnológica da startup do zero, unindo visão de negócio ao desenvolvimento da plataforma.',
      'Validação prática de funcionalidades e estruturação do modelo do produto de ponta a ponta.',
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
