"use client"

import { Wrapper, Content, Description, Header, Title, Body, Navigator } from "./style"
import Image from "next/image"
import { arrow, logout } from "@/assets/images"
import useStore from "@/store"
import { Toolbar, ToolbarWrapper } from "@/components/layout/style"
import usePopupStore from "@/store/usePopup"
import { POPUPTYPE } from "@/resources/constant"
import { useControlPage } from "@/hooks/useControlPage"
import { Popup } from "@/components/ui"
import { popupMessage } from "@/resources/data"

const Intro = () => {
    const { setState } = useStore()
    const { onLogout } = useControlPage()
    const { popup, setPopup } = usePopupStore()

    return (
        <Wrapper>
            <Header>
                <div>
                    <span> 인공지능 기반 범죄피해자 지원 서비스</span>
                </div>
                <ToolbarWrapper>
                    <Toolbar
                        onClick={() => {
                            setPopup(() => ({
                                type: POPUPTYPE.LOGOUT,
                                onClick: () => {
                                    onLogout()
                                    setPopup(prev => ({ ...prev, isOpen: false }))
                                },
                                isNotice: false,
                                isOpen: true,
                            }))
                        }}>
                        <span>
                            <Image alt="logout" src={logout} />
                        </span>
                        <span>로그아웃</span>
                    </Toolbar>
                </ToolbarWrapper>
            </Header>
            <Body>
                <div></div>
                <Content>
                    <Title>
                        <h1>
                            <span>[VTS]</span> 검사
                        </h1>

                        <span className="sub-text">※ VTS : 범죄피해 트라우마 척도</span>
                    </Title>
                    <Description>
                        <ul>
                            <li>본 검사는 범죄 피해로 인해 심리적 충격이 어느 정도인지 측정하는 검사입니다. </li>
                            <li>검사 결과에 따라 선생님께 필요한 지원을 제공해드리고자 합니다. </li>
                            <li>검사지에 있는 문항을 읽으시고 해당되는 부분을 선택해주시면 됩니다.</li>
                            <li>총 23문항으로 통상 검사시 행에 걸리는 시간은 5분 내외입니다.</li>
                        </ul>
                    </Description>
                </Content>
                <div></div>
            </Body>
            <Navigator onClick={() => setState(prev => ({ ...prev, step: 1, page: 11 }))}>
                <Image src={arrow} alt="arrow" priority />
            </Navigator>
            {popup.isOpen && (
                <Popup
                    isNotice={popup.isNotice}
                    text={popupMessage[popup.type]}
                    onSave={popup.onClick}
                    onClose={() => setPopup(prev => ({ ...prev, isOpen: false }))}
                />
            )}
        </Wrapper>
    )
}

export default Intro
