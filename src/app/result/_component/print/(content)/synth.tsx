"use client"

import { Synth } from "../style"

interface Props {
    opinion: string
}

export default function SynthContent({ opinion }: Props) {
    return (
        <Synth>
            <table className="table">
                <thead>
                    <tr>
                        <th className="weak title" colSpan={5}>
                            종합 의견
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="summary" colSpan={5}>
                            {opinion}
                        </td>
                    </tr>
                </tbody>

                <tbody className="other-table">
                    <tr className="weak thead">
                        <th className="diagonal"></th>
                        <th className="alloc">소속 및 직위</th>
                        <th className="calloc">이&nbsp;&nbsp;&nbsp;름</th>
                        <th className="calloc">서&nbsp;&nbsp;&nbsp;명</th>
                        <th className="calloc">일&nbsp;&nbsp;&nbsp;자</th>
                    </tr>
                    <tr className="tbody">
                        <th className="weak">작성자</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="date">
                            20&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;.
                        </td>
                    </tr>
                    <tr className="tbody">
                        <th className="weak">검토자</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="date">
                            20&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;.
                        </td>
                    </tr>
                    <tr className="tbody">
                        <th className="weak">확인자</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="date">
                            20&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;.
                        </td>
                    </tr>
                </tbody>
            </table>
        </Synth>
    )
}
