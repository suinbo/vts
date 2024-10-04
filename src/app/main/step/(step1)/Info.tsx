import { Form } from "@/components/layout"
import { AgeForm, FormItem, GenderForm, NameForm, ResultBottom, ResultForm, Title } from "./style"
import { useCallback, useState } from "react"
import { Button, Checkbox, Input, Selectbox } from "@/components/ui"
import { NavIcon } from "@/components/ui/icon"
import useStore from "@/store"
import { genders } from "@/resources/data"
import { ButtonWrapper, Content } from "../style"
import { useValidate } from "@/hooks/useValidate"
import usePopupStore from "@/store/usePopup"
import { POPUPTYPE } from "@/resources/constant"
import { supabase } from "@/utils/superbase"
import { useSession } from "@/hooks/useSession"

const ages = Array.from({ length: 100 }, (_, i) => {
    const value = (i + 1).toString()

    return {
        id: value,
        name: value,
    }
})

const Info = () => {
    const { state, setState } = useStore()

    const { info } = state
    const { setPopup } = usePopupStore()
    const [isChecked, setChecked] = useState<boolean>(false)
    const { isInValid } = useValidate(info)
    const { user } = useSession()

    const formContent = useCallback(() => {
        return (
            <ResultForm>
                <FormItem>
                    <NameForm>
                        <div className="title">이름</div>
                        <Input
                            placeholder="이름을 입력하세요."
                            value={info.name}
                            onChange={name => setState(prev => ({ ...prev, info: { ...prev.info, name } }))}
                        />
                    </NameForm>
                    <GenderForm>
                        <div className="title">성별</div>
                        <div className="button-form">
                            {genders.map(({ id, value }) => (
                                <Button
                                    key={id}
                                    theme={info.gender == id ? "primary" : "secondary"}
                                    text={<Checkbox label={value} theme="lined" isChecked={info.gender == id} />}
                                    onClick={() =>
                                        setState(prev => ({
                                            ...prev,
                                            info: { ...prev.info, gender: id },
                                        }))
                                    }
                                />
                            ))}
                        </div>
                    </GenderForm>
                    <AgeForm>
                        <div className="title">나이</div>
                        <div className="age-form">
                            <div className="age-input">
                                <span>만</span>
                                {isChecked ? (
                                    <div>
                                        <Input
                                            type="number"
                                            theme="lined"
                                            value={info.age ?? ""}
                                            onChange={value => {
                                                const numValue = Number(value)
                                                if (numValue > 130) return
                                                setState(prev => ({
                                                    ...prev,
                                                    info: {
                                                        ...prev.info,
                                                        age: numValue,
                                                    },
                                                }))
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <Selectbox
                                        items={ages}
                                        selectedId={info.age}
                                        onSelect={({ id }) => {
                                            setState(prev => ({
                                                ...prev,
                                                info: {
                                                    ...prev.info,
                                                    age: Number(id),
                                                },
                                            }))
                                        }}
                                        style={{ height: 220 }}
                                    />
                                )}
                                <span>세</span>
                            </div>
                            <div>
                                <Checkbox
                                    label="직접 입력"
                                    theme="secondary"
                                    onChange={setChecked}
                                    isChecked={isChecked}
                                />
                            </div>
                        </div>
                    </AgeForm>
                </FormItem>
                <ResultBottom>
                    <div className="notice">※ 해당 정보는 이용자의 동의없이 외부로 유출하지 않습니다.</div>
                    <ButtonWrapper>
                        <Button
                            theme="lined"
                            text={
                                <span className="button-name">
                                    검사 시작
                                    <NavIcon style={{ width: 10, height: 20 }} />
                                </span>
                            }
                            onClick={async () => {
                                if (isInValid) {
                                    setPopup(() => ({ isNotice: true, isOpen: true, type: POPUPTYPE.FILLINFO }))
                                } else {
                                    const { noid, ...restState } = state
                                    const { data: result } = await supabase
                                        .from("vts")
                                        .insert([restState])
                                        .select("noid")

                                    if (result?.length) {
                                        const noid = result[0].noid
                                        setState(prev => ({
                                            ...prev,
                                            noid,
                                            step: 2,
                                            page: 21,
                                            userId: user?.id,
                                            test_count: 1,
                                        }))
                                    }
                                }
                            }}
                        />
                    </ButtonWrapper>
                </ResultBottom>
            </ResultForm>
        )
    }, [info, isChecked])

    return (
        <>
            <div></div>
            <Content>
                <Title>
                    <span>[VTS 검사]</span>인적사항 작성
                </Title>
                <Form>{formContent()}</Form>
            </Content>
            <div></div>
        </>
    )
}

export default Info
