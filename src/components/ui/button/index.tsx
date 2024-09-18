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
    style,
}: {
    refs?: RefObject<HTMLButtonElement>
    onClick?: () => void
    onKeyUp?: (e: React.KeyboardEvent<HTMLButtonElement>) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void
    text?: string | React.ReactNode
    disabled?: boolean
    children?: React.ReactNode
    $isClicked?: boolean
    theme?: "primary" | "secondary" | "lined"
    style?: React.CSSProperties
}) => {
    return (
        <StyledButton
            style={style}
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
