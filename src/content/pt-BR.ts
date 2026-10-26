import { perfil } from '../data/profile'
import type {
  CategoriaHabilidadeTexto,
  ExperienciaTexto,
  FormacaoTexto,
  ProjetoTexto,
} from '../types'

const titulo = 'Desenvolvedor de Software'

/**
 * Todo o texto visível da interface. Nada de string solta no JSX.
 * Para traduzir depois: criar `en.ts` com o mesmo formato + um seletor
 * (ver TAREFAS.md, backlog). Os marcadores numéricos das seções (`01 — …`)
 * também vivem aqui.
 */
export const conteudo = {
  meta: {
    titulo: `${perfil.nome} — ${titulo}`,
    descricao:
      'Portfólio de Pedro Hasse Niemczewski — desenvolvedor de software fullstack (TypeScript, React, C#/.NET). Projetos, experiência e currículo.',
  },

  nav: {
    sobre: 'Sobre',
    habilidades: 'Habilidades',
    projetos: 'Projetos',
    experiencia: 'Experiência',
    curriculo: 'Currículo',
    contato: 'Contato',
  },

  hero: {
    marcador: '01 — Sobre',
    /** A idade é montada no componente: `calculateAge(perfil.nascimento)` + esta unidade. */
    titulo,
    local: 'Pelotas — RS',
    idadeUnidade: 'anos',
    disponivel: 'Aberto a oportunidades',
    /** Cada item é um parágrafo. */
    bio: [
      'Sou desenvolvedor de software com visão estratégica e background em Gestão de Negócios.',
      'Trabalho fullstack de ponta a ponta com JavaScript, TypeScript e React, com vivência corporativa em C#/.NET e integrações de sistemas envolvendo IA e Python.',
      'Na Senatec Jr., empresa júnior de tecnologia, coordenei projetos e o time de desenvolvimento, com reuniões diretas com clientes para entender as dores do negócio e transformá-las em produto. Também cofundei o Coffe‑e, um projeto nascido de um Startup Weekend.',
    ],
  },

  habilidades: {
    marcador: '02 — Habilidades',
    titulo: 'Habilidades',
    /** Textos por `id` (os itens de cada categoria estão em `src/data/habilidades.ts`). */
    categorias: {
      linguagens: { categoria: 'Linguagens' },
      frameworks: { categoria: 'Frameworks & bibliotecas' },
      dados: { categoria: 'Dados & ferramentas' },
    } satisfies Record<string, CategoriaHabilidadeTexto>,
  },

  projetos: {
    marcador: '03 — Projetos',
    titulo: 'Projetos',
    vazio: 'Em breve.',
    destaque: 'Destaque',
    /** Composto com a plataforma detectada pela URL: "Ver no" + "GitHub"/"GitLab". */
    verNoRepo: 'Ver no',
    verApiNoRepo: 'Ver API no',
    verDemo: 'Ver demo',
    verMais: 'Ver mais projetos',
    verMenos: 'Ver menos',
    /** Composto com o título do projeto: "Ampliar imagem: <título>". */
    ampliarImagem: 'Ampliar imagem',
    fecharImagem: 'Fechar',
    /** Textos por `slug` (a metade fixa de cada projeto está em `src/data/projects.ts`). */
    itens: {
      'lupa-legis': {
        titulo: 'Lupa Legis — Tradutor de Leis',
        resumo:
          'Resume projetos de lei da Câmara dos Deputados em linguagem acessível, usando LLMs.',
        descricao:
          'Prova de conceito acadêmica que busca proposições na API de Dados Abertos da Câmara e gera, via LLM (OpenRouter), um resumo estruturado: explicação, objetivos, quem é afetado, efeitos práticos, termos técnicos e limitações. Backend em Node.js/Express com cache em memória, timeout e retry em rate limit; frontend em HTML/CSS/JS puro com busca e filtros por tipo, ano e tema.',
        imagemAlt:
          'Resumo gerado por IA de um projeto de lei no Lupa Legis: explicação, objetivo, quem é impactado, efeito prático, termos técnicos e limitações.',
      },
      learningloop: {
        titulo: 'LearningLoop — Gerenciamento de Alunos',
        resumo:
          'Front-end de um sistema de gestão de alunos com autenticação JWT e acesso por perfil.',
        descricao:
          'SPA em Vue 3 + TypeScript (Composition API) e Vuetify que consome uma API ASP.NET Core. Login e registro com JWT, rotas protegidas por perfil (USER/ADMIN), gestão do perfil do usuário e CRUD de alunos com filtro e paginação na área de admin. Validação com Zod e testes com Vitest. Deploy na Vercel, com API no Render e banco no Supabase.',
        imagemAlt:
          'Área admin do LearningLoop: tabela de alunos com busca por nome e curso, e ações de editar/excluir.',
      },
      'no-azul': {
        titulo: 'No Azul — Controle Financeiro Pessoal',
        resumo:
          'Controle pessoal de receitas e despesas — PWA offline-first, sem backend, dados só no dispositivo.',
        descricao:
          'Projeto conceito construído pra uso pessoal real: sem backend, todos os dados ficam no localStorage do dispositivo, com exportar/importar (mesclar ou substituir) pra backup manual entre aparelhos. PWA instalável, 100% funcional offline via service worker. Dark mode reativo à preferência do sistema, acessível (contraste AA, alvos de toque, navegação por teclado).',
        imagemAlt:
          'Tela de resumo do No Azul no celular: saldo do mês, receitas e despesas, e despesas por categoria.',
      },
      'catalogo-b2b': {
        titulo: 'Catálogo B2B — Site Institucional',
        resumo:
          'Site institucional B2B com catálogo filtrável e calculadora de orçamento interativa — SPA estática, sem backend.',
        descricao:
          'Projeto conceito de portfólio: catálogo de produtos fictício com filtro por categoria e busca por nome, calculadora de orçamento (adicionar produtos, ajustar quantidade, total em tempo real) e localização com mapa embutido — tudo client-side, sem servidor. Empresa e produtos são fictícios, propositalmente genéricos (não fixados em nenhum ramo). Dark mode, acessibilidade (contraste AA, navegação por teclado, alvo de toque 44px) e responsivo desde o primeiro commit.',
        imagemAlt:
          'Fim do catálogo de produtos e a calculadora de orçamento do Catálogo B2B, com itens adicionados e o total calculado.',
      },
      amigo: {
        titulo: 'AmiGo! — Marketplace de Petshop',
        resumo:
          'Marketplace que conecta tutores de pets a petshops parceiros — produtos, serviços e pedidos.',
        descricao:
          'Projeto em grupo da formação em Análise e Desenvolvimento de Sistemas (UniSENAC). Dois portais: cliente (cadastro de pets, busca por categoria, carrinho e pedidos) e petshop parceiro (dashboard, cadastro de produtos e serviços como banho, adestramento e consultas). Front-end em React + TypeScript + Vite + Tailwind CSS; API em Express + Prisma/PostgreSQL com autenticação JWT.',
        imagemAlt:
          'Dashboard do portal petshop parceiro do AmiGo!, com pedidos em andamento, em entrega, concluídos e cancelados, e totais do mês.',
      },
      'classificador-dino-cnn': {
        titulo: 'Classificador Dino — Reconhecimento de Dinossauros com CNN',
        resumo:
          'Identifica a espécie de um dinossauro em uma imagem, com API própria em Python e modelo treinado via transfer learning.',
        descricao:
          'Evoluído de uma atividade de curso (CNN + PyTorch) para uma arquitetura própria: backend em FastAPI (substituindo a implementação original em Node.js, que só chamava um script Python por fora) servindo um modelo de transfer learning (MobileNetV2) treinado com data augmentation e randomização de fundo pra reduzir o viés do dataset. 100% de acurácia no conjunto de teste (dataset é ilustração/render/arte gerada por IA, não foto real). Frontend em HTML/CSS/JS puro, sem framework. Deploy via Docker no Render.',
        imagemAlt:
          'Antes e depois: imagem de um T-Rex enviada para classificação, e o resultado — Tyrannosaurus com 87% de confiança e o top 3 de previsões.',
      },
      'delivery-app': {
        titulo: 'iBirit@ — App de Delivery de Bebidas',
        resumo:
          'App de delivery de bebidas com carrinho, pedidos e perfis de cliente, vendedor e administrador.',
        descricao:
          'Projeto em grupo da formação em Desenvolvimento Web (Trybe). Back-end em Express + Sequelize/MySQL com autenticação JWT e Socket.io pra status de pedido em tempo real; front-end em React com Material UI. Três perfis de acesso (cliente, vendedor, administrador), cada um com seu fluxo próprio.',
        imagemAlt:
          'Pedido do cliente no iBirit@: status "Pendente", item comprado (Heineken 600ml) e valor total.',
      },
      'sajic-2024': {
        titulo: 'SAJIC 2024',
        resumo:
          'Site da Semana Acadêmica do UniSenac 2024 — programação, palestrantes e inscrições.',
        descricao:
          'Site do evento acadêmico do UniSenac, com seções de visão geral, programação, palestrantes e inscrição via Sympla. React + Vite + Tailwind CSS, roteamento com React Router e carrossel com Embla. Publicado na Vercel.',
        imagemAlt:
          'Carrossel de palestrantes de tecnologia confirmados no site do SAJIC 2024.',
      },
    } satisfies Record<string, ProjetoTexto>,
  },

  experiencia: {
    marcador: '04 — Experiência',
    titulo: 'Experiência',
    formacaoTitulo: 'Formação',
    /** Textos por `id` (as datas estão em `src/data/experience.ts`). */
    itens: {
      'senatec-diretor': {
        cargo: 'Diretor de Tecnologia',
        empresa: 'Senatec Junior (empresa júnior)',
        local: 'Pelotas, RS',
        atividades: [
          'Liderança do time de desenvolvimento e responsabilidade pelas entregas aos clientes.',
          'Atuação como Product Owner: reuniões com clientes para entender as dores do negócio, levantamento de requisitos e priorização do backlog.',
        ],
      },
      dti: {
        cargo: 'Desenvolvedor Fullstack (estágio)',
        empresa: 'DTI Sistemas (dti digital)',
        local: 'Belo Horizonte, MG (remoto)',
        atividades: [
          'Atuação no ciclo de desenvolvimento de software de ponta a ponta: detalhamento de requisitos, modelagem de processos e de software.',
          'Construção e manutenção de sistemas corporativos escaláveis com o ecossistema C# e .NET Core.',
        ],
      },
      'senatec-coordenador': {
        cargo: 'Desenvolvedor e Coordenador de Projetos',
        empresa: 'Senatec Junior (empresa júnior)',
        local: 'Pelotas, RS',
        atividades: [
          'Desenvolvimento fullstack (JavaScript/TypeScript) e modelagem de banco de dados.',
          'Coordenação de projetos: prazos, distribuição de tarefas no time e acompanhamento das entregas.',
        ],
      },
      coffee: {
        cargo: 'Cofundador e Desenvolvedor',
        empresa: 'Coffe‑e',
        local: 'Pelotas, RS',
        atividades: [
          'Projeto nascido de um Startup Weekend, tocado junto de outros desenvolvedores.',
          'Estruturação técnica e desenvolvimento da plataforma, da modelagem à validação de funcionalidades com usuários.',
        ],
      },
    } satisfies Record<string, ExperienciaTexto>,
    /** Textos por `id` (a ordem está em `src/data/experience.ts`). */
    formacao: {
      ads: {
        curso: 'Análise e Desenvolvimento de Sistemas',
        instituicao: 'UniSENAC — Pelotas, RS',
        conclusao: 'Previsão Dez/2026',
      },
      trybe: {
        curso: 'Tecnólogo em Fullstack Web Developer',
        instituicao: 'Trybe',
        conclusao: '2023',
      },
      'pos-gestao': {
        curso: 'Pós-graduação em Gestão de Negócios',
        instituicao: 'UniSENAC — Pelotas, RS',
        conclusao: '2015',
      },
      administracao: {
        curso: 'Graduação em Administração de Empresas',
        instituicao: 'Anhanguera — Pelotas',
        conclusao: '2013',
      },
    } satisfies Record<string, FormacaoTexto>,
  },

  curriculo: {
    marcador: '05 — Currículo',
    titulo: 'Currículo',
    texto: 'Versão completa e atualizada em PDF.',
    ver: 'Ver PDF',
    baixar: 'Baixar PDF',
  },

  contato: {
    marcador: '06 — Contato',
    titulo: 'Contato',
    texto: 'Aberto a oportunidades. Melhor forma de falar comigo:',
    email: 'E-mail',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },

  footer: {
    /** O ano é montado no componente: `new Date().getFullYear()`. */
    direitos: perfil.nome,
    codigo: 'Código no GitHub',
  },
} as const
