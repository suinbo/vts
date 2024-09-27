"use client"

import usePrintContents from "./_component/print/usePrintContents"

import { Checklist, Header, Personal, Summary } from "./_component/print/(contents)"
import { Contents, Main, Page, PrintButton } from "./_component/print/style"
import { useEffect, useState } from "react"
import { defaultValue, StoreStateProp } from "@/store"
import { supabase } from "@/utils/superbase"
import { useSearchParams } from "next/navigation"

export default function PrintPage() {
    const params = useSearchParams()
    const [data, setData] = useState<StoreStateProp>(defaultValue)

    useEffect(() => {
        const asyncFetch = async () => {
            await supabase
                .from("vts")
                .select("*")
                .eq("noid", params.get("id"))
                .then(({ data }) => setData(data?.[0]))
        }

        asyncFetch()
    }, [params])

    const { checkListItem, personalInfo } = usePrintContents(data)

    return (
        <Main>
            <PrintButton
                onClick={() => {
                    window.print()
                }}
                className="print-none"
                theme="lined_gray">
                문서 인쇄
            </PrintButton>

            <Page>
                <Contents>
                    <Header />
                    <Personal info={personalInfo} />
                    <Summary />
                    <Checklist items={checkListItem} />
                </Contents>
            </Page>
        </Main>
    )
}
