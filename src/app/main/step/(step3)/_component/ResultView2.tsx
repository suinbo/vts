import { Banner } from "@/components/ui"
import { OpinionText, ResultCompact, ResultOpinion, ResultSection, Title } from "./style"
import { ResultProp } from "@/resources/type"

const ResultView2 = ({ item: { total, grade = "", opinion, color } }: { item: ResultProp }) => {
    return (
        <>
            <ResultCompact>
                <div>
                    <ResultSection $color="#EE671F">
                        <p>총 점</p>
                        <p>
                            <span style={{ color }}>{total}</span> 점
                        </p>
                    </ResultSection>
                </div>
                <div className="decision-level">
                    <ResultSection>
                        <Title>결정 등급</Title>
                        <Banner text={grade} $color={{ bgColor: color, fColor: "#fff" }} />
                    </ResultSection>
                </div>
            </ResultCompact>
            <ResultOpinion>
                <div>
                    <Banner text="종합 의견" $color={{ bgColor: "#eaeaea", fColor: "#000" }} />
                </div>
                <OpinionText>{opinion}</OpinionText>
            </ResultOpinion>
        </>
    )
}

export default ResultView2
