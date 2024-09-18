import React, { useRef } from "react"
import { Header, Item, SideListButton, SideListContent, SideListItems, SideListTitle, SideListWrapper } from "./style"
import { NavIcon } from "../icon"
import Banner from "../banner"
import { usePreventOutside } from "@/hooks/usePreventOutside"

const SideList = ({ onClose }: { onClose: () => void }) => {
    const refs = useRef<HTMLDivElement>(null)

    /** 외부 영역 클릭 방지 */
    usePreventOutside(refs)

    return (
        <SideListWrapper ref={refs}>
            <SideListButton onClick={onClose}>
                <NavIcon style={{ width: 12, height: 12 }} />
            </SideListButton>
            <SideListTitle>진행 현황</SideListTitle>
            <SideListContent>
                <span className="description">※ 리스트를 클릭하면 진행 화면으로 넘어갑니다.</span>
                <SideListItems>
                    <Header>
                        <div>내담자 (일자)</div>
                        <div>진행상태</div>
                    </Header>
                    <Item>
                        <div className="item-group">
                            <div>
                                <span>여성/만 24세</span>
                                <span>2024.09.10 14:00:00</span>
                            </div>
                            <div>
                                <Banner
                                    text="완료"
                                    $color={{ bgColor: "#fff", fColor: "#132D6F", bdColor: "#132D6F" }}
                                />
                            </div>
                        </div>
                        <div className="item-group">
                            <div>
                                <span>여성/만 24세</span>
                                <span>2024.09.10 14:00:00</span>
                            </div>
                            <div>완료</div>
                        </div>
                        <div className="item-group">
                            <div>
                                <span>여성/만 24세</span>
                                <span>2024.09.10 14:00:00</span>
                            </div>
                            <div>완료</div>
                        </div>
                        <div className="item-group">
                            <div>
                                <span>여성/만 24세</span>
                                <span>2024.09.10 14:00:00</span>
                            </div>
                            <div>완료</div>
                        </div>
                        <div className="item-group">
                            <div>
                                <span>여성/만 24세</span>
                                <span>2024.09.10 14:00:00</span>
                            </div>
                            <div>완료</div>
                        </div>
                        <div className="item-group">
                            <div>
                                <span>여성/만 24세</span>
                                <span>2024.09.10 14:00:00</span>
                            </div>
                            <div>완료</div>
                        </div>
                    </Item>
                </SideListItems>
            </SideListContent>
        </SideListWrapper>
    )
}

export default SideList
