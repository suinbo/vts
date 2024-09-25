import { useRef, useState } from "react"
import Image from "next/image"
import { arrow, close, person } from "@/assets/images"
import { AccountForm, Alert, ImageFrame, InputForm, PopupWrapper, Title } from "./style"
import Input from "../input"
import { usePreventOutside } from "@/hooks/usePreventOutside"
import { supabase } from "@/utils/superbase"
import { generateRandomString } from "@/utils/common"
import { AccountProp } from "@/resources/type"
import Banner from "../banner"

const SignupPopup = ({ title, onClose }: { title: string; onClose: () => void }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const popupRef = useRef<HTMLDivElement>(null)
    const [{ id, random_password }, setAccount] = useState<AccountProp>({ id: "", random_password: "" })
    const [alertMessage, setAlertMessage] = useState<string>("")

    /** 외부 영역 클릭 방지 */
    usePreventOutside(popupRef)

    const onSubmit = async (e: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => {
        e.preventDefault() //form 기본 동작(제출) 방지
        const current = inputRef.current

        if (current && current.value) {
            const id = current.value
            const password = generateRandomString()

            const { data } = await supabase.auth.signUp({
                email: `${id}@atc.com`,
                password,
                options: {
                    emailRedirectTo: "/", // 이메일 인증 링크를 보내지 않음 (supabase setting > confirm email 비활성화)
                },
            })
            if (data) setAccount({ id, random_password: password })
        } else {
            setAlertMessage("입력해주세요.")
        }
    }

    const AccountElement = () => (
        <AccountForm>
            <div>
                <Banner text="아이디" $color={{ bgColor: "#e9ebf1", fColor: "#132D6F" }} />
                <span>{id}</span>
            </div>
            <div>
                <Banner text="비밀번호" $color={{ bgColor: "#e9ebf1", fColor: "#132D6F" }} />
                <span>{random_password}</span>
            </div>
        </AccountForm>
    )

    const InputElement = () => (
        <>
            <InputForm>
                <Input
                    refs={inputRef}
                    theme="lined"
                    placeholder="아이디를 입력해주세요. (영/숫자 조합 8자 이하)"
                    onKeyDown={(e: React.KeyboardEvent<HTMLSpanElement>) => {
                        e.key == "Enter" && onSubmit(e)
                    }}
                />
                <Image src={arrow} alt="arrow" width={30} height={30} onClick={e => onSubmit(e)} />
            </InputForm>
            {alertMessage && (
                <Alert>
                    <span className="alert">※ {alertMessage}</span>
                </Alert>
            )}
        </>
    )

    return (
        <PopupWrapper>
            <ImageFrame>
                <Image src={close} alt="close" onClick={onClose} />
            </ImageFrame>
            <Title>
                <div>
                    <Image src={person} alt="person" />
                    <p>{title}</p>
                </div>
                <span>※ 비밀번호는 자동 생성됩니다.</span>
            </Title>
            {id && random_password ? <AccountElement /> : <InputElement />}
        </PopupWrapper>
    )
}

export default SignupPopup
