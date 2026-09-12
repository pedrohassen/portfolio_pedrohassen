import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

type LightboxProps = {
  src: string
  alt: string
  fecharLabel: string
  onClose: () => void
}

/** Overlay em tela cheia pra ver uma imagem ampliada. Fecha com Esc ou clique fora. */
export function Lightbox({ src, alt, fecharLabel, onClose }: LightboxProps) {
  const fecharRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const anterior = document.activeElement as HTMLElement | null
    fecharRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    const overflowOriginal = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflowOriginal
      anterior?.focus()
    }
  }, [onClose])

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
    >
      <button
        ref={fecharRef}
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 font-sans text-sm text-white/80 transition-colors hover:text-white sm:top-6 sm:right-6"
      >
        {fecharLabel}
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-full max-w-full object-contain"
      />
    </div>,
    document.body,
  )
}
