/**
 * Junta a metade "dado" de uma lista (`src/data/*`) com a metade "texto" do
 * idioma (`src/content/*`), casando pela chave do item (`id`/`slug`).
 * Falta de texto para um item é erro de conteúdo — falha alto em vez de
 * renderizar um item vazio.
 */
export function juntarTextos<B, T>(
  base: readonly B[],
  textos: Readonly<Record<string, T>>,
  chave: (item: B) => string,
): (B & T)[] {
  return base.map((item) => {
    const texto = textos[chave(item)]
    if (!texto) {
      throw new Error(`Texto ausente para o item "${chave(item)}"`)
    }
    return { ...item, ...texto }
  })
}
