"use client"

import { Fragment, ReactNode } from "react"
import { Summary } from "../style"
import { ILabelValue, ISummaryTarget } from "../usePrintContents"

interface Props {
    targetItem: ISummaryTarget[]
    categoryItem: ILabelValue<boolean>[]
}

export default function SummaryContents({ categoryItem, targetItem }: Props) {
    const renderCategoryItem = (items: { index: string; label: ReactNode; value: boolean }[]) => {
        return items.map(v => (
            <Fragment key={v.index}>
                <td className="text">{v.label}</td>
                <td className="check">{v.value ? "✔" /*'☑'*/ : "□"}</td>
            </Fragment>
        ))
    }

    return (
        <Summary>
            <table className="target">
                <tbody>
                    {targetItem.map(v => (
                        <tr key={v.index}>
                            <th className="accent">{v.label}</th>
                            <td>
                                <p>{v.name}</p>
                                <p>
                                    (&nbsp;&nbsp;{v.age}&nbsp;&nbsp;세)&nbsp;
                                    {v.gender === "F" ? "여성" : "남성"}
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="category">
                <thead>
                    <tr>
                        <th className="relation accent">피해자-가해자 관계</th>
                        <th className="crime accent" colSpan={8}>
                            범죄 유형
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td rowSpan={2} className="relation">
                            {
                                <>
                                    ※ 피해자-가해자 관계가 전/현 배우자, 전/현 연인관계에 해당하는 경우 <br />: Part A+B
                                </> /* TODO: variable */
                            }
                        </td>
                        {renderCategoryItem(categoryItem.slice(0, 4))}
                    </tr>

                    <tr>
                        {renderCategoryItem(categoryItem.slice(4, 7))}
                        <td colSpan={2} className="etc">
                            {<>기타 :&nbsp;</> /* TODO: variable */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </Summary>
    )
}
