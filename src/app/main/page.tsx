"use client"

import { useEffect, useMemo, useState } from "react"
import Intro from "./intro"
import useStore from "@/store"
import { useSession } from "@/hooks/useSession"
import Privacy from "./step/(step2)/Privacy"
import Info from "./step/(step1)/Info"
import Assessment from "./step/(step2)/Assessment"
import Report from "./step/(step3)/Report"
import { Layout } from "@/components/layout"
import { Body } from "./step/style"

const Main = () => {
    const {
        state: { page },
    } = useStore()
    const [view, setView] = useState<React.ReactNode>(null)
    const { user } = useSession()

    const content: { [key: number]: React.ReactNode } = useMemo(
        () => ({
            10: <Intro />,
            11: (
                <Layout>
                    <Body>
                        <Privacy />
                    </Body>
                </Layout>
            ),
            12: (
                <Layout>
                    <Body>
                        <Info />
                    </Body>
                </Layout>
            ),
            21: (
                <Layout>
                    <Body>
                        <Assessment />
                    </Body>
                </Layout>
            ),
            31: (
                <Layout>
                    <Body>
                        <Report />
                    </Body>
                </Layout>
            ),
        }),
        []
    )

    useEffect(() => setView(content[page]), [content, page])

    return user ? view : null
}

export default Main
