import { RefObject, useEffect } from "react"

export const usePreventOutside = (refs: RefObject<HTMLElement>) => {
    useEffect(() => {
        const isOutsideClick = (e: Event) => {
            if (refs.current && !refs.current.contains(e.target as Node)) {
                e.stopPropagation() // 클릭 방지
                e.preventDefault() // 포커싱 방지
            }
        }

        !!window && window.addEventListener("click", isOutsideClick, true)
        !!window && window.addEventListener("mousedown", isOutsideClick, true)
        !!window && window.addEventListener("keydown", isOutsideClick, true)
        !!window && window.addEventListener("wheel", isOutsideClick, { passive: false }) // 스크롤 기본 동작 차단

        return () => {
            if (!window) return
            window.removeEventListener("click", isOutsideClick, true)
            window.removeEventListener("mousedown", isOutsideClick, true)
            window.removeEventListener("keydown", isOutsideClick, true)
            window.removeEventListener("wheel", isOutsideClick, true)
        }
    }, [])
}
