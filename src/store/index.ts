import { create } from "zustand"

export interface StoreStateProp {
    page: number
    current_enum: number
    score: number[]
    logged_user: string
    report: { id: number; evals: number }[]
    test_count: number
    info: {
        [key: string]: string | number | null
        name: string
        gender: string
        age: number | null
    }
}

interface StoreState {
    state: StoreStateProp
    setState: (update: (state: StoreStateProp) => Partial<StoreStateProp>) => void
}

export const defaultValue = {
    page: 10,
    current_enum: 1,
    score: [],
    logged_user: "",
    report: [],
    test_count: 0,
    info: {
        name: "",
        gender: "",
        age: null,
    },
}

const useStore = create<StoreState>(set => ({
    state: defaultValue,
    setState: update =>
        set(state => ({
            state: {
                ...state.state,
                ...update(state.state),
            },
        })),
}))

export default useStore
