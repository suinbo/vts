import { NoticeContent, PrivacyForm } from "./style"
import { Content } from "../style"

const Notice = () => {
    const InfoContent = () => {
        return (
            <PrivacyForm>
                <NoticeContent>
                    <p>검사를 완료하였습니다.</p>
                    <p>
                        <span>수사관</span> 을 통해 확인해주세요.
                    </p>
                </NoticeContent>
            </PrivacyForm>
        )
    }

    return (
        <>
            <div></div>
            <Content>
                <InfoContent />
            </Content>
            <div></div>
        </>
    )
}

export default Notice
