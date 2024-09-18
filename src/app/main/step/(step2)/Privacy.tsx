import useStore from "@/store"
import { NavIcon } from "@/components/ui/icon"
import { PrivacyForm, PrivacyContent, Nav } from "./style"
import { Button, Checkbox } from "@/components/ui"
import { useState } from "react"
import { ButtonWrapper, Content } from "../style"
import { Title } from "../(step1)/style"

const Privacy = () => {
    const { setState } = useStore()
    const [isChecked, setChecked] = useState<boolean>(false)

    const InfoContent = () => {
        return (
            <Content>
                <Title>
                    <span>[VTS 검사]</span>개인정보 동의
                </Title>
                <PrivacyForm>
                    <PrivacyContent>
                        <ul>
                            <li>
                                본 검사는 범죄피해로 인한 심리적 충격이 어느 정도인지 측정하는 검사로, 제시되는 문항은
                                충격적인 범죄피해를 입은 후 나타날 수 있는 여러 경험들의 목록 입니다.
                            </li>
                            <li>
                                가장 최근에 경험한 범죄피해 이후 현재까지 이러한 문제들로 인해서 얼마나 많은 어려움을
                                겪으셨는지를 각 문항에 표시하십시오.
                            </li>
                            <li>
                                응답 내용은 경찰의 피해자 보호ㆍ지원을 위한 기초자료로만 사용되며, 동의 없이 외부로
                                유출하지 않습니다.
                            </li>
                        </ul>
                        <div className="agreement">
                            <p onClick={() => setChecked(!isChecked)}>위 내용을 숙지하였습니다.</p>
                            <Checkbox isChecked={isChecked} onChange={setChecked} theme="secondary" />
                        </div>
                    </PrivacyContent>
                    {isChecked && (
                        <ButtonWrapper>
                            <Button
                                theme="lined"
                                onClick={() => setState(prev => ({ ...prev, page: 12 }))}
                                text={
                                    <span className="button-name">
                                        검사 시작
                                        <NavIcon style={{ width: 10, height: 20 }} />
                                    </span>
                                }
                            />
                        </ButtonWrapper>
                    )}
                </PrivacyForm>
            </Content>
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

export default Privacy
