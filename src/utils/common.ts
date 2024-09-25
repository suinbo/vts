import { RefObject } from "react"

/** 랜덤 문자열 추출 */
export const generateRandomString = () => {
    const getRandomChars = (source: string, length: number) =>
        [...Array(length)].map(() => source[Math.floor(Math.random() * source.length)])

    const randomLetters = getRandomChars("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 4)
    const randomNumbers = getRandomChars("0123456789", 2)
    const combined = [...randomLetters, ...randomNumbers]

    return combined.sort(() => Math.random() - 0.5).join("")
}

export const getFormatDate = (isoString = "") => {
    return isoString.slice(0, 19).replace("T", " ")
}

/** 입력값 유효성 검사 */
export const focusOnEmpty = (refs: { [key: string]: RefObject<HTMLInputElement> }, callback?: () => void) => {
    const hasNonNullRef = Object.keys(refs).filter(key => refs[key].current !== null)

    for (const field of Object.keys(refs)) {
        const ref = refs[field]

        if (ref.current && !ref.current.value) {
            ref.current.focus()
            return
        }
    }

    if (hasNonNullRef) callback && callback()
}
