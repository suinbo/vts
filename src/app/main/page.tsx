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
import Notice from "./step/(step3)/Notice"
import ReportList from "./step/(step2)/ReportList"

const Main = () => {
    const {
        state: { page, logged_user },
    } = useStore()
    const { user } = useSession()
    const [view, setView] = useState<React.ReactNode>(null)

    console.log(logged_user)

    const content: { [key: string]: { [key: number]: React.ReactNode } } = useMemo(
        () => ({
            police: {
                10: <Intro />,
                11: (
                    <Layout>
                        <Body>
                            <ReportList />
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
            },
            client: {
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
                            <Notice />
                        </Body>
                    </Layout>
                ),
            },
        }),
        [user, logged_user]
    )

    useEffect(() => user && setView(content[logged_user][page]), [content, page, logged_user, user])

    return user ? view : null
}

export default Main
