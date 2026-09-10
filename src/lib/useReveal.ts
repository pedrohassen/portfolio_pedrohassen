import { useEffect, useRef, useState } from 'react'

function jaRevelaDireto() {
  return (
    !('IntersectionObserver' in window) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Revela o elemento quando ele entra na viewport (uma vez só).
 * Com `prefers-reduced-motion`, ou sem `IntersectionObserver`, já começa revelado.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [revelado, setRevelado] = useState(jaRevelaDireto)

  useEffect(() => {
    if (revelado) return
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entradas) => {
        if (entradas[0].isIntersecting) {
          setRevelado(true)
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [revelado])

  return { ref, revelado }
}
