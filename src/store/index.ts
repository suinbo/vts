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

const useStore = create<StoreState>(set => ({
    state: {
        page: 10,
        current_enum: 1,
        score: [],
        info: {
            name: "",
            gender: "",
            age: null,
        },
    },
    setState: update =>
        set(state => ({
            state: {
                ...state.state,
                ...update(state.state),
            },
        })),
}))

export default useStore
