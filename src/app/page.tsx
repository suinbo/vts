"use client"

import React, { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Intro, Step } from "./main"
import useStore from "@/store"

export default function Home() {
    const router = useRouter()
    const {
        state: { step },
    } = useStore()
    const [view, setView] = useState<React.ReactNode>(null)

    const content: { [key: number]: React.ReactNode } = useMemo(
        () => ({
            0: <Intro />,
            1: <Step />,
            2: <Step />,
            3: <Step />,
        }),
        []
    )

    useEffect(() => setView(content[step]), [content, step])

    useEffect(() => {
        const fetchUser = async () => {
            // TODO: 로그인 여부에 따라 라우팅 처리
            if (true) {
                router.push("/")
                setView(content[step])
            } else {
                //router.push("/login")
            }
        }

        fetchUser()
    }, [])

    return view
}
