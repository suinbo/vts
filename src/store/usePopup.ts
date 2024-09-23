import { create } from "zustand"

export interface PopupStoreStateProp {
    type: string
    isOpen: boolean
    onClick: () => void
    isNotice?: boolean
}

interface PopupStoreState {
    popup: PopupStoreStateProp
    setPopup: (update: (state: PopupStoreStateProp) => Partial<PopupStoreStateProp>) => void
}

export const defaultPopupValue = {
    type: "",
    isOpen: false,
    onClick: () => ({}),
    isNotice: false,
}

const usePopupStore = create<PopupStoreState>(set => ({
    popup: defaultPopupValue,
    setPopup: update =>
        set(state => ({
            popup: {
                ...state.popup,
                ...update(state.popup),
            },
        })),
}))

export default usePopupStore
