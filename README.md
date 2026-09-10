# portfolio_pedrohassen

Página pessoal / portfólio de **Pedro Hasse Niemczewski** — desenvolvedor de software.
SPA estática, sem backend, publicada na Vercel.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (config CSS-first em `src/styles/theme.css`)
- Fontes self-hosted via `@fontsource-variable/*` (Fraunces + Inter Tight)
- [Vercel Web Analytics](https://vercel.com/docs/analytics)

## Desenvolvimento

```bash
npm install
npm run dev        # servidor local
npm run build      # build de produção -> dist/
npm run preview    # serve o build
npm run lint       # oxlint
npm run format     # prettier --write .
```

## Deploy

Deploy automático na Vercel: push na `main` publica produção; cada Pull Request gera uma
URL de preview. Preset **Vite**, build `npm run build`, output `dist/`.

## Licença

O **código** deste repositório está licenciado sob a [MIT License](LICENSE).

O **conteúdo pessoal** — textos em `src/content/`, o currículo e as imagens em `public/`,
e as descrições dos projetos em `src/data/` — é © Pedro Hasse Niemczewski, **todos os
direitos reservados**, e não está coberto pela licença MIT.
