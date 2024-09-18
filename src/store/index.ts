import { create } from "zustand"

interface StoreStateProp {
    step: number // 0: 시작화면, 1: 기본정보 작성, 2: 체크리스트 작성, 3: 위험도 등급 확인
    page: number // 11: 인적사항, 12: 피해자-가해자 관계, 13: 범죄유형
    current_enum: number
    info: {
        [key: string]: any
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
        page: 0,
        step: 0,
        current_enum: 1,
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
