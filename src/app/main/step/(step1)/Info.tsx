import { Form } from "@/components/layout"
import { AgeForm, FormItem, GenderForm, NameForm, ResultBottom, ResultForm, Title } from "./style"
import { useCallback, useState } from "react"
import { Button, Checkbox, Input, Popup, Selectbox } from "@/components/ui"
import { NavIcon } from "@/components/ui/icon"
import useStore from "@/store"
import { genders } from "@/resources/data"
import { ButtonWrapper, Content, DefaultNav as Nav } from "../style"
import { useValidate } from "@/hooks/useValidate"

const ages = Array.from({ length: 100 }, (_, i) => {
    const value = (i + 1).toString()

    return {
        id: value,
        name: value,
    }
})

const Info = () => {
    const {
        state: { info },
        setState,
    } = useStore()

    const [isChecked, setChecked] = useState<boolean>(false)
    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false)
    const { isInValid } = useValidate([info])

    const formContent = useCallback(() => {
        return (
            <ResultForm>
                <FormItem>
                    <NameForm>
                        <div>이름</div>
                        <Input placeholder="이름을 입력하세요." />
                    </NameForm>
                    <GenderForm>
                        <div>성별</div>
                        <div className="button-form">
                            {genders.map(({ id, value }) => (
                                <Button
                                    key={id}
                                    theme={info.gender == id ? "primary" : "secondary"}
                                    text={<Checkbox label={value} theme="lined" isChecked={info.gender == id} />}
                                    // onClick={() =>
                                    //     // setState(prev => ({
                                    //     //     ...prev,
                                    //     //     info: { ...prev.info, [target]: { ...prev.info[target], gender: id } },
                                    //     // }))
                                    // }
                                />
                            ))}
                        </div>
                    </GenderForm>
                    <AgeForm>
                        <div>나이</div>
                        <div className="age-form">
                            <div>
                                <span>만</span>
                                {isChecked ? (
                                    <Input
                                        type="number"
                                        theme="lined"
                                        //value={age ?? ""}
                                        onChange={value => {
                                            if (Number(value) > 130) return
                                            // setState(prev => ({
                                            //     ...prev,
                                            //     info: {
                                            //         ...prev.info,
                                            //         [target]: {
                                            //             ...prev.info[target],
                                            //             age: value,
                                            //         },
                                            //     },
                                            // }))
                                        }}
                                    />
                                ) : (
                                    <Selectbox
                                        items={ages}
                                        selectedId={""}
                                        onSelect={({ id }) => {
                                            // setState(prev => ({
                                            //     ...prev,
                                            //     info: {
                                            //         ...prev.info,
                                            //         [target]: { ...prev.info[target], age: Number(id) },
                                            //     },
                                            // }))
                                        }}
                                        style={{ height: 220 }}
                                    />
                                )}
                                <span>세</span>
                            </div>
                            <div>
                                <Checkbox label="직접 입력" theme="secondary" isChecked={isChecked} />
                            </div>
                        </div>
                    </AgeForm>
                </FormItem>
                <ResultBottom>
                    <div>※ 해당 정보는 이용자의 동의없이 외부로 유출하지 않습니다.</div>
                    <ButtonWrapper>
                        <Button
                            theme="lined"
                            text={
                                <span className="button-name">
                                    검사 시작
                                    <NavIcon style={{ width: 10, height: 20 }} />
                                </span>
                            }
                            onClick={() => setState(prev => ({ ...prev, step: 2, page: 21 }))}
                        />
                    </ButtonWrapper>
                </ResultBottom>
            </ResultForm>
        )
    }, [info])

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
            {isOpenPopup && (
                <Popup isAlert={true} text="인적사항을 모두 작성해주세요." onSave={() => setIsOpenPopup(false)} />
            )}
        </>
    )
}

export default Info
