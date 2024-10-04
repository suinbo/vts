"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/utils/superbase"

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession()

            if (session) {
                router.push("/main")
            } else {
                router.push("/login")
            }
        }

        fetchUser()
    }, [])

    return null
}
