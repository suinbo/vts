"use client"

import { Content, Inner, Title, Wrapper } from "./style"

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <Wrapper>
            <Inner>
                <Title>로그인</Title>
                <Content>{children}</Content>
            </Inner>
        </Wrapper>
    )
}
