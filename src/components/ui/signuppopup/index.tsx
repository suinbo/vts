import { useRef, useState } from "react"
import Image from "next/image"
import { arrow, close } from "@/assets/images"
import { Alert, ImageFrame, InputForm, PopupWrapper, Title } from "./style"
import Input from "../input"
import { usePreventOutside } from "@/hooks/usePreventOutside"
// import { supabase } from "@/utils/superbase"

const SignupPopup = ({ title, onClose, onSave }: { title: string; onClose: () => void; onSave: () => void }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const popupRef = useRef<HTMLDivElement>(null)
    const [alertMessage, setAlertMessage] = useState<string>("")

    /** 외부 영역 클릭 방지 */
    usePreventOutside(popupRef)

    const onSubmit = async (e: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => {
        e.preventDefault() //form 기본 동작(제출) 방지
        const current = inputRef.current

        if (current && current.value) {
            onSave()
        } else {
            setAlertMessage("입력해주세요.")
        }
    }

    return (
        <PopupWrapper>
            <ImageFrame>
                <Image src={close} alt="close" onClick={onClose} />
            </ImageFrame>
            <Title>
                <p>{title}</p>
                <span>※ 비밀번호는 자동 생성됩니다.</span>
            </Title>
            <InputForm>
                <form>
                    <Input
                        refs={inputRef}
                        theme="lined"
                        type="password"
                        placeholder="아이디를 입력해주세요."
                        onKeyDown={(e: React.KeyboardEvent<HTMLSpanElement>) => {
                            e.key == "Enter" && onSubmit(e)
                        }}
                    />
                </form>
                <Image src={arrow} alt="arrow" width={30} height={30} onClick={e => onSubmit(e)} />
            </InputForm>
            {alertMessage && (
                <Alert>
                    <span className="alert">※ {alertMessage}</span>
                </Alert>
            )}
        </PopupWrapper>
    )
}

export default SignupPopup
