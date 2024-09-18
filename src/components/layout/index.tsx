import Image from "next/image"
import { FormWrapper, FormTitle, Header, Toolbar, ToolbarWrapper, Wrapper, ListNav } from "./style"
import { Popup, SideList, StepBar } from "../ui"
import useStore from "@/store"
import { home, logout } from "@/assets/images"
import { useState } from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [{ text, isOpen }, setOpenPopup] = useState<{ text: string; isOpen: boolean }>({ text: "", isOpen: false })

    const onOpen = (text: string) => setOpenPopup({ text, isOpen: true })

    return (
        <Wrapper>
            <Header>
                <div>인공지능 기반 범죄피해자 지원 서비스</div>
                <ToolbarWrapper>
                    <Toolbar onClick={() => onOpen("결과를 저장하고 홈 화면으로 이동하시겠습니까?")}>
                        <span>
                            <Image alt="home" src={home} />
                        </span>
                        <span>홈으로</span>
                    </Toolbar>
                    <Toolbar onClick={() => onOpen("로그아웃 하시겠습니까?")}>
                        <span>
                            <Image alt="logout" src={logout} />
                        </span>
                        <span>로그아웃</span>
                    </Toolbar>
                </ToolbarWrapper>
            </Header>
            {children}
            {isOpen && <Popup text={text} onClose={() => setOpenPopup(prev => ({ ...prev, isOpen: false }))} />}
        </Wrapper>
    )
}

const Form = ({ children }: { children: React.ReactNode }) => {
    return <FormWrapper>{children}</FormWrapper>
}

export { Layout, Form }
