import { perfil } from '../data/profile'

/**
 * Todo o texto visível da interface. Nada de string solta no JSX.
 * Para traduzir depois: criar `en.ts` com o mesmo formato + um seletor
 * (ver TAREFAS.md, backlog). Os marcadores numéricos das seções (`01 — …`)
 * também vivem aqui.
 */
export const conteudo = {
  meta: {
    titulo: `${perfil.nome} — ${perfil.titulo}`,
    descricao:
      'Portfólio de Pedro Hasse Niemczewski — desenvolvedor de software fullstack (TypeScript, React, C#/.NET). Projetos, experiência e currículo.',
  },

  nav: {
    sobre: 'Sobre',
    projetos: 'Projetos',
    experiencia: 'Experiência',
    curriculo: 'Currículo',
    contato: 'Contato',
  },

  hero: {
    marcador: '01 — Sobre',
    /** A idade é montada no componente: `calculateAge(perfil.nascimento)` + esta unidade. */
    idadeUnidade: 'anos',
    /** Cada item é um parágrafo. */
    bio: [
      'Sou desenvolvedor de software com visão estratégica e background em Gestão de Negócios.',
      'Trabalho fullstack de ponta a ponta com JavaScript, TypeScript e React, com vivência corporativa em C#/.NET e integrações de sistemas envolvendo IA e Python.',
      'Na Senatec Jr., empresa júnior de tecnologia, coordenei projetos e o time de desenvolvimento, com reuniões diretas com clientes para entender as dores do negócio e transformá-las em produto. Também cofundei o Coffe‑e, um projeto nascido de um Startup Weekend.',
    ],
  },

  projetos: {
    marcador: '02 — Projetos',
    titulo: 'Projetos',
    vazio: 'Em breve.',
    destaque: 'Destaque',
    verNoGithub: 'Ver no GitHub',
    verApiNoGithub: 'Ver API no GitHub',
    verDemo: 'Ver demo',
    verMais: 'Ver mais projetos',
    verMenos: 'Ver menos',
  },

  experiencia: {
    marcador: '03 — Experiência',
    titulo: 'Experiência',
    formacaoTitulo: 'Formação',
  },

  curriculo: {
    marcador: '04 — Currículo',
    titulo: 'Currículo',
    texto: 'Versão completa e atualizada em PDF.',
    ver: 'Ver PDF',
    baixar: 'Baixar PDF',
  },

  contato: {
    marcador: '05 — Contato',
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
