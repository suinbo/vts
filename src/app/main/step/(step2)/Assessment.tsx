import { NavIcon } from "@/components/ui/icon"
import { Answer, AssessmentForm, Nav, Question } from "./style"
import useStore from "@/store"
import { StepBar } from "@/components/ui"
import { useCallback } from "react"
import { useAssesmentData } from "../useData"
import { Content } from "../style"
import { getEvalsCount } from "../utils"
import usePopupStore from "@/store/usePopup"
import { POPUPTYPE } from "@/resources/constant"

const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num
}

const Assessment = () => {
    const {
        state: { current_enum },
        setState,
    } = useStore()

    const { setPopup } = usePopupStore()
    const { currentValue, setCurrentValue } = useAssesmentData()

    // 문항 변경
    const onControl = useCallback(
        (nextId: number) => {
            setState(prev => ({ ...prev, current_enum: nextId }))
        },
        [currentValue, current_enum]
    )

    console.log(currentValue)

    /** 버튼 클릭 */
    const onButtonClick = useCallback(
        (selectedId: number) => {
            setCurrentValue(prev => {
                return {
                    ...prev,
                    item: { ...prev.item, evals: selectedId },
                    list: prev.list.map(obj => {
                        return {
                            ...obj,
                            evals: obj.id == current_enum ? selectedId : obj.evals,
                        }
                    }),
                }
            })
        },
        [currentValue, current_enum]
    )

    return (
        <>
            {current_enum !== 1 ? (
                <Nav type="prev">
                    <NavIcon
                        fill="#DADDE4"
                        style={{ width: 40, height: 40 }}
                        onClick={() => onControl(current_enum - 1)}
                    />
                </Nav>
            ) : (
                <div></div>
            )}
            <Content>
                <AssessmentForm>
                    <Question>
                        <div className="numbering">
                            <div className="progress">
                                <span>{formatNumber(currentValue?.item.id)}</span>/
                                <span>{formatNumber(currentValue?.total)}</span>
                            </div>
                        </div>
                        <div className="content">{currentValue.item?.content}</div>
                    </Question>
                    <Answer>
                        <StepBar step={currentValue.item.evals} setStep={onButtonClick} />
                    </Answer>
                </AssessmentForm>
            </Content>
            <Nav type="next">
                {currentValue?.item.id == currentValue?.total ? (
                    <>
                        <NavIcon
                            fill="#132D6F"
                            style={{ width: 40, height: 40 }}
                            onClick={() => {
                                if (!currentValue.item.evals)
                                    setPopup(() => ({ isNotice: true, type: POPUPTYPE.CHECKANSWER, isOpen: true }))
                                else {
                                    setState(prev => ({ ...prev, page: 31, score: getEvalsCount(currentValue.list) }))
                                    // DB 저장
                                }
                            }}
                        />
                        <span className="result">결과 확인</span>
                    </>
                ) : (
                    <NavIcon
                        fill="#DADDE4"
                        style={{ width: 40, height: 40 }}
                        onClick={() => {
                            if (!currentValue.item.evals)
                                setPopup(() => ({ isNotice: true, type: POPUPTYPE.CHECKANSWER, isOpen: true }))
                            else onControl(current_enum + 1)
                        }}
                    />
                )}
            </Nav>
        </>
    )
}

export default Assessment
