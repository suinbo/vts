import { questions } from "@/resources/data"
import { CurrentValueProp } from "@/resources/type"
import useStore from "@/store"
import { useEffect, useState } from "react"

export const useAssesmentData = () => {
    const {
        state: { current_enum },
    } = useStore()

    const [currentValue, setCurrentValue] = useState<CurrentValueProp>({
        list: questions,
        item: { id: 1, evals: null, content: "" },
        total: 0,
    })

    useEffect(() => {
        setCurrentValue(prev => ({
            ...prev,
            item: prev.list.find(item => item.id == current_enum) ?? { id: 1, content: "", evals: null },
            total: questions.length,
        }))
    }, [current_enum])

    return { currentValue, setCurrentValue }
}
