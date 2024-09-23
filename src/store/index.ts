import { create } from "zustand"

interface StoreStateProp {
    page: number
    current_enum: number
    score: number[]
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
