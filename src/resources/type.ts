/** 로그인 화면 */
export type AccountProp = { id: string; random_password: string }

/** 평가화면 */
export type AssessmentProp = {
    id: number
    evals: number | null
    content: string
}

export type CurrentValueProp = {
    list: AssessmentProp[]
    item: AssessmentProp
    total: number
}

export interface ItemsProp {
    id: string
    value: string
}

export interface ResultProp {
    total: number
    grade?: string
    opinion?: string
    color?: string
}
