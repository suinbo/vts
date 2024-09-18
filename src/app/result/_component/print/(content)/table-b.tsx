"use client"

import { CheckList } from "../style"
import { IQna } from "../usePrintContents"
import useTableRenderRow from "./useTableRenderRow"

interface Props {
    qnaItem: IQna[]
}

export default function TableBContent({ qnaItem }: Props) {
    const renderRow = useTableRenderRow(qnaItem)

    return (
        <CheckList
        // style={{ height:'125.5mm' }}
        >
            <header className="header">
                Part B (추가 문항) :&nbsp;
                <span style={{ fontSize: "11pt" }}>
                    가정폭력(전&nbsp;·&nbsp;현 배우자 간)&nbsp;·&nbsp;데이트폭력&nbsp;·&nbsp;스토킹(지인 간)의 경우에
                    추가 작성
                </span>
            </header>

            <table className="table">
                <thead>
                    <tr className="weak">
                        <th className="category" colSpan={2}>
                            구분
                        </th>
                        <th className="list" colSpan={2}>
                            평가 항목
                        </th>
                        <th className="check yes" style={{ fontSize: "10pt" }}>
                            예
                        </th>
                        <th className="check" style={{ fontSize: "9pt" }}>
                            아니오
                        </th>
                        <th className="check" style={{ fontSize: "9pt" }}>
                            모름
                        </th>
                        <th className="note">비고</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="weak category" rowSpan={10}>
                            피해자등 면담
                        </td>
                        <td className="weak category" rowSpan={4}>
                            가해자와의 관계
                        </td>

                        {renderRow(19)}
                    </tr>
                    {[20, 21, 22].map(v => renderRow(v, true))}

                    <tr>
                        <td className="weak category" rowSpan={2}>
                            보호조치
                        </td>

                        {renderRow(23)}
                    </tr>
                    {renderRow(24, true)}

                    <tr>
                        <td className="weak category" rowSpan={4}>
                            가해자의 위험성
                        </td>
                        {renderRow(25)}
                    </tr>
                    {[26, 27, 28].map(v => renderRow(v, true))}
                </tbody>
            </table>
        </CheckList>
    )
}
