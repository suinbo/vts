import { ButtonWrapper, Content, Title } from "./style"
import { Button } from "@/components/ui"
import React, { useCallback, useMemo, useState } from "react"
import { Form } from "@/components/layout"
import { NavIcon } from "@/components/ui/icon"
import useStore from "@/store"
import { getEvalTotalScore, getGrade } from "../utils"
import { ResultView1, ResultView2 } from "./_component"
import usePopupStore from "@/store/usePopup"
import { POPUPTYPE } from "@/resources/constant"

const Report = () => {
    const {
        state: { score },
    } = useStore()

    const [view, setView] = useState<number>(1)
    const { setPopup } = usePopupStore()

    const handlePrint = useCallback(() => {
        window.open("/result", "_blank", "width=811,height=1123")
    }, [])

    const resultScore = useMemo(() => {
        const total = getEvalTotalScore(score.map((item, idx) => item * (idx + 1)))
        const { grade, opinion } = getGrade(total)
        return {
            total,
            grade,
            opinion,
        }
    }, [score])

    const resultView: { [key: number]: React.ReactNode } = {
        1: <ResultView1 score={score} total={resultScore.total} />,
        2: <ResultView2 item={resultScore} />,
    }

    return (
        <>
            <div></div>
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
                        <Button
                            text="결과 저장"
                            onClick={() =>
                                setPopup(() => ({
                                    isNotice: false,
                                    isOpen: true,
                                    type: POPUPTYPE.SAVERESULT,
                                    onClick: handlePrint,
                                }))
                            }
                            theme="lined_gray"
                        />
                    </div>
                </Title>
                <Form>
                    <div>{resultView[view]}</div>
                    <div>
                        <ButtonWrapper onClick={() => setView(view == 1 ? 2 : 1)}>
                            <span>검사내용 보기</span>
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
