import useStore from "@/store"
import { NoticeContent, PrivacyContent, PrivacyForm } from "./style"
import { Button } from "@/components/ui"
import { NavIcon } from "@/components/ui/icon"
import { USERTYPE } from "@/resources/constant"
import { ButtonWrapper, Content } from "../style"

const Notice = () => {
    const { setState } = useStore()

    const InfoContent = () => {
        return (
            <PrivacyForm>
                <NoticeContent>
                    <p>문항 작성을 완료하였습니다.</p>
                    <p>
                        <span>수사관</span> 에게 전달해주세요.
                    </p>
                </NoticeContent>
                <ButtonWrapper>
                    <Button
                        theme="lined"
                        onClick={() =>
                            setState(prev => ({
                                ...prev,
                                user: USERTYPE.POLICE,
                                page: 22,
                                info: {
                                    ...prev.info,
                                    current_enum: 13,
                                    user: USERTYPE.POLICE,
                                },
                            }))
                        }
                        text={
                            <span className="button-name">
                                [수사관] 검사 시작
                                <NavIcon style={{ width: 10, height: 20 }} />
                            </span>
                        }
                    />
                </ButtonWrapper>
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
