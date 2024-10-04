import { NavIcon } from "@/components/ui/icon"
import { Answer, AssessmentForm, Nav, Question } from "./style"
import useStore from "@/store"
import { StepBar } from "@/components/ui"
import { useCallback } from "react"
import { useAssesmentData } from "../useData"
import { Content } from "../style"
import { getEvalsCount } from "../utils"
import usePopupStore, { defaultPopupValue } from "@/store/usePopup"
import { POPUPTYPE } from "@/resources/constant"
import { supabase } from "@/utils/superbase"

const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num
}

const Assessment = () => {
    const { state, setState } = useStore()

    const { current_enum } = state
    const { setPopup } = usePopupStore()
    const { currentValue, setCurrentValue } = useAssesmentData()

    // 문항 변경
    const onControl = useCallback(
        (nextId: number) => {
            setState(prev => ({
                ...prev,
                current_enum: nextId,
                report: currentValue.list.map(({ id, evals }) => ({ id, evals })),
            }))
        },
        [currentValue, current_enum]
    )

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

    /** 검사 완료 */
    const onSave = useCallback(async () => {
        const obj = {
            ...state,
            step: 3,
            page: 31,
            score: getEvalsCount(currentValue.list),
            report: currentValue.list.map(({ id, evals }) => ({ id, evals })),
            is_completed: true,
            created_at: new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }),
        }

        const { data: result } = await supabase
            .from("vts")
            .update([obj])
            .eq("noid", state.noid)
            .order("created_at", { ascending: false })
            .limit(1)
            .select("userId")

        if (result?.length) {
            setState(() => ({ ...obj }))
            setPopup(() => ({ ...defaultPopupValue }))
        }
    }, [currentValue])

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
                            onClick={async () => {
                                if (!currentValue.item.evals)
                                    setPopup(() => ({ isNotice: true, type: POPUPTYPE.CHECKANSWER, isOpen: true }))
                                else {
                                    // DB 저장
                                    setPopup(() => ({
                                        isNotice: false,
                                        type: POPUPTYPE.FINISHTEST,
                                        isOpen: true,
                                        onClick: onSave,
                                    }))
                                }
                            }}
                        />
                        <span className="result">검사 종료</span>
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
