"use client"

import { CheckList } from "../style"
import { IQna } from "../usePrintContents"
import useTableRenderRow from "./useTableRenderRow"

interface Props {
    qnaItem: IQna[]
}

export default function TableAContent({ qnaItem }: Props) {
    const renderRow = useTableRenderRow(qnaItem)

    return (
        <CheckList
        // style={{ height: '200.35mm' }}
        >
            <header className="header">Part A (공통 문항) : 모든 범죄 유형에 작성</header>

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
                        <td className="weak category" rowSpan={12}>
                            피해자등 면담
                        </td>
                        <td className="weak category" rowSpan={4}>
                            행위태양의 위험성
                        </td>

                        {renderRow(1)}
                    </tr>
                    {[2, 3, 4].map(v => renderRow(v, true))}

                    <tr>
                        <td className="weak category" rowSpan={4}>
                            접근시도 및 위협
                        </td>
                        {renderRow(5)}
                    </tr>
                    {[6, 7, 8].map(v => renderRow(v, true))}

                    <tr>
                        <td className="weak category" rowSpan={2}>
                            지속성 및 강도
                        </td>
                        {renderRow(9)}
                    </tr>
                    {renderRow(10, true)}

                    <tr>
                        <td className="weak category" rowSpan={2}>
                            피해의 심각성
                        </td>
                        {renderRow(11)}
                    </tr>
                    {renderRow(12, true)}

                    <tr className="bt">
                        <td className="weak category" rowSpan={6} colSpan={2}>
                            경찰 자료 확인
                        </td>

                        {renderRow(13)}
                    </tr>
                    {[14, 15, 16, 17, 18].map(v => renderRow(v, true))}
                </tbody>
            </table>
        </CheckList>
    )
}
