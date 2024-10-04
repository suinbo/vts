import { ButtonWrapper, Content, Nav, Title } from "./style"
import { Button } from "@/components/ui"
import React, { useCallback, useMemo, useState } from "react"
import { Form } from "@/components/layout"
import { NavIcon } from "@/components/ui/icon"
import useStore, { defaultValue } from "@/store"
import { getEvalTotalScore, getGrade } from "../utils"
import { ResultView1, ResultView2 } from "./_component"
import usePopupStore, { defaultPopupValue } from "@/store/usePopup"

const Report = () => {
    const {
        state: { score, noid, logged_user },
        setState,
    } = useStore()

    const [view, setView] = useState<number>(1)
    const { setPopup } = usePopupStore()

    const handlePrint = useCallback(() => {
        window.open(`/result?id=${noid}`, "_blank", "width=811,height=1123")
        setPopup(() => ({ ...defaultPopupValue }))
    }, [])

    const resultScore = useMemo(() => {
        const total = getEvalTotalScore(score.map((item, idx) => item * (idx + 1)))
        const { grade, opinion, color } = getGrade(total)
        return {
            total,
            grade,
            opinion,
            color,
        }
    }, [score])

    const resultView: { [key: number]: React.ReactNode } = {
        1: <ResultView1 score={score} item={resultScore} />,
        2: <ResultView2 item={resultScore} />,
    }

    return (
        <>
            <Nav type="prev">
                <NavIcon
                    fill="#132d6f"
                    style={{ width: 40, height: 40 }}
                    onClick={() => setState(() => ({ ...defaultValue, logged_user, step: 1, page: 11 }))}
                />
                <span className="list">
                    검사 현황 <br />
                    리스트
                </span>
            </Nav>
            <Content>
                <Title>
                    <div className="step-title">
                        <span>[VTS 검사]</span>검사 결과
                    </div>
                    {/* <div>
                        <Button
                            theme="lined"
                            style={{ padding: "8px 24px" }}
                            onClick={() => ({})}
                            text={
                                <span className="button-name">
                                    CARE 포털 바로가기
                                    <NavIcon style={{ width: 10, height: 20 }} />
                                </span>
                            }
                        />
                    </div> */}
                    <div className="result-save">
                        <Button text="문서 보기" onClick={handlePrint} theme="lined_gray" />
                    </div>
                </Title>
                <Form>
                    <div>{resultView[view]}</div>
                    <div>
                        <ButtonWrapper onClick={() => setView(view == 1 ? 2 : 1)} $isOpposed={view == 2}>
                            <span>{view == 1 ? "검사내용 보기" : "검사 점수 보기"}</span>
                            <NavIcon style={{ width: 10, height: 10 }} />
                        </ButtonWrapper>
                    </div>
                </Form>
            </Content>
            <div></div>
        </>
    )
}

export default Report
