import { RESULT_GRADE } from "@/resources/data"
import { AssessmentProp } from "@/resources/type"

export const getEvalsCount = (list: AssessmentProp[]) => {
    const evalCounts = [0, 0, 0, 0, 0]

    list.forEach(question => {
        const evals = question.evals ?? 1
        if (evals >= 1 && evals <= 5) {
            evalCounts[evals - 1]++
        }
    })

    return evalCounts
}

export const getEvalTotalScore = (scores: number[]) => scores.reduce((acc, current) => acc + current, 0)

export const getGrade = (totalScore: number) => {
    if (totalScore < 53) return RESULT_GRADE.LOW
    else if (totalScore >= 53 && totalScore < 90) return RESULT_GRADE.TRAUMA
    else return RESULT_GRADE.HIGH
}
