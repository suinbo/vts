import type { Metadata } from "next"
import { Noto_Sans_KR, Roboto } from "next/font/google"
import StyledComponentsRegistry from "@/lib/registry"
import "./globals.scss"

export const metadata: Metadata = {
    title: "VTS 검사",
    description: "광주경찰청 AI 통합케어 서비스 - VTS 검사",
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
