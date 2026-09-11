import type { Projeto } from '../types'

export const projetos: Projeto[] = [
  {
    slug: 'lupa-legis',
    titulo: 'Lupa Legis — Tradutor de Leis',
    resumo:
      'Resume projetos de lei da Câmara dos Deputados em linguagem acessível, usando LLMs.',
    descricao:
      'Prova de conceito acadêmica que busca proposições na API de Dados Abertos da Câmara e gera, via LLM (OpenRouter), um resumo estruturado: explicação, objetivos, quem é afetado, efeitos práticos, termos técnicos e limitações. Backend em Node.js/Express com cache em memória, timeout e retry em rate limit; frontend em HTML/CSS/JS puro com busca e filtros por tipo, ano e tema.',
    stack: [
      'Node.js',
      'Express',
      'JavaScript',
      'LLM (OpenRouter)',
      'API Dados Abertos',
    ],
    repoUrl: 'https://github.com/pedrohassen/lupa_legis_tradutor_leis',
    destaque: true,
    ordem: 1,
  },
  {
    slug: 'learningloop',
    titulo: 'LearningLoop — Gerenciamento de Alunos',
    resumo:
      'Front-end de um sistema de gestão de alunos com autenticação JWT e acesso por perfil.',
    descricao:
      'SPA em Vue 3 + TypeScript (Composition API) e Vuetify que consome uma API ASP.NET Core. Login e registro com JWT, rotas protegidas por perfil (USER/ADMIN), gestão do perfil do usuário e CRUD de alunos com filtro e paginação na área de admin. Validação com Zod e testes com Vitest. Deploy na Vercel, com API no Render e banco no Supabase.',
    stack: ['Vue 3', 'TypeScript', 'Vuetify', 'Vite', 'Zod', 'Vitest'],
    repoUrl: 'https://github.com/pedrohassen/gerenciamento_alunos_front',
    demoUrl: 'https://gerenciamento-alunos-front.vercel.app',
    destaque: true,
    ordem: 2,
  },
  {
    slug: 'no-azul',
    titulo: 'No Azul — Controle Financeiro Pessoal',
    resumo:
      'Controle pessoal de receitas e despesas — PWA offline-first, sem backend, dados só no dispositivo.',
    descricao:
      'Projeto conceito construído pra uso pessoal real: sem backend, todos os dados ficam no localStorage do dispositivo, com exportar/importar (mesclar ou substituir) pra backup manual entre aparelhos. PWA instalável, 100% funcional offline via service worker. Dark mode reativo à preferência do sistema, acessível (contraste AA, alvos de toque, navegação por teclado).',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PWA'],
    repoUrl: 'https://github.com/pedrohassen/no-azul',
    demoUrl: 'https://no-azul-mu.vercel.app',
    destaque: true,
    ordem: 3,
  },
  {
    slug: 'sajic-2024',
    titulo: 'SAJIC 2024',
    resumo:
      'Site da Semana Acadêmica do UniSenac 2024 — programação, palestrantes e inscrições.',
    descricao:
      'Site do evento acadêmico do UniSenac, com seções de visão geral, programação, palestrantes e inscrição via Sympla. React + Vite + Tailwind CSS, roteamento com React Router e carrossel com Embla. Publicado na Vercel.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
    repoUrl: 'https://github.com/pedrohassen/SAJIC_2024',
    demoUrl: 'https://sajic-2024.vercel.app',
    destaque: false,
    ordem: 4,
  },
]
