import { Content, ReportContent, Row, Title } from "./style"
import { Section2 } from "./_component"
import { Banner, Button, Popup } from "@/components/ui"
import React, { useCallback, useState } from "react"
import { Form } from "@/components/layout"
import { NavIcon } from "@/components/ui/icon"

const Report = () => {
    const [view, setView] = useState<number>(1)
    const handlePrint = useCallback(() => {
        window.open("/result", "_blank", "width=811,height=1123")
    }, [])

    const resultView: { [key: number]: React.ReactNode } = {
        1: (
            <>
                <Row>
                    <div className="row-title">문항</div>
                    <div>
                        전혀 <br />
                        그렇지 않다 (x1)
                    </div>
                    <div>
                        약간 <br />
                        그렇다 (x2)
                    </div>
                    <div>
                        보통 <br />
                        이다 (x3)
                    </div>
                    <div>
                        많이 <br />
                        그렇다 (x4)
                    </div>
                    <div>
                        아주 <br />
                        많이 그렇다 (x5)
                    </div>
                </Row>
                <Row>
                    <div className="row-title"></div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                </Row>
                <Row>
                    <div className="row-title">개별 점수</div>
                    <div>1</div>
                    <div>6</div>
                    <div>10</div>
                    <div>20</div>
                    <div>20</div>
                </Row>
                <Row $color="#EE671F">
                    <div className="row-title">총점</div>
                    <div className="total-score">66</div>
                </Row>
                <Row>
                    <div className="row-title">총점 분류</div>
                    <div>
                        <Banner text="트라우마 군" $color={{ bgColor: "#EE671F", fColor: "#FFF" }} />
                    </div>
                </Row>
            </>
        ),
        2: <Section2 />,
    }

    return (
        <>
            <div></div>
            <Content>
                <Title>
                    <div className="step-title">
                        <span>[VTS 검사]</span>검사 결과
                    </div>
                    <div>
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
                    </div>
                </Title>
                <Form>
                    {resultView[view]}
                    <div onClick={() => setView(view == 1 ? 2 : 1)}>검사내용 보기</div>
                </Form>
            </Content>
            <div></div>
            {/* {openPopup && (
                <Popup
                    text="[위험성 판단] 검사 결과를 저장하시겠습니까?"
                    onSave={handlePrint}
                    onClose={() => setOpenPopup(false)}
                />
            )} */}
        </>
    )
}

export default Report
