"use client"

import usePrintContents from './_component/print/usePrintContents'

import { Checklist, Header, Personal, Summary } from './_component/print/(contents)'
import { Contents, Page } from './_component/print/style'
import { useEffect } from "react"

export default function PrintPage() {
    const { checkListItem, personalInfo } = usePrintContents()

    useEffect(() => {
        // 프린트를 안띄우고 싶으면 아래를 주석처리
        window.document.close()
        window.focus()
        window.print()
        window.close()
    }, [])

    return (
        <Page>
            <Contents>
                <Header />
                <Personal info={personalInfo} />
                <Summary />
                <Checklist items={checkListItem} />
            </Contents>
        </Page>
    )
}
