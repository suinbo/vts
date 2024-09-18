"use client"

import { Help } from "../style"

export default function HelpBContent() {
    return (
        <Help className="accent">
            <p className="decorator">※&nbsp;&nbsp;</p>
            <div className="paragraph">
                <p>
                    <u>
                        <b>
                            Part A(공통 문항)만 작성한 경우→<strong>Part A 등급표</strong>,
                        </b>
                    </u>
                </p>
                <p>
                    <u>
                        <b>
                            Part B(추가 문항)까지 작성한 경우→<strong>Part A+B 등급표</strong>
                        </b>
                    </u>
                    에 따라 위험도를 판단합니다.
                </p>
            </div>
        </Help>
    )
}
