import styled from "styled-components"

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 610px;

    @media (max-width: 580px) {
        width: 100%;
    }
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

    @media (max-width: 580px) {
        font-size: 34px;
    }
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
    .error {
        font-size: 14px;
        color: #d80000;

        @media (max-width: 580px) {
            font-size: 13px;
        }
    }

    @media (max-width: 580px) {
        font-size: 14px;
    }
`

export const ButtonForm = styled.div`
    margin-top: 34px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    > div {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        gap: 4px;

        .text-group {
            display: flex;
            gap: 6px;
        }

        .none-view {
            color: transparent;
        }
    }
`
