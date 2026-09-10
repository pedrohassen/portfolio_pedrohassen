type SectionMarkerProps = {
  /** Ex.: "01 — Sobre" (já formatado no conteúdo). */
  children: string
}

/** Rótulo numerado que abre cada seção, no lugar de ícones. */
export function SectionMarker({ children }: SectionMarkerProps) {
  return (
    <span className="font-sans text-xs tracking-[0.2em] text-muted uppercase">
      {children}
    </span>
  )
}
