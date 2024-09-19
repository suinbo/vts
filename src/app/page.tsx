"use client"

import React, { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Assessment, Info, Privacy, Report } from "./main"
import useStore from "@/store"
import Intro from "./main/intro"
import { Layout } from "@/components/layout"
import { Body } from "./main/step/style"

export default function Home() {
    const router = useRouter()
    const {
        state: { page },
    } = useStore()

    const [view, setView] = useState<React.ReactNode>(null)

    const content: { [key: number]: React.ReactNode } = useMemo(
        () => ({
            10: <Intro />,
            11: <Privacy />,
            12: <Info />,
            21: <Assessment />,
            31: <Report />,
        }),
        []
    )

    useEffect(
        () =>
            setView(
                <Layout>
                    <Body>{content[page]}</Body>
                </Layout>
            ),
        [content, page]
    )

    useEffect(() => {
        const fetchUser = async () => {
            // TODO: 로그인 여부에 따라 라우팅 처리
            if (true) {
                router.push("/")
                setView(content[page])
            } else {
                //router.push("/login")
            }
        }

        fetchUser()
    }, [])

    return view
}
