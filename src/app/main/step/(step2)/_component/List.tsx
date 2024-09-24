import React, { useCallback, useEffect, useState } from "react"
import { Header, Item, SideListContent, SideListItems } from "./style"
import { genders } from "@/resources/data"
import { getFormatDate } from "@/utils/common"
import usePopupStore from "@/store/usePopup"
import { POPUPTYPE } from "@/resources/constant"

type ReportItem = {
    noid: number
    name: string
    gender: string
    age: number
    created_at: string
    test_count: number
    report: { id: number; evals: number }[]
}

const List = () => {
    const [list, setList] = useState<ReportItem[]>([
        {
            noid: 1,
            age: 10,
            gender: "F",
            name: "김미소",
            created_at: "2024-06-16 20:00:00",
            test_count: 0,
            report: [],
        },
    ])

    const { setPopup } = usePopupStore()

    useEffect(() => {
        const fetchData = async () => {
            // const { data: response } = await supabase.from("assessment").select("*")
            // if (response?.length) setList(response)
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
                        <div>진행상태</div>
                        <div>검사일자</div>
                    </Header>
                    <Item>
                        {list.map(item => {
                            const { noid, name, gender, age, created_at, test_count } = item
                            return (
                                <div key={noid} className="item-group" onClick={() => onClickList(item)}>
                                    <div>
                                        {name} / {genders.find(v => v.id == gender)?.value} / 만 {age}세
                                    </div>
                                    <div>
                                        <span className="test-count">{`${test_count}회차`}</span>
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
