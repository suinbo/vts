import useStore from "@/store"
import { Content, Title } from "./style"
import { Form } from "@/components/layout"
import List from "./_component/List"

const ReportList = () => {
    const {} = useStore()

    return (
        <>
            <div></div>
            <Content>
                <Title>
                    <div className="step-title">
                        <span>[VTS 검사]</span>검사 현황 리스트
                    </div>
                    <div className="result-save">
                        <span>※ 회차를 선택하면 결과 화면으로 넘어갑니다.</span>
                    </div>
                </Title>
                <Form>
                    <List />
                </Form>
            </Content>
            <div></div>
        </>
    )
}

export default ReportList
