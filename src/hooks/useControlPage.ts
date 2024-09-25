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
        if (state.page == 21) {
            const upsertData = async () => {
                const { data: result } = await supabase
                    .from("vts")
                    .update([state])
                    .eq("noid", state.noid)
                    .order("created_at", { ascending: false })
                    .limit(1)
                    .select("userId")

                if (result?.length) {
                    setState(prev => ({ ...defaultValue, userId: result[0].userId, logged_user: prev.logged_user }))
                }
            }
            await upsertData()
        } else {
            setState(prev => ({ ...defaultValue, userId: prev.userId, logged_user: prev.logged_user }))
        }

        //팝업 닫기
        setPopup(() => ({ ...defaultPopupValue }))
    }, [state])

    /** 로그아웃 */
    const onLogout = useCallback(async () => {
        await supabase.auth.signOut().then(() => {
            router.push("/login")
        })
    }, [])

    return { onGoHome, onLogout }
}
