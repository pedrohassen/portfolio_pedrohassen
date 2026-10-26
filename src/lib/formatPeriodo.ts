import type { Conteudo } from '../content/pt-BR'

type Periodo = Conteudo['periodo']

/** `"2025-01"` → `"jan/2025"` (pt-BR) ou `"Jan 2025"` (en). */
function rotuloMesAno(mesAno: string, { meses, mesAnoSeparador }: Periodo) {
  const [ano, mes] = mesAno.split('-')
  return `${meses[Number(mes) - 1]}${mesAnoSeparador}${ano}`
}

/**
 * `"2025-01", "2026-03"` → `"jan/2025 – mar/2026"`.
 * `fim` nulo (cargo atual) → `"jan/2025 – atual"`.
 */
export function formatPeriodo(
  inicio: string,
  fim: string | null,
  periodo: Periodo,
): string {
  const fimRotulo = fim ? rotuloMesAno(fim, periodo) : periodo.atual
  return `${rotuloMesAno(inicio, periodo)} – ${fimRotulo}`
}
