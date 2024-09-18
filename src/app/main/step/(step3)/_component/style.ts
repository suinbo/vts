import styled from "styled-components"

const commonStyles = `
    background: #fff;
    box-shadow: 0px 0px 66.2px -22px rgba(0, 0, 0, 0.13);
    
`

export const Description = styled.div`
    ${commonStyles}
    border-radius: 26px;
    padding: 20px 30px;
    text-align: left;
`

export const Result = styled.div`
    ${commonStyles}
    padding: 30px 40px;
    border-radius: 36px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const ResultCompact = styled.div<{ $color: string }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #d0d3db;

    > div {
        display: flex;
        justify-content: space-between;

        &:nth-child(1)::after {
            content: "";
            width: 2px;
            height: 30px;
            background-color: #d0d3db;
        }

        &.recommendation-level {
        }

        &.yes-count {
            display: flex;
            align-items: center;

            .focus {
                margin-right: 8px;
                font-size: 24px;
                font-weight: 600;
                color: ${props => props.$color};
            }
        }

        .select-form {
            display: flex;
            align-items: center;
            gap: 16px;
            cursor: pointer;
        }
    }
`

export const ResultSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 56px;
`

export const Title = styled.div`
    font-weight: 500;

    span {
        font-weight: 600;
        margin-right: 8px;
    }
`

export const ResultOpinion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
    height: 100%;
    margin-top: 20px;

    p {
        font-size: 18px;
        padding: 8px;
    }
`
export const OpinionText = styled.div`
    overflow-y: scroll;
    height: 210px;
    margin: 8px;
    padding-right: 20px;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        height: 20%;
        border-radius: 2px;
        background: #e4e4e4;
    }
`
