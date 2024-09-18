import React, { RefObject } from "react"
import { StyledButton } from "./style"

const Button = ({
    refs,
    onClick,
    onKeyUp,
    onKeyDown,
    text,
    disabled,
    children,
    $isClicked,
    theme = "primary",
}: {
    refs?: RefObject<HTMLButtonElement>
    onClick?: () => void
    onKeyUp?: (e: React.KeyboardEvent<HTMLButtonElement>) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void
    text?: string | React.ReactNode
    disabled?: boolean
    children?: React.ReactNode
    $isClicked?: boolean
    theme?: "primary" | "secondary" | "checked" | "lined" | "lined_gray"
}) => {
    return (
        <StyledButton
            theme={theme}
            ref={refs}
            onClick={() => !disabled && onClick && onClick()}
            onKeyUp={e => onKeyUp && onKeyUp(e)}
            onKeyDown={e => onKeyDown && onKeyDown(e)}
            disabled={disabled}
            $isClicked={$isClicked}>
            {children ?? text}
        </StyledButton>
    )
}

export default Button
