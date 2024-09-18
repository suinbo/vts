import React from "react"
import { CircleCheckbox, Label, StyledCheckbox } from "./style"
import { CheckIcon } from "../icon"

export type CheckboxThemeProp = "primary" | "lined" | "secondary"

const Checkbox = ({
    label,
    isChecked = false,
    onChange,
    theme = "primary",
}: {
    label?: string
    isChecked?: boolean
    onChange?: (isChecked: boolean) => void
    theme?: CheckboxThemeProp
}) => {
    const onClick = () => {
        onChange && onChange(!isChecked)
    }

    const iconColor = {
        primary: "#132D6F",
        lined: "#132D6F",
        secondary: "#fff",
    }

    return (
        <StyledCheckbox>
            <CircleCheckbox checked={isChecked} theme={theme} onClick={onClick}>
                <CheckIcon fill={isChecked ? "#fff" : iconColor[theme]} style={{ width: 9, height: 9 }} />
            </CircleCheckbox>
            <Label onClick={onClick}>{label}</Label>
        </StyledCheckbox>
    )
}

export default Checkbox
