import Image from "next/image"
import { FormWrapper, Header, Toolbar, ToolbarWrapper, Wrapper } from "./style"
import { Popup } from "../ui"
import { home, logout } from "@/assets/images"
import usePopupStore from "@/store/usePopup"
import { popupMessage } from "@/resources/data"
import { useControlPage } from "@/hooks/useControlPage"
import { POPUPTYPE } from "@/resources/constant"

const Layout = ({ children }: { children: React.ReactNode }) => {
    const {
        popup: { type, isOpen, onClick, isNotice },
        setPopup,
    } = usePopupStore()

    const { onGoHome, onLogout } = useControlPage()
    const onOpen = (type: string, onClick: () => void) =>
        setPopup(() => ({ type, isOpen: true, onClick, isNotice: false }))

    return (
        <Wrapper>
            <Header>
                <div>인공지능 기반 범죄피해자 지원 서비스</div>
                <ToolbarWrapper>
                    <Toolbar onClick={() => onOpen(POPUPTYPE.GOHOME, onGoHome)}>
                        <span>
                            <Image alt="home" src={home} />
                        </span>
                        <span>홈으로</span>
                    </Toolbar>
                    <Toolbar onClick={() => onOpen(POPUPTYPE.LOGOUT, onLogout)}>
                        <span>
                            <Image alt="logout" src={logout} />
                        </span>
                        <span>로그아웃</span>
                    </Toolbar>
                </ToolbarWrapper>
            </Header>
            {children}
            {isOpen && (
                <Popup
                    isNotice={isNotice}
                    text={popupMessage[type]}
                    onSave={onClick}
                    onClose={() => setPopup(prev => ({ ...prev, isOpen: false }))}
                />
            )}
        </Wrapper>
    )
}

const Form = ({ children }: { children: React.ReactNode }) => {
    return <FormWrapper>{children}</FormWrapper>
}

export { Layout, Form }
