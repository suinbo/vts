"use client"

import { Help } from "../style"

export default function HelpAContent() {
    return (
        <Help className="accent">
            <p className="decorator">※&nbsp;&nbsp;</p>
            <div className="paragraph">
                <p>
                    <b>Part A(공통 문항)</b>는{" "}
                    <u>
                        <b>모든 범죄 유형</b>
                    </u>
                    에 대해 기본적으로 작성하고,
                </p>
                <p>
                    <b>Part B(추가 문항)</b>는{" "}
                    <u>
                        <b>가정폭력(전·현 배우자 간)·데이트폭력·스토킹(지인 간)의 경우</b>
                    </u>
                    에만 추가 작성하시기 바랍니다.
                </p>
            </div>
        </Help>
    )
}
