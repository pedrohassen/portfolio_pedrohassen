import { IDIOMAS } from '../content'
import { useIdioma } from '../lib/IdiomaContext'

/** Seletor "PT / EN" no header. Texto, não bandeira: bandeira é país, não idioma. */
export function IdiomaToggle() {
  const { idioma, definirIdioma, conteudo } = useIdioma()

  return (
    <div
      role="group"
      aria-label={conteudo.nav.idioma}
      className="flex items-center gap-1.5 font-sans text-sm"
    >
      {IDIOMAS.map((item, i) => {
        const ativo = item.codigo === idioma
        return (
          <span key={item.codigo} className="flex items-center gap-1.5">
            {i > 0 ? (
              <span aria-hidden="true" className="text-line">
                /
              </span>
            ) : null}
            <button
              type="button"
              lang={item.codigo}
              aria-label={item.nome}
              aria-pressed={ativo}
              onClick={() => definirIdioma(item.codigo)}
              className={`transition-colors hover:text-ink ${
                ativo ? 'text-ink' : 'text-muted'
              }`}
            >
              {item.rotulo}
            </button>
          </span>
        )
      })}
    </div>
  )
}
