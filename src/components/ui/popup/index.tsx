import React, { useRef } from "react"
import { ButtonWrapper, PopupInner, PopupWrapper } from "./style"
import Button from "../button"
import { usePreventOutside } from "@/hooks/usePreventOutside"

const Popup = ({
    text,
    onSave,
    onClose,
    isNotice = false,
}: {
    text?: string
    onSave?: () => void
    onClose?: () => void
    isNotice?: boolean
}) => {
    const popupRef = useRef<HTMLDivElement>(null)

    /** 외부 영역 클릭 방지 */
    usePreventOutside(popupRef)

    return (
        <PopupWrapper ref={popupRef}>
            <PopupInner>
                <p>{text}</p>
                <ButtonWrapper>
                    <Button text="예" onClick={isNotice ? onClose : onSave} theme={isNotice ? "lined" : "primary"} />
                    {!isNotice && <Button text="아니오" onClick={onClose} theme="secondary" />}
                </ButtonWrapper>
            </PopupInner>
        </PopupWrapper>
    )
}

export default Popup
