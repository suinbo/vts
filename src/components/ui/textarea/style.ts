import styled from "styled-components"

export const StyledTextAreaWrapper = styled.div<{ height: number }>`
    background: #fff;
    box-shadow: 0px 0px 64.2px -15px rgba(0, 0, 0, 0.11);
    padding: 20px 30px;
    height: ${props => props.height}px;
    border-radius: 20px;
`
export const StyledTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    border: none;
    box-sizing: border-box;

    resize: none;

    &::placeholder {
        color: #d3d3d3;
    }

    &:disabled {
        background-color: #fff;
    }

    &:focus {
        // border: 1px solid #132d6f;
        outline: none;
    }

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        height: 20%;
        border-radius: 2px;
        background: #e4e4e4;
    }
`
