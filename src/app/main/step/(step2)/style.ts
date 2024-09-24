import styled from "styled-components"
import { DefaultNav } from "../style"

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
    width: 1160px;
`
export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    .step-title {
        font-size: 32px;
        font-weight: 500;

        span {
            font-weight: 600;
            margin-right: 20px;
            color: #132d6f;
        }
    }

    .button-name {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        svg {
            transform: rotate(-90deg);
        }
    }
`

export const Nav = styled(DefaultNav)<{ type: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;

    .result {
        color: #132d6f;
        font-size: 14px;
        font-weight: 500;
    }
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    gap: 18px;

    > span {
        color: #132d6f;
        padding: 1px;
        border-bottom: 1px solid #132d6f;
    }

    svg {
        transform: rotate(-90deg);
    }
`

/** Privacy */
export const PrivacyForm = styled.div`
    width: 100%;
    height: 460px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6fr 1fr;
    gap: 20px;
`
export const PrivacyContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    box-shadow: 0px 0px 66.2px -22px rgba(0, 0, 0, 0.13);
    border-radius: 40px;
    padding: 40px 50px;
    text-align: left;

    ul {
        font-size: 18px;
        display: flex;
        flex-direction: column;
        gap: 28px;

        li {
            display: flex;
            align-items: baseline;
            gap: 18px;

            &::before {
                position: relative;
                top: -3px;
                content: "";
                width: 8px;
                height: 8px;
                background-color: #132d6f;
                border-radius: 50%;
            }
        }
    }

    .agreement {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;

        > p {
            cursor: pointer;
            font-size: 20px;
            font-weight: 500;
        }
    }
`
/** Assessment */
export const AssessmentForm = styled.div`
    width: 100%;
    height: 460px;
    display: flex;
    flex-direction: column;
    gap: 80px;
`

export const Question = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;

    .numbering {
        display: flex;
        justify-content: center;
        .progress {
            display: flex;
            font-size: 32px;
            align-items: baseline;
            color: #132d6f;

            > span {
                font-weight: 600;
                margin: 0 14px;

                &:first-child {
                    font-size: 60px;
                }
            }
        }
    }

    .content {
        display: flex;
        justify-content: center;
        text-align: left;
        font-size: 26px;
    }
`

export const Answer = styled.div`
    display: flex;
    padding: 0 240px;
    gap: 36px;
`
