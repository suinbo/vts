import styled from "styled-components"

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 540px;
`

export const Inner = styled.div`
    margin: 16px;
    padding: 16px;
`

export const Title = styled.div`
    font-size: 42px;
    margin-bottom: 24px;
    color: #132d6f;
    font-weight: 500;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    border-top: 2px solid #dadfee;
    padding: 24px;
    text-align: left;
`

export const InputForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;

    span {
        color: #132d6f;
        font-weight: 400;
    }
`

export const ButtonForm = styled.div`
    margin-top: 34px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    span {
        font-size: 14px;
    }
`
export const ApplyForm = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;
    font-size: 14px;
    font-weight: 500;
    color: #132d6f;
    margin-top: 20px;

    svg {
        cursor: pointer;
        position: relative;
        top: 1px;
        transform: rotate(-90deg);
    }
`
