import { Banner, Selectbox, Textarea } from "@/components/ui"
import { OpinionText, Result, ResultCompact, ResultOpinion, ResultSection, Title } from "./style"
import Image from "next/image"
import { pencil } from "@/assets/images"
import { useLayoutEffect, useMemo, useRef, useState } from "react"
import { grades } from "@/resources/data"
import useStore from "@/store"

const Section2 = () => {
    const {
        state: {
            info: { current_grade },
        },
        setState,
    } = useStore()

    const refs = useRef<HTMLTextAreaElement | null>(null)
    const [isEdit, setIsEdit] = useState<boolean>(false)

    // useLayoutEffect(() => {
    //     if (isEdit && refs.current) {
    //         refs.current.value = dummyData
    //     }
    // }, [isEdit])

    const getGradeItem = useMemo(
        () => grades.find(grade => grade.id == current_grade) ?? { id: "", name: "", color: "" },
        [current_grade]
    )

    return (
        <>
            <ResultCompact $color="#CA1616">
                <div className="recommendation-level">
                    <ResultSection>
                        <Title>총 점</Title>
                        <p>
                            <span>66</span>점
                        </p>
                    </ResultSection>
                </div>
                <div className="decision-level">
                    <ResultSection>
                        <Title>결정 등급</Title>
                        <Banner text="트라우마 군" $color={{ bgColor: "#CA1616", fColor: "#fff" }} />
                    </ResultSection>
                </div>
            </ResultCompact>
            <ResultOpinion>
                <Banner text="종합 의견" $color={{ bgColor: "#eaeaea", fColor: "#000" }} />
                <OpinionText>
                    검사 결과 이번 범죄피해로 인한 스트레스가 높은 것으로 나타났습니다. 귀하의 스트레스 반응을 경감시킬
                    수 있는 전문가의 상담이 상당히 필요한 것으로 보입니다. 검사 결과 이번 범죄피해로 인한 스트레스가
                    높은 것으로 나타났습니다. 귀하의 스트레스 반응을 경감시킬 수 있는 전문가의 상담이 상당히 필요한
                    것으로 보입니다. 검사 결과 이번 범죄피해로 인한 스트레스가 높은 것으로 나타났습니다. 귀하의 스트레스
                    반응을 경감시킬 수 있는 전문가의 상담이 상당히 필요한 것으로 보입니다. 검사 결과 이번 범죄피해로
                    인한 스트레스가 높은 것으로 나타났습니다. 귀하의 스트레스 반응을 경감시킬 수 있는 전문가의 상담이
                    상당히 필요한 것으로 보입니다. 검사 결과 이번 범죄피해로 인한 스트레스가 높은 것으로 나타났습니다.
                    귀하의 스트레스 반응을 경감시킬 수 있는 전문가의 상담이 상당히 필요한 것으로 보입니다. 검사 결과
                    이번 범죄피해로 인한 스트레스가 높은 것으로 나타났습니다. 귀하의 스트레스 반응을 경감시킬 수 있는
                    전문가의 상담이 상당히 필요한 것으로 보입니다. 검사 결과 이번 범죄피해로 인한 스트레스가 높은 것으로
                    나타났습니다. 귀하의 스트레스 반응을 경감시킬 수 있는 전문가의 상담이 상당히 필요한 것으로 보입니다.
                    검사 결과 이번 범죄피해로 인한 스트레스가 높은 것으로 나타났습니다. 귀하의 스트레스 반응을 경감시킬
                    수 있는 전문가의 상담이 상당히 필요한 것으로 보입니다. 검사 결과 이번 범죄피해로 인한 스트레스가
                    높은 것으로 나타났습니다. 귀하의 스트레스 반응을 경감시킬 수 있는 전문가의 상담이 상당히 필요한
                    것으로 보입니다.{" "}
                </OpinionText>
            </ResultOpinion>
        </>
    )
}

export default Section2
