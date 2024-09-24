import { USERTYPE } from "@/resources/constant"
import useStore from "@/store"
import { supabase } from "@/utils/superbase"
import { User } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const useSession = () => {
    const router = useRouter()
    const [user, setUser] = useState<User>()
    const { setState } = useStore()

    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession()

            if (session) {
                const { user } = session
                const { data: response } = await supabase.from("userinfo").select("is_admin").eq("id", user?.id)

                if (response?.length) {
                    setUser(user)
                    setState(prev => ({
                        ...prev,
                        logged_user: response[0]?.is_admin ? USERTYPE.POLICE : USERTYPE.CLIENT,
                    }))
                    router.push("/main")
                }
            } else {
                router.push("/")
            }
        }

        fetchUser()
    }, [])

    return { user }
}
