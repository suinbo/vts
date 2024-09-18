import type { Metadata } from "next"
import { Noto_Sans_KR, Roboto } from "next/font/google"
import StyledComponentsRegistry from "@/lib/registry"
import "./globals.scss"

export const metadata: Metadata = {
    title: "위험성 판단 체크리스트",
    description: "광주경찰청 AI 통합케어 서비스 - 위험성 판단 체크리스트",
}

export const roboto = Roboto({
    subsets: ["latin"],
    variable: "--roboto",
    weight: ["100", "400", "700"],
    fallback: ["system-ui", "arial"],
})

export const notoSansKr = Noto_Sans_KR({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko">
            <body className={notoSansKr.className}>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    )
}
