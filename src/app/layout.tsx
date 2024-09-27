import type { Metadata } from "next"
import StyledComponentsRegistry from "@/lib/registry"
import { notoSansKr } from "@/utils/font"
import "./globals.scss"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: "VTS 검사",
    description: "광주경찰청 AI 통합케어 서비스 - VTS 검사",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko">
            <body className={notoSansKr.className}>
                <Suspense>
                    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                </Suspense>
            </body>
        </html>
    )
}
