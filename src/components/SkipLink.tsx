/** Link de acessibilidade: pular direto pro conteúdo (visível só com foco). */
export function SkipLink() {
  return (
    <a
      href="#conteudo"
      className="sr-only font-sans text-sm focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-20 focus:border focus:border-line focus:bg-paper focus:px-3 focus:py-2"
    >
      Pular para o conteúdo
    </a>
  )
}
