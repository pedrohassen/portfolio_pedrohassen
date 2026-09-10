import { Analytics } from '@vercel/analytics/react'

/**
 * Shell mínimo. As seções (Hero/Sobre, Destaques, Projetos, Experiência,
 * Currículo, Contato, Footer) entram na Fase 2 — ver TAREFAS.md.
 */
export default function App() {
  return (
    <>
      <main className="grid min-h-dvh place-items-center px-6">
        <p className="font-display text-2xl text-muted">
          Portfólio em construção.
        </p>
      </main>
      <Analytics />
    </>
  )
}
