import { questions } from "@/resources/data"
import { CurrentValueProp } from "@/resources/type"
import useStore from "@/store"
import { useEffect, useState } from "react"

const defaultValue = {
    list: questions,
    item: { id: 1, evals: null, content: "" },
    total: 0,
}

export const useAssesmentData = () => {
    const {
        state: { current_enum, report },
    } = useStore()

    const [currentValue, setCurrentValue] = useState<CurrentValueProp>(defaultValue)

    useEffect(() => {
        if (current_enum > 1) {
            const list = questions.map(({ id, content }) => ({
                id,
                evals: report.find(v => v.id == id)?.evals ?? 0,
                content,
            }))

            setCurrentValue({
                list,
                item: list.find(item => item.id == current_enum) ?? { id: 1, content: "", evals: null },
                total: questions.length,
            })
        } else {
            setCurrentValue(prev => ({
                ...prev,
                item: prev.list.find(item => item.id == current_enum) ?? { id: 1, content: "", evals: null },
                total: questions.length,
            }))
        }
    }, [current_enum, report])

    return { currentValue, setCurrentValue }
}
