import React, { RefObject } from "react"
import { StyledInput } from "./style"

const Input = ({
    refs,
    type = "text",
    value,
    placeholder,
    disabled = false,
    onChange,
    onKeyDown,
    theme = "default",
}: {
    refs?: RefObject<HTMLInputElement>
    type?: string
    value?: string | number
    placeholder?: string
    disabled?: boolean
    onChange?: (value: string) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    theme?: "default" | "lined"
}) => {
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.value)

    return (
        <StyledInput
            ref={refs}
            type={type}
            $theme={theme}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            autoComplete="off"
        />
    )
}

export default Input
