"use client"

import { useCallback } from "react"
import { IQnaLevel } from "../usePrintContents"
import { Level } from "../style"

interface Props {
    level: IQnaLevel
}

export default function LevelContent({ level }: Props) {
    const renderLevel = useCallback(() => {
        switch (level.level) {
            case 4:
                return "매우 높음"
            case 3:
                return "높음"
            case 2:
                return "보통"
            case 1:
                return "낮음"
            case 0:
            default:
                return "없음"
        }
    }, [level.level])

    return (
        <Level>
            <table className="table">
                <tbody>
                    <tr className="weak thead">
                        <th className="tag" rowSpan={8}>
                            위험도 등급표
                        </th>
                        <th className="level rb4" colSpan={2}>
                            <strong>※ Part A 등급표</strong>
                        </th>
                        <th className="level rb4" colSpan={2}>
                            <strong>※ Part A+B 등급표</strong>
                        </th>
                        <th className="decision">결정 등급</th>
                    </tr>

                    <tr>
                        <td className="count rb4" colSpan={2}>
                            ( &nbsp;&nbsp;&nbsp;&nbsp;
                            {level.casing === "a" ? `${level.count}` : <>&nbsp;</>}&nbsp;&nbsp;&nbsp;&nbsp;) 개
                        </td>
                        <td className="count rb4" colSpan={2}>
                            ( &nbsp;&nbsp;&nbsp;&nbsp;
                            {level.casing === "a+b" ? `${level.count}` : <>&nbsp;</>}&nbsp;&nbsp;&nbsp;&nbsp;) 개
                        </td>
                        <td className="decision-level" rowSpan={5}>
                            {renderLevel()}
                        </td>
                    </tr>

                    <tr>
                        <td className="level-head weak rbd">‘예’ 항목 개수</td>
                        <td className="level-head weak rb4 lbn">권고 등급</td>
                        <td className="level-head weak rbd">‘예’ 항목 개수</td>
                        <td className="level-head weak rb4 lbn">권고 등급</td>
                    </tr>
                    <tr>
                        <td className="level-body number">0~1</td>
                        <td className="level-body check">
                            {level.casing === "a" && level.level === 0 ? "✔ " : "□"} 없 음
                        </td>
                        <td className="level-body number">0~1</td>
                        <td className="level-body check">
                            {level.casing === "a+b" && level.level === 0 ? "✔ " : "□"} 없 음
                        </td>
                    </tr>
                    <tr>
                        <td className="level-body number">2~3</td>
                        <td className="level-body check">
                            {level.casing === "a" && level.level === 1 ? "✔ " : "□"} 낮 음
                        </td>
                        <td className="level-body number">2~4</td>
                        <td className="level-body check">
                            {level.casing === "a+b" && level.level === 1 ? "✔ " : "□"} 낮 음
                        </td>
                    </tr>
                    <tr>
                        <td className="level-body number">4~7</td>
                        <td className="level-body check">
                            {level.casing === "a" && level.level === 2 ? "✔ " : "□"} 보 통
                        </td>
                        <td className="level-body number">5~10</td>
                        <td className="level-body check">
                            {level.casing === "a+b" && level.level === 2 ? "✔ " : "□"} 보 통
                        </td>
                    </tr>
                    <tr>
                        <td className="level-body number">8~12</td>
                        <td className="level-body check">
                            {level.casing === "a" && level.level === 3 ? "✔ " : "□"} 높 음
                        </td>
                        <td className="level-body number">11~18</td>
                        <td className="level-body check">
                            {level.casing === "a+b" && level.level === 3 ? "✔ " : "□"} 높 음
                        </td>

                        <td className="tip weak" rowSpan={2}>
                            <div className="tip-flex">
                                <p className="decorator">※</p>
                                <p>경찰관 재량으로 권고 등급에서 한 단계 상·하향 조정 가능</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="level-body number">13 이상</td>
                        <td className="level-body check">
                            {level.casing === "a" && level.level === 4 ? "✔ " : "□"} 매우 높음
                        </td>
                        <td className="level-body number">19 이상</td>
                        <td className="level-body check">
                            {level.casing === "a+b" && level.level === 4 ? "✔ " : "□"} 매우 높음
                        </td>
                    </tr>
                    <tr>
                        <td className="tfoot weak" colSpan={6}>
                            ※ ③,④,⑩,⑮,⑱,㉔ 중 한 문항이라도 <u>‘예’</u>라고 응답할 경우, 권고표와 관계없이 위험도 등급은{" "}
                            <u>‘보통’ 이상</u>으로 판단
                        </td>
                    </tr>
                </tbody>
            </table>
        </Level>
    )
}
