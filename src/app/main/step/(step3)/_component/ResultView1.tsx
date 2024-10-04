import { Banner } from "@/components/ui"
import { Row } from "./style"
import { ResultProp } from "@/resources/type"

const ResultView1 = ({ score, item: { total, grade = "", color } }: { score: number[]; item: ResultProp }) => {
    return (
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
                {score.map((item, idx) => (
                    <div key={`count_${idx}`}>{item}</div>
                ))}
            </Row>
            <Row>
                <div className="row-title">개별 점수</div>
                {score.map((item, idx) => (
                    <div key={`score_${idx}`}>{item * (idx + 1)}</div>
                ))}
            </Row>
            <Row $color="#EE671F">
                <div className="row-title">총점</div>
                <div className="total-score" style={{ color }}>
                    {total}
                </div>
            </Row>
            <Row>
                <div className="row-title">총점 분류</div>
                <div>
                    <Banner text={grade} $color={{ bgColor: color, fColor: "#FFF" }} />
                </div>
            </Row>
        </>
    )
}

export default ResultView1
