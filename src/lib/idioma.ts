import { IDIOMA_PADRAO, IDIOMAS, type Idioma } from '../content'

const CHAVE = 'idioma'

function ehIdioma(valor: string | null): valor is Idioma {
  return IDIOMAS.some((i) => i.codigo === valor)
}

/** Idioma salvo pelo visitante, ou o padrão (português). */
export function idiomaInicial(): Idioma {
  try {
    const salvo = localStorage.getItem(CHAVE)
    if (ehIdioma(salvo)) return salvo
  } catch {
    // localStorage indisponível (modo privado etc.) — segue no padrão.
  }
  return IDIOMA_PADRAO
}

/** Persiste a escolha explícita do visitante. */
export function salvarIdioma(idioma: Idioma): void {
  try {
    localStorage.setItem(CHAVE, idioma)
  } catch {
    // sem persistência — a escolha vale só nesta sessão.
  }
}

/** Reflete o idioma no documento: `<html lang>`, título e meta description. */
export function aplicarIdioma(
  idioma: Idioma,
  meta: { titulo: string; descricao: string },
): void {
  document.documentElement.lang = idioma
  document.title = meta.titulo
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', meta.descricao)
}
