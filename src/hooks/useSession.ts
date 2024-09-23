import { supabase } from "@/utils/superbase"
import { User } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const useSession = () => {
    const router = useRouter()
    const [user, setUser] = useState<User>()

    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession()

            if (session) {
                const { user } = session
                setUser(user)
                router.push("/main")
            } else {
                router.push("/")
            }
        }

        fetchUser()
    }, [])

    return { user }
}
