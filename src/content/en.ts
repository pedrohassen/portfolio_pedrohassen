import { perfil } from '../data/profile'
import type { Conteudo } from './pt-BR'

const titulo = 'Software Developer'

/** Versão em inglês. Mesmo formato de `pt-BR.ts` (o tipo `Conteudo` garante). */
export const conteudoEn: Conteudo = {
  meta: {
    titulo: `${perfil.nome} — ${titulo}`,
    descricao:
      'Portfolio of Pedro Hasse Niemczewski — fullstack software developer (TypeScript, React, C#/.NET). Projects, experience and resume.',
  },

  nav: {
    sobre: 'About',
    habilidades: 'Skills',
    projetos: 'Projects',
    experiencia: 'Experience',
    curriculo: 'Resume',
    contato: 'Contact',
    menu: 'Menu',
    fechar: 'Close',
    pularParaConteudo: 'Skip to content',
    idioma: 'Language',
  },

  tema: {
    ativarClaro: 'Switch to light theme',
    ativarEscuro: 'Switch to dark theme',
    claro: 'Light',
    escuro: 'Dark',
  },

  periodo: {
    meses: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    mesAnoSeparador: ' ',
    atual: 'present',
  },

  hero: {
    marcador: '01 — About',
    titulo,
    local: 'Pelotas, RS, Brazil',
    idadeUnidade: 'years old',
    disponivel: 'Open to opportunities',
    bio: [
      'I am a software developer with a strategic outlook and a background in Business Management.',
      'I work fullstack, end to end, with JavaScript, TypeScript and React, with corporate experience in C#/.NET and systems integrations involving AI and Python.',
      'At Senatec Jr., a student-run technology consultancy (a Brazilian "junior enterprise"), I coordinated projects and the development team, meeting directly with clients to understand business pain points and turn them into product. I also co-founded Coffe‑e, a project born at a Startup Weekend.',
    ],
  },

  habilidades: {
    marcador: '02 — Skills',
    titulo: 'Skills',
    categorias: {
      linguagens: { categoria: 'Languages' },
      frameworks: { categoria: 'Frameworks & libraries' },
      dados: { categoria: 'Data & tools' },
    },
  },

  projetos: {
    marcador: '03 — Projects',
    titulo: 'Projects',
    vazio: 'Coming soon.',
    destaque: 'Featured',
    verNoRepo: 'View on',
    verApiNoRepo: 'View API on',
    verDemo: 'View demo',
    verMais: 'Show more projects',
    verMenos: 'Show less',
    ampliarImagem: 'Enlarge image',
    fecharImagem: 'Close',
    itens: {
      'lupa-legis': {
        titulo: 'Lupa Legis — Law Translator',
        resumo:
          "Summarizes bills from Brazil's Chamber of Deputies in plain language, using LLMs.",
        descricao:
          'Academic proof of concept that searches bills in the Chamber of Deputies Open Data API and generates, via an LLM (OpenRouter), a structured summary: explanation, goals, who is affected, practical effects, technical terms and limitations. Backend in Node.js/Express with in-memory cache, timeout and retry on rate limits; plain HTML/CSS/JS frontend with search and filters by type, year and topic.',
        imagemAlt:
          'AI-generated summary of a bill in Lupa Legis: explanation, goal, who is impacted, practical effect, technical terms and limitations.',
      },
      learningloop: {
        titulo: 'LearningLoop — Student Management',
        resumo:
          'Front end of a student management system with JWT authentication and role-based access.',
        descricao:
          'SPA built with Vue 3 + TypeScript (Composition API) and Vuetify that consumes an ASP.NET Core API. JWT login and registration, routes protected by role (USER/ADMIN), user profile management and student CRUD with filtering and pagination in the admin area. Validation with Zod and tests with Vitest. Deployed on Vercel, with the API on Render and the database on Supabase.',
        imagemAlt:
          'LearningLoop admin area: students table with search by name and course, and edit/delete actions.',
      },
      'no-azul': {
        titulo: 'No Azul — Personal Finance Tracker',
        resumo:
          'Personal income and expense tracking — offline-first PWA, no backend, data stays on the device.',
        descricao:
          "Concept project built for real personal use: no backend, all data lives in the device's localStorage, with export/import (merge or replace) for manual backup between devices. Installable PWA, fully functional offline via service worker. Dark mode follows the system preference; accessible (AA contrast, touch targets, keyboard navigation).",
        imagemAlt:
          'No Azul summary screen on mobile: monthly balance, income and expenses, and expenses by category.',
      },
      'catalogo-b2b': {
        titulo: 'B2B Catalog — Corporate Website',
        resumo:
          'B2B corporate website with a filterable catalog and an interactive quote calculator — static SPA, no backend.',
        descricao:
          'Portfolio concept project: a fictional product catalog with category filter and search by name, a quote calculator (add products, adjust quantity, real-time total) and an embedded map location — all client-side, no server. Company and products are fictional and deliberately generic (not tied to any industry). Dark mode, accessibility (AA contrast, keyboard navigation, 44px touch targets) and responsive from the first commit.',
        imagemAlt:
          'End of the product catalog and the quote calculator in B2B Catalog, with items added and the total calculated.',
      },
      amigo: {
        titulo: 'AmiGo! — Pet Shop Marketplace',
        resumo:
          'Marketplace connecting pet owners to partner pet shops — products, services and orders.',
        descricao:
          'Group project from the Systems Analysis and Development program (UniSENAC). Two portals: customer (pet registration, category search, cart and orders) and partner pet shop (dashboard, registration of products and services such as grooming, training and vet visits). Front end in React + TypeScript + Vite + Tailwind CSS; API in Express + Prisma/PostgreSQL with JWT authentication.',
        imagemAlt:
          'Partner pet shop portal dashboard in AmiGo!, with orders in progress, out for delivery, completed and cancelled, and monthly totals.',
      },
      'classificador-dino-cnn': {
        titulo: 'Dino Classifier — Dinosaur Recognition with a CNN',
        resumo:
          "Identifies a dinosaur's species from an image, with a custom Python API and a model trained via transfer learning.",
        descricao:
          'Evolved from a course assignment (CNN + PyTorch) into its own architecture: a FastAPI backend (replacing the original Node.js implementation, which only called a Python script externally) serving a transfer learning model (MobileNetV2) trained with data augmentation and background randomization to reduce dataset bias. 100% accuracy on the test set (the dataset is illustrations/renders/AI-generated art, not real photos). Plain HTML/CSS/JS frontend, no framework. Deployed via Docker on Render.',
        imagemAlt:
          'Before and after: a T-Rex image uploaded for classification, and the result — Tyrannosaurus with 87% confidence and the top 3 predictions.',
      },
      'delivery-app': {
        titulo: 'iBirit@ — Beverage Delivery App',
        resumo:
          'Beverage delivery app with cart, orders, and customer, seller and administrator roles.',
        descricao:
          'Group project from the Web Development program (Trybe). Back end in Express + Sequelize/MySQL with JWT authentication and Socket.io for real-time order status; front end in React with Material UI. Three access roles (customer, seller, administrator), each with its own flow.',
        imagemAlt:
          'Customer order in iBirit@: status "Pending", purchased item (Heineken 600ml) and total amount.',
      },
      'sajic-2024': {
        titulo: 'SAJIC 2024',
        resumo:
          'Website for the UniSenac Academic Week 2024 — schedule, speakers and registration.',
        descricao:
          "Website for UniSenac's academic event, with overview, schedule, speakers and registration via Sympla. React + Vite + Tailwind CSS, routing with React Router and a carousel with Embla. Published on Vercel.",
        imagemAlt:
          'Carousel of confirmed technology speakers on the SAJIC 2024 website.',
      },
    },
  },

  experiencia: {
    marcador: '04 — Experience',
    titulo: 'Experience',
    formacaoTitulo: 'Education',
    itens: {
      'senatec-diretor': {
        cargo: 'Director of Technology',
        empresa: 'Senatec Junior (Junior Enterprise)',
        local: 'Pelotas, RS, Brazil',
        atividades: [
          'Led the development team and took responsibility for delivering client projects.',
          'Acted as Product Owner (PO): conducted client meetings to understand business pain points, gathered requirements, and prioritized the backlog.',
        ],
      },
      dti: {
        cargo: 'Full Stack Developer (Intern)',
        empresa: 'DTI Sistemas (dti digital)',
        local: 'Belo Horizonte, MG, Brazil (remote)',
        atividades: [
          'Worked across the end-to-end software development life cycle (requirements gathering, process modeling and software modeling) on a corporate debt collection and renegotiation system used by multiple educational institutions.',
          'Maintained and evolved the system with C# and .NET Core.',
        ],
      },
      'senatec-coordenador': {
        cargo: 'Developer & Project Coordinator',
        empresa: 'Senatec Junior (Junior Enterprise)',
        local: 'Pelotas, RS, Brazil',
        atividades: [
          'Full Stack development (JavaScript/TypeScript) and database modeling.',
          'Project coordination: managed deadlines, distributed tasks among the team, and tracked deliverables.',
        ],
      },
      coffee: {
        cargo: 'Co-Founder & Developer',
        empresa: 'Coffe‑e',
        local: 'Pelotas, RS, Brazil',
        atividades: [
          'A project born from a Startup Weekend, developed alongside other developers.',
          'Responsible for the technical structuring and platform development, from data modeling to validating features with users.',
        ],
      },
    },
    formacao: {
      ads: {
        curso: 'Systems Analysis and Development',
        instituicao: 'UniSENAC — Pelotas, RS, Brazil',
        conclusao: 'Expected Dec 2026',
      },
      trybe: {
        curso: 'Full Stack Web Developer Program',
        instituicao: 'Trybe',
        conclusao: '2023',
      },
      'pos-gestao': {
        curso:
          'Postgraduate Specialization (Lato Sensu) in Business Management',
        instituicao: 'UniSENAC — Pelotas, RS, Brazil',
        conclusao: '2015',
      },
      administracao: {
        curso: "Bachelor's Degree in Business Administration",
        instituicao: 'Anhanguera — Pelotas, RS, Brazil',
        conclusao: '2013',
      },
    },
  },

  curriculo: {
    marcador: '05 — Resume',
    titulo: 'Resume',
    texto: 'Full, up-to-date version as a PDF.',
    pdf: '/curriculo/Pedro-Hasse-Niemczewski-Resume.pdf',
    nomeDownload: 'Pedro Hasse Niemczewski - Resume.pdf',
    ver: 'View PDF',
    baixar: 'Download PDF',
  },

  contato: {
    marcador: '06 — Contact',
    titulo: 'Contact',
    texto: 'Open to opportunities. The best way to reach me:',
    email: 'E-mail',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },

  footer: {
    direitos: perfil.nome,
    codigo: 'Code on GitHub',
  },
}
