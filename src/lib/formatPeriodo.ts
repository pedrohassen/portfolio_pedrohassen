const MESES = [
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
]

/** `"2025-01"` → `"jan/2025"` */
function rotuloMesAno(mesAno: string): string {
  const [ano, mes] = mesAno.split('-')
  return `${MESES[Number(mes) - 1]}/${ano}`
}

/**
 * `"2025-01", "2026-04"` → `"jan/2025 – abr/2026"`.
 * `fim` nulo (cargo atual) → `"jan/2025 – atual"`.
 */
export function formatPeriodo(inicio: string, fim: string | null): string {
  return `${rotuloMesAno(inicio)} – ${fim ? rotuloMesAno(fim) : 'atual'}`
}
