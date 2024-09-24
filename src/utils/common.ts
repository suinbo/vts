/** 랜덤 문자열 추출 */
export const generateRandomString = (length = 6) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("")
}

export const getFormatDate = (isoString = "") => {
    return isoString.slice(0, 19).replace("T", " ")
}
