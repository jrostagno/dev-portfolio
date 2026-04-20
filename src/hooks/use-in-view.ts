import { useEffect, useRef, useState } from "react"

type Options = IntersectionObserverInit & { triggerOnce?: boolean }

export function useInView<T extends Element = HTMLElement>(options: Options = {}) {
  const { triggerOnce = true, threshold = 0.15, root = null, rootMargin = "0px" } = options
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (triggerOnce) observer.disconnect()
        } else if (!triggerOnce) {
          setInView(false)
        }
      },
      { threshold, root, rootMargin }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [triggerOnce, threshold, root, rootMargin])

  return [ref, inView] as const
}
