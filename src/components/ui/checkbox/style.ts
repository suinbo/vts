import styled from "styled-components"

/** Checkbox */
export const StyledCheckbox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
`
// 0: 체크 X, 1: 체크 O
const checkedStyle: {
    [key: number]: {
        [key: string]: {
            borderColor: string
            bgColor: string
        }
    }
} = {
    0: {
        lined: {
            borderColor: "#132D6F",
            bgColor: "#EBEEF4",
        },
        primary: {
            borderColor: "#E8EAEF",
            bgColor: "#E8EAEF",
        },
        secondary: {
            borderColor: "#E8EAEF",
            bgColor: "#E8EAEF",
        },
    },
    1: {
        lined: {
            borderColor: "#fff",
            bgColor: "#132D6F",
        },
        primary: {
            borderColor: "#132D6F",
            bgColor: "#132D6F",
        },
        secondary: {
            borderColor: "#132D6F",
            bgColor: "#132D6F",
        },
    },
}

export const CircleCheckbox = styled.span<{ checked: boolean; theme?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    top: 1px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: ${props => `1px solid ${checkedStyle[Number(props.checked)][props.theme].borderColor}`};
    background: ${props => checkedStyle[Number(props.checked)][props.theme].bgColor} no-repeat center center;
    appearance: none;
`
export const Label = styled.span`
    cursor: pointer;
`
