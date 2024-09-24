import useStore, { defaultValue } from "@/store"
import usePopupStore, { defaultPopupValue } from "@/store/usePopup"
import { supabase } from "@/utils/superbase"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export const useControlPage = () => {
    const router = useRouter()
    const { state, setState } = useStore()
    const { setPopup } = usePopupStore()

    /** 홈 화면 이동 */
    const onGoHome = useCallback(async () => {
        setPopup(() => ({ ...defaultPopupValue }))
        setState(prev => ({ ...defaultValue, logged_user: prev.logged_user }))
    }, [state])

    /** 로그아웃 */
    const onLogout = useCallback(async () => {
        await supabase.auth.signOut().then(() => {
            router.push("/login")
        })
    }, [])

    return { onGoHome, onLogout }
}
