import { useEffect, useState } from "react"

export const useValidate = (formItem: { [key: string]: any }[]) => {
    const [isInValid, setIsInValid] = useState<boolean>(false)

    useEffect(() => {
        const checkNullOrEmpty = (): boolean => {
            for (const item of formItem) {
                for (const value of Object.values(item)) {
                    if (value === null || value === "") {
                        return true
                    }
                }
            }
            return false
        }

        setIsInValid(checkNullOrEmpty())
    }, [formItem])

    return { isInValid }
}
