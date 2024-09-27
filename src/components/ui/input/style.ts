import styled from "styled-components"

/** Input */
const inputStyle: {
    [key: string]: {
        border?: string
        boxShadow?: string
        boderBottom?: string
        focusColor?: string
        padding?: string
        textAlign: string
    }
} = {
    default: {
        border: "1px solid #fff",
        boxShadow: "0px 0px 30px 10px rgba(46, 46, 46, 0.04)",
        boderBottom: "1px solid transparent",
        focusColor: "1px solid #132d6f",
        padding: "12px 30px",
        textAlign: "left",
    },
    lined: {
        border: "none",
        boxShadow: "none",
        boderBottom: "1px solid #D0D3DB",
        focusColor: "none",
        padding: "0 0 6px 0",
        textAlign: "center",
    },
}

export const StyledInput = styled.input<{ $theme: "default" | "lined" }>`
    font-size: 16px;
    width: 100%;
    border-radius: ${props => (props.$theme == "lined" ? "0" : "60px")};
    padding: ${props => inputStyle[props.$theme].padding};
    background-color: #fff;
    border: ${props => inputStyle[props.$theme].border};
    box-shadow: ${props => inputStyle[props.$theme].boxShadow};
    border-bottom: ${props => inputStyle[props.$theme].boderBottom};
    text-align: ${props => inputStyle[props.$theme].textAlign};

    &:focus {
        border: ${props => inputStyle[props.$theme].focusColor};
        border-bottom: 1px solid #132d6f;
    }

    &::placeholder {
        color: #c6c6c6;
        font-weight: 400;
    }
`
