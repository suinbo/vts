import React, { useCallback, useEffect, useState } from "react"
import { Header, Item, SideListContent, SideListItems } from "./style"
import { genders } from "@/resources/data"
import { getFormatDate } from "@/utils/common"
import usePopupStore, { defaultPopupValue } from "@/store/usePopup"
import { POPUPTYPE } from "@/resources/constant"
import { supabase } from "@/utils/superbase"
import useStore from "@/store"

type ReportItem = {
    noid: number
    info: {
        name: string
        gender: string
        age: number
    }
    created_at: string
    test_count: number
    report: { id: number; evals: number }[]
}

const List = () => {
    const {
        state: { logged_user },
        setState,
    } = useStore()
    const { setPopup } = usePopupStore()
    const [list, setList] = useState<ReportItem[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await supabase.from("vts").select("*").eq("is_completed", true)
            if (response?.length) setList(response)
        }
        fetchData()
    }, [])

    const onClickList = useCallback(
        (selectedItem: ReportItem) => {
            setPopup(() => ({
                isNotice: false,
                isOpen: true,
                type: POPUPTYPE.GOPAGE,
                onClick: () => {
                    //TODO 검사결과 화면 보여주기
                    setState(prev => ({ ...prev, ...selectedItem, logged_user }))
                    setPopup(() => ({ ...defaultPopupValue }))
                    console.log(selectedItem)
                },
            }))
        },
        [list]
    )

    return (
        <div>
            <SideListContent>
                <SideListItems>
                    <Header>
                        <div>사용자</div>
                        <div>진행 회차</div>
                        <div>검사 일자</div>
                    </Header>
                    <Item>
                        {list.map(item => {
                            const { noid, info, created_at, test_count } = item
                            return (
                                <div key={noid} className="item-group">
                                    <div>
                                        {info.name} / {genders.find(v => v.id == info.gender)?.value} / 만 {info.age}세
                                    </div>
                                    <div>
                                        <span
                                            className="test-count"
                                            onClick={() => onClickList(item)}>{`${test_count}회차`}</span>
                                    </div>
                                    <div>{getFormatDate(created_at)}</div>
                                </div>
                            )
                        })}
                    </Item>
                </SideListItems>
            </SideListContent>
        </div>
    )
}

export default List
