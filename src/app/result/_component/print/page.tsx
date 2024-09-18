"use client"

import { useEffect } from "react"
import { Contents, Page, Header } from "./style"

import usePrintContents from "./usePrintContents"
import { HelpA, HelpB, Level, Summary, Synth, TableA, TableB } from "./(content)"

export default function PrintPage() {
    const { summary, table, level, opinion } = usePrintContents()

    useEffect(() => {
        // 프린트를 안띄우고 싶으면 아래를 주석처리
        window.document.close()
        window.focus()
        window.print()
        window.close()
    }, [])

    return (
        <>
            <Page>
                <Contents>
                    <Header>
                        위험성 판단 체크리스트&nbsp;
                        <span>(경찰관 작성)</span>
                    </Header>

                    <Summary categoryItem={summary.categoryItem} targetItem={summary.targetItem} />
                    <HelpA />
                    <TableA qnaItem={table.qnaItem} />
                </Contents>
            </Page>
            <Page>
                <Contents>
                    <TableB qnaItem={table.qnaItem} />
                    <HelpB />
                    <Level level={level} />
                    <Synth opinion={opinion} />
                </Contents>
            </Page>
        </>
    )
}
