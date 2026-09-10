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
    destaques: 'Destaques',
    projetos: 'Projetos',
    experiencia: 'Experiência',
    curriculo: 'Currículo',
    contato: 'Contato',
  },

  hero: {
    marcador: '01 — Sobre',
    /** A idade é montada no componente: `calculateAge(perfil.nascimento)` + esta unidade. */
    idadeUnidade: 'anos',
    /** Rascunho derivado do currículo — Pedro revisa. Cada item é um parágrafo. */
    bio: [
      'Sou desenvolvedor de software com visão estratégica e background em Gestão de Negócios.',
      'Trabalho fullstack de ponta a ponta com JavaScript, TypeScript e React, com vivência corporativa em C#/.NET e integrações de sistemas envolvendo IA e Python.',
      'Já liderei tecnologia como Diretor na Senatec Jr. e cofundei a startup Coffe-e.',
    ],
  },

  destaques: {
    marcador: '02 — Destaques',
    titulo: 'Projetos em destaque',
    vazio: 'Em breve.',
  },

  projetos: {
    marcador: '03 — Projetos',
    titulo: 'Projetos',
    vazio: 'Em breve.',
    verNoGithub: 'Ver no GitHub',
    verDemo: 'Ver demo',
  },

  experiencia: {
    marcador: '04 — Experiência',
    titulo: 'Experiência',
    formacaoTitulo: 'Formação',
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
