import styled from "styled-components"

/** Button */
const values = () => {
    return {
        primary: {
            fColor: "#fff",
            bgColor: "#132D6F",
            border: "2px solid transparent",
        },
        secondary: {
            fColor: "#000",
            bgColor: "#EBEEF4",
            border: "2px solid transparent",
        },
        lined: {
            fColor: "#132D6F",
            bgColor: "#fff",
            border: "2px solid #132D6F",
            fontWeight: 500,
        },
        lined_gray: {
            fColor: "#343434",
            bgColor: "#fff",
            border: "2px solid #DFE0E2",
            padding: "10px 30px",
            fontWeight: 500,
        },
    } as { [key: string]: { fColor: string; bgColor: string; border: string; padding?: string; fontWeight?: number } }
}

export const StyledButton = styled.button<{
    theme?: "primary" | "secondary" | "lined" | "lined_gray"
    $isClicked?: boolean
}>`
    cursor: pointer;
    width: 100%;
    border: ${props => values()[props.theme].border};
    border-radius: 60px;
    padding: ${props => (!values()[props.theme].padding ? "12px 30px" : values()[props.theme].padding)};
    background-color: ${props => values()[props.theme].bgColor};
    font-weight: ${props => (!values()[props.theme].fontWeight ? 400 : values()[props.theme].fontWeight)};
    color: ${props => values()[props.theme].fColor};
    font-size: 15px;

    @media (max-width: 580px) {
        font-size: 14px;
    }

    label {
        display: flex;
        align-items: center;
        gap: 20px;
        cursor: pointer;
    }

    input[type="radio"] {
        position: relative;
        top: 1px;
        cursor: pointer;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid #fff;
        background-color: ${props => (props.$isClicked ? "#132D6F" : "#fff")};
        color: ${props => (props.$isClicked ? "#fff" : "#000")};
        appearance: none;
    }
`
