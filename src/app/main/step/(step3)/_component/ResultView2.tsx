import { Banner } from "@/components/ui"
import { OpinionText, ResultCompact, ResultOpinion, ResultSection, Title } from "./style"
import { ResultProp } from "@/resources/type"

const ResultView2 = ({ item: { total, grade = "", opinion } }: { item: ResultProp }) => {
    return (
        <>
            <ResultCompact>
                <div>
                    <ResultSection $color="#EE671F">
                        <p>총 점</p>
                        <p>
                            <span>{total}</span> 점
                        </p>
                    </ResultSection>
                </div>
                <div className="decision-level">
                    <ResultSection>
                        <Title>결정 등급</Title>
                        <Banner text={grade} $color={{ bgColor: "#EE671F", fColor: "#fff" }} />
                    </ResultSection>
                </div>
            </ResultCompact>
            <ResultOpinion>
                <Banner text="종합 의견" $color={{ bgColor: "#eaeaea", fColor: "#000" }} />
                <OpinionText>{opinion}</OpinionText>
            </ResultOpinion>
        </>
    )
}

export default ResultView2
