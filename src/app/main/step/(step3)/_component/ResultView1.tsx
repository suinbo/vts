import { Banner } from "@/components/ui"
import { Row } from "./style"

const ResultView1 = ({ score, total }: { score: number[]; total: number }) => {
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
                <div className="total-score">{total}</div>
            </Row>
            <Row>
                <div className="row-title">총점 분류</div>
                <div>
                    <Banner text="트라우마 군" $color={{ bgColor: "#EE671F", fColor: "#FFF" }} />
                </div>
            </Row>
        </>
    )
}

export default ResultView1
