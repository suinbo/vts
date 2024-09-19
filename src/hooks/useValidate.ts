export const useValidate = (formItem: { [key: string]: any }) => {
    const checkNullOrEmpty = (): boolean => {
        for (const value of Object.values(formItem)) {
            if (value === null || value === "") {
                return true
            }
        }
        return false
    }

    return { isInValid: checkNullOrEmpty() }
}
